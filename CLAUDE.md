# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This App Does

slideTube-ai converts YouTube videos into PowerPoint presentations. Users paste a YouTube URL → system extracts subtitles → Gemini AI generates slide content → pptxgenjs builds a `.pptx` file → UploadThing hosts it → user gets a download link.

## Commands

```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Production build
npm run lint         # ESLint check
npm run check-types  # TypeScript type check
npm run test         # Jest test suite
npm run test:coverage
```

Git commits must follow Conventional Commits (enforced by CommitLint + Husky): `feat:`, `fix:`, `docs:`, etc.

## Architecture

### Route Structure

```
src/app/
├── (auth)/          # Clerk sign-in/sign-up pages
├── (landing)/       # Public pages: home, /generate, /dashboard
│   └── components/  # Landing page sections (Hero, Features, Pricing, FAQ, etc.)
├── api/             # OG image generation
└── components/      # App-wide components (GenerateForm, DashboardPresentations)

actions/             # Next.js server actions ('use server')
├── generatePowerPoint.ts  # ALL core business logic
└── authCallBack.ts        # Clerk webhook → create user in DB

db/index.ts          # Prisma client singleton (cached in dev)
```

### Core Data Flow (`actions/generatePowerPoint.ts`)

`CreatePowerpoint` (main entry point, called from GenerateForm):
1. `currentUser()` — Clerk auth check
2. `GetVideoLengthAndSubtitles` — RapidAPI yt-api call; validates video ≤15 min, extracts subtitle XML URL
3. `parseXMLContent` — fetches XML, uses xmldom DOMParser, returns plain text transcript
4. **Parallel AI calls**:
   - `CreateTitleAndDescription` — Gemini generates presentation title + description
   - `ConvertToObjects` — Gemini converts transcript to 10 slide objects `{title, bullets[]}`
5. `CreatePowerpointFromArrayOfObjects` — pptxgenjs builds PPTX, returns `Buffer`
6. `UploadPowerpointToUploadThing` — uploads Buffer to UploadThing CDN, returns URL
7. Saves `GeneratedPowerpoints` record to DB, returns download URL to client

### AI Response Parsing Quirk

Gemini wraps JSON in markdown code fences. Both AI functions extract content via regex:
```ts
const match = text.match(/```json\n([\s\S]*?)\n```/);
```
Both have fallback return values if parsing fails — the app should never hard-crash due to AI output.

### Database (Prisma + PostgreSQL)

Two models: `User` (Clerk ID as primary key) and `GeneratedPowerpoints` (linked to User, stores UploadThing URL + title/description). DB is only accessed from server actions.

### Client Components

`GenerateForm` (`src/app/components/GenerateForm.tsx`) is the main interactive component: validates YouTube URL with regex, renders iframe preview, calls `CreatePowerpoint`, shows toast + download button on success.

## Environment Variables

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
RAPID_API_KEY=       # RapidAPI for YouTube metadata
GEMINI_API_KEY=      # Google Generative AI
UPLOADTHING_TOKEN=
NEXT_PUBLIC_APP_URL= # For OG image generation
```

## Styling

- Tailwind CSS with CSS variable-based theming (HSL values in `global.css`)
- Dark mode via `next-themes` (class strategy)
- Use `cn()` from `lib/utils` (clsx + tailwind-merge) for conditional class merging
- Custom media query helpers in `lib/screens.ts`

## Key Constraints

- Video length hard-capped at 900 seconds in `GetVideoLengthAndSubtitles`
- PPTX generation is in-memory (Buffer); never written to disk
- OpenAI SDK is installed but unused
