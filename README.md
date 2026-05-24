<div align="center">

<br />

<img src="https://img.shields.io/badge/SlideTube-AI-7c3aed?style=for-the-badge&logo=lightning&logoColor=white" alt="SlideTube AI" height="40" />

# SlideTube AI

### Turn any YouTube video into a polished PowerPoint — in under 60 seconds.

Paste a URL. Our AI reads the transcript, extracts key ideas, and delivers a fully editable `.pptx` file ready to present or share.

<br />

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Gemini AI](https://img.shields.io/badge/Gemini_1.5_Flash-4285F4?style=flat-square&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Build](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)]()

<br />

[**Live Demo**](https://slidetube-ai.vercel.app) · [**Generate a Presentation**](https://slidetube-ai.vercel.app/generate) · [**Report a Bug**](https://github.com/Engraya/slideTube-ai/issues) · [**Request a Feature**](https://github.com/Engraya/slideTube-ai/issues)

<br />

</div>

---

## What is SlideTube AI?

SlideTube AI solves a specific, painful workflow problem: **converting video content into presentable slides takes hours of manual work**. Educators re-watch lectures to make study decks. Professionals summarize YouTube talks for internal meetings. Content creators repurpose video material for client decks.

SlideTube AI eliminates that friction entirely. Paste any YouTube URL, and the platform automatically:

1. Extracts the video transcript via the YouTube API
2. Feeds it to **Google Gemini 1.5 Flash** for intelligent summarization
3. Generates a structured 10-slide presentation with concise bullet points
4. Builds a pixel-perfect `.pptx` file entirely in-memory
5. Hosts it on a secure CDN and returns a one-click download link

**Who is it for?** Students, educators, content creators, business analysts, and anyone who consumes video content and needs to communicate those ideas through slides.

---

## Features

### Core Generation
- **One-input workflow** — paste a YouTube URL and receive a download link; no manual configuration
- **10 AI-structured slides** — introduction, key concepts, supporting points, and conclusion, organized by Gemini
- **Instant `.pptx` download** — standard Office Open XML format, openable in PowerPoint, Google Slides, and Keynote
- **In-memory processing** — PPTX files are built and uploaded without ever touching disk
- **CDN-hosted output** — every generated file is uploaded to UploadThing and served from a persistent, shareable URL

### AI Pipeline
- **Google Gemini 1.5 Flash** — fast, cost-effective model for both title generation and slide content creation
- **Parallel AI calls** — title/description and slide content are generated concurrently to minimize latency
- **Prompt-hardened output** — structured prompts enforce exact JSON schemas; AI output is validated with Zod before use
- **Robust JSON extraction** — handles markdown-fenced responses (```` ```json ```` blocks) and raw JSON transparently
- **30-second AI timeout** — requests that stall are rejected with a clear user-facing error rather than hanging indefinitely
- **Transcript sanitization** — strips injection markers, code fences, and caps input at 12,000 characters for focused summarization

### Authentication & User Management
- **Clerk authentication** — sign-in and sign-up with OAuth and email, zero-config session management
- **Server-side auth checks** — every server action validates `currentUser()` before processing
- **Automatic user provisioning** — first sign-in creates a database record via `CreateUserIfNull` without a separate onboarding step
- **Protected dashboard** — unauthenticated users are redirected server-side before any data is fetched

### Dashboard
- **Presentation history** — all generated files are stored and accessible from a personal dashboard
- **Usage stats** — total presentations count and a "created this week" counter rendered server-side
- **Relative timestamps** — `date-fns` formats creation dates as human-readable relative times ("3 days ago")
- **Empty state** — first-time users see a friendly prompt that links directly to the generator

### Developer Experience
- **Conventional Commits** — CommitLint + Husky enforce `feat:`, `fix:`, `docs:` etc. at commit time
- **Lint-staged** — ESLint and Prettier run only on staged files, keeping CI fast
- **Strict TypeScript** — `tsc --noEmit` as a dedicated `check-types` script; no `any` escapes in service code
- **Zod environment validation** — `src/lib/env.ts` validates all required environment variables at startup; the app refuses to run with a missing key in production
- **Service layer architecture** — AI, video, storage, and presentation logic are isolated into typed service modules under `src/lib/services/`
- **Custom error classes** — `VideoError`, `AIError`, and `StorageError` extend a base `AppError` with typed codes and HTTP status codes

### Performance & Infrastructure
- **Server Actions** — generation pipeline runs as a Next.js Server Action; no API routes required for the core flow
- **Edge OG images** — dynamic Open Graph images are generated at the edge via `@vercel/og`
- **Vercel Analytics** — lightweight, privacy-friendly page-view tracking injected via a dedicated `Analytics` component
- **Security headers** — `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, strict `Referrer-Policy`, and `Permissions-Policy` applied to all routes in `next.config.js`
- **Scroll-aware header** — the navigation bar switches to a frosted-glass background on scroll without layout shift

### Accessibility & UI
- **Skip-to-content link** — keyboard users can bypass navigation with a visually hidden anchor
- **ARIA live region** — screen readers are announced generation progress and success/failure states
- **`aria-busy` and `aria-invalid`** — button and input states are communicated to assistive technology
- **Dark mode** — system-aware theme switching via `next-themes` with a manual toggle in the header
- **Responsive layout** — mobile-first grid layouts with a full-featured collapsible mobile menu

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3, CSS custom properties (HSL theming) |
| **UI Primitives** | Radix UI (Dialog, DropdownMenu, Label, Slot, Toast) |
| **Font** | Plus Jakarta Sans (Google Fonts, self-hosted via `next/font`) |
| **Icons** | Lucide React, React Icons |
| **State Management** | React `useReducer` (via `use-generate` hook) |
| **Forms** | React Hook Form + `@hookform/resolvers` |
| **Validation** | Zod (schemas for all data boundaries) |
| **Authentication** | Clerk (`@clerk/nextjs` v6) |
| **Database ORM** | Prisma 5 |
| **Database** | PostgreSQL |
| **AI Provider** | Google Generative AI — Gemini 1.5 Flash |
| **Presentation Builder** | pptxgenjs 3 |
| **XML Parsing** | xmldom (subtitle transcript extraction) |
| **HTTP Client** | Axios |
| **File Storage** | UploadThing (CDN hosting for `.pptx` files) |
| **Analytics** | Vercel Analytics |
| **OG Images** | `@vercel/og` (edge runtime) |
| **Deployment** | Vercel |
| **Testing** | Jest + Testing Library |
| **Linting** | ESLint (Next.js, TypeScript, Prettier, Tailwind, import-sort, unused-imports) |
| **Formatting** | Prettier |
| **Git Hooks** | Husky + lint-staged |
| **Commit Convention** | CommitLint + Conventional Commits |

---

## Architecture

### Data Flow

```
User pastes YouTube URL
        │
        ▼
  [Client] useGenerate hook
  validates URL with regex,
  extracts video ID
        │
        ▼
  [Server Action] CreatePowerpoint
        │
        ├─ 1. Clerk currentUser() → auth check
        ├─ 2. Prisma → verify DB user exists
        ├─ 3. Zod VideoIdSchema → validate video ID format
        │
        ├─ 4. videoService.getVideoMetadata()
        │       └─ RapidAPI yt-api → title, length, subtitle XML URL
        │           (rejects if > 15 min or no English captions)
        │
        ├─ 5. videoService.getSubtitleText()
        │       └─ Axios fetch XML → xmldom parse → plain text transcript
        │
        ├─ 6. Promise.all([
        │       aiService.generateTitleAndDescription(transcript),
        │       aiService.generateSlides(transcript)
        │     ])
        │       └─ Gemini 1.5 Flash → JSON → Zod validation
        │
        ├─ 7. presentationService.createPptx()
        │       └─ pptxgenjs → title slide + 10 content slides → Buffer
        │
        ├─ 8. storageService.upload()
        │       └─ UploadThing UTApi → CDN URL
        │
        └─ 9. db.generatedPowerpoints.create() → Prisma → PostgreSQL
                return { success: true, downloadUrl, title }
```

### Project Structure

```
slidetube-ai/
├── actions/
│   ├── generatePowerPoint.ts   # Main server action (CreatePowerpoint entry point)
│   └── authCallBack.ts         # CreateUserIfNull — idempotent user provisioning
│
├── db/
│   └── index.ts                # Prisma client singleton (cached in dev via global)
│
├── src/
│   ├── app/
│   │   ├── (auth)/             # Clerk sign-in and sign-up pages
│   │   ├── (landing)/
│   │   │   ├── page.tsx        # Landing page (Hero, Features, Benefits, Pricing, FAQ)
│   │   │   ├── generate/       # /generate — GenerateForm page
│   │   │   ├── dashboard/      # /dashboard — authenticated presentation history
│   │   │   ├── about/          # /about page
│   │   │   ├── success/        # /success confirmation page
│   │   │   └── components/     # Landing sections: Hero, Features, Benefits, Pricing, FAQ, CTA…
│   │   ├── api/og/             # Edge OG image generation
│   │   ├── components/
│   │   │   ├── GenerateForm.tsx        # Main interactive form (URL input, progress steps, download)
│   │   │   ├── DashboardPresentations.tsx  # Presentation card grid + empty state
│   │   │   ├── ErrorContainer.tsx      # Reusable error display
│   │   │   └── PagesWrapper.tsx
│   │   ├── error.tsx           # Global error boundary
│   │   └── layout.tsx          # Root layout: ClerkProvider, ThemeProvider, Header, Footer, Analytics
│   │
│   ├── components/
│   │   ├── ui/                 # Radix-based UI primitives (Button, Input, Toast, Dialog…)
│   │   ├── common/             # MaxWidthWrapper
│   │   ├── header/             # Scroll-aware sticky header with mobile menu
│   │   ├── footer/             # Site footer
│   │   ├── sidebar/            # Sidebar layout component
│   │   ├── theme-switch/       # Dark/light toggle
│   │   ├── analytics/          # Vercel Analytics wrapper
│   │   └── providers/          # ThemeProvider, SidebarProvider
│   │
│   ├── hooks/
│   │   ├── use-generate.ts     # useReducer-based state machine for the generate flow
│   │   ├── use-theme.ts        # Theme hook
│   │   ├── use-on-scroll.ts    # Scroll position detection for sticky header
│   │   ├── use-mounted.ts      # Hydration-safe mount detection
│   │   ├── use-media-query.ts  # Responsive breakpoint detection
│   │   └── use-isomorphic-layout-effect.ts
│   │
│   ├── lib/
│   │   ├── env.ts              # Zod-validated environment variables (fails fast in production)
│   │   ├── errors.ts           # AppError, VideoError, AIError, StorageError
│   │   ├── schemas.ts          # Zod schemas: VideoId, Slide, Presentation, TitleDescription, User
│   │   ├── utils.ts            # cn() utility (clsx + tailwind-merge)
│   │   ├── screens.ts          # Tailwind breakpoint helpers
│   │   └── services/
│   │       ├── ai.service.ts           # Gemini calls, JSON extraction, timeout wrapper
│   │       ├── video.service.ts        # RapidAPI metadata, xmldom subtitle parsing
│   │       ├── presentation.service.ts # pptxgenjs PPTX builder
│   │       └── storage.service.ts      # UploadThing upload
│   │
│   ├── middleware.ts           # Clerk middleware (auth on all routes)
│   └── global.css             # Tailwind base, CSS variables, dot-grid, gradient-text utilities
│
├── next.config.js             # Security headers, image remote patterns
├── tailwind.config.js
├── jest.config.js
├── commitlint.config.ts
├── lint-staged.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** / **yarn** / **pnpm**
- A **PostgreSQL** database (local or hosted — [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app) all work)
- Accounts for: [Clerk](https://clerk.com), [Google AI Studio](https://aistudio.google.com), [RapidAPI](https://rapidapi.com) (yt-api), [UploadThing](https://uploadthing.com)

### 1. Clone the repository

```bash
git clone https://github.com/Engraya/slideTube-ai.git
cd slideTube-ai
```

### 2. Install dependencies

```bash
npm install
```

This automatically runs `husky install` via the `prepare` script, setting up commit hooks.

### 3. Configure environment variables

Copy the example file and fill in every value:

```bash
cp .env.example .env
```

See [Environment Variables](#environment-variables) below for the full reference.

### 4. Set up the database

```bash
npx prisma migrate dev --name init
```

This creates the `User` and `GeneratedPowerpoints` tables in your PostgreSQL database.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app is ready.

---

## Environment Variables

Create a `.env` file in the project root with the following variables. The app will refuse to start in production if any of these are missing (enforced by `src/lib/env.ts`).

```env
# ──────────────────────────────────────────
# Database
# ──────────────────────────────────────────

# PostgreSQL connection string
# Example: postgresql://user:password@host:5432/dbname
DATABASE_URL=

# ──────────────────────────────────────────
# Authentication — Clerk
# Get these from: https://dashboard.clerk.com → API Keys
# ──────────────────────────────────────────

# Public key exposed to the browser
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...

# Secret key used only on the server
CLERK_SECRET_KEY=sk_test_...

# ──────────────────────────────────────────
# YouTube API — RapidAPI
# Subscribe to "yt-api" at: https://rapidapi.com/ytdlfree/api/yt-api
# ──────────────────────────────────────────

# Your RapidAPI key
RAPID_API_KEY=

# ──────────────────────────────────────────
# AI — Google Gemini
# Get from: https://aistudio.google.com/app/apikey
# ──────────────────────────────────────────

# Gemini API key (used with gemini-1.5-flash model)
GEMINI_API_KEY=

# ──────────────────────────────────────────
# File Storage — UploadThing
# Get from: https://uploadthing.com/dashboard → API Keys
# ──────────────────────────────────────────

# UploadThing token (single value replaces legacy app ID + secret)
UPLOADTHING_TOKEN=

# ──────────────────────────────────────────
# App
# ──────────────────────────────────────────

# Public URL of your deployment — used for Open Graph image generation
# Example: https://slidetube-ai.vercel.app
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Start the production server (requires a prior build) |
| `npm run lint` | Run ESLint across the codebase |
| `npm run check-types` | TypeScript type check with `tsc --noEmit` |
| `npm run test` | Run the Jest test suite |
| `npm run test:coverage` | Run tests and generate a coverage report |

---

## AI Pipeline Details

The generation pipeline runs two Gemini calls **in parallel** after the transcript is extracted, which is the primary latency optimization.

### Transcript Sanitization

Before any AI call, the raw subtitle text is:
- Stripped of markdown code fences (` ``` `)
- Stripped of instruction markers (`[INST]`, `[/INST]`)
- Truncated to **12,000 characters** to keep prompts focused and within token budgets

### Title & Description Generation

**Prompt goal:** produce a concise title (< 10 words) and a 2-3 sentence description capturing the core content.

**Output format enforced:**
```json
{ "title": "...", "description": "..." }
```

Validated against `TitleDescriptionSchema` (Zod) before use.

### Slide Generation

**Prompt goal:** produce exactly 10 slides, each with a 5-80 character title and 3-4 bullet strings (50-170 characters each).

**Output format enforced:**
```json
[
  { "title": "Introduction", "content": ["Bullet one", "Bullet two", "Bullet three"] },
  ...
]
```

Validated against `PresentationSchema` (array of `SlideSchema`).

### JSON Extraction Strategy

Gemini frequently wraps JSON in markdown code fences. The `extractJSON` utility handles both cases:

1. **Fenced response** — extracts content from ` ```json ``` ` or ` ```javascript ``` ` blocks
2. **Raw JSON** — detects strings starting with `{` or `[` and parses directly
3. **Failure** — throws `AIError` with a user-friendly message

### PPTX Generation

`presentationService.createPptx()` builds the file entirely in memory using `pptxgenjs`:

- **Title slide** — dark background (`#0F172A`), white 36pt title, subtitle in slate grey
- **Content slides** — white background, bold 28pt slide title in dark navy, 15pt bullet points in slate

The final `Buffer` is passed directly to UploadThing — no temporary files on disk.

---

## Performance

| Optimization | How it works |
|---|---|
| **Parallel AI calls** | `Promise.all()` runs title and slide generation concurrently, cutting AI latency roughly in half |
| **Server Actions** | The entire pipeline runs in a single server round-trip; no waterfall of client-initiated API calls |
| **In-memory PPTX** | `pptxgenjs` outputs a `Buffer` streamed directly to UploadThing — no disk I/O |
| **Edge OG images** | `/api/og` runs on the Vercel edge runtime for near-zero cold starts |
| **`next/font`** | Plus Jakarta Sans is self-hosted and preloaded, eliminating Google Fonts render-blocking |
| **AI timeout** | All Gemini calls are wrapped in a 30-second `Promise.race` timeout to prevent indefinite hangs |
| **Transcript cap** | Input is truncated to 12,000 chars — a deliberate balance between context and token cost |
| **Prisma client singleton** | The database client is cached in `globalThis` during development to prevent connection exhaustion across hot reloads |

---

## Security

- **Security headers** — `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy` restricting camera, microphone, and geolocation are applied to every route
- **Server-side auth on every action** — `currentUser()` is called at the top of `CreatePowerpoint` before any external API call
- **Zod input validation** — the YouTube video ID is validated against `/^[a-zA-Z0-9_-]{11}$/` before being passed to the video API
- **Environment validation** — missing API keys cause an immediate startup failure in production, preventing silent credential errors
- **No disk writes** — PPTX generation is entirely in-memory, eliminating any path traversal risk from file names
- **Clerk middleware** — applied globally to all routes and API handlers

---

## Deployment

SlideTube AI is optimized for **Vercel** but can run on any Node.js hosting platform.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Engraya/slideTube-ai)

1. Click the button above or import the repository in the Vercel dashboard
2. Add all environment variables from the [Environment Variables](#environment-variables) section
3. Deploy — Vercel auto-detects Next.js and configures build settings

### Production Checklist

```bash
# Verify types before deploying
npm run check-types

# Run tests
npm run test

# Apply any pending DB migrations
npx prisma migrate deploy

# Production build
npm run build
```

### Database Migration

For production databases, always use `migrate deploy` (not `migrate dev`):

```bash
npx prisma migrate deploy
```

---

## Screenshots

> Screenshots are from the live deployment. Replace these placeholders with actual captures.

**Landing Page — Hero Section**
![Hero Section](docs/screenshots/hero.png)

**Generate Page — URL Input & Live Preview**
![Generate Page](docs/screenshots/generate.png)

**Generate Page — Processing Steps**
![Generation Progress](docs/screenshots/generating.png)

**Generate Page — Download Ready**
![Download Ready](docs/screenshots/success.png)

**Dashboard — Presentation History**
![Dashboard](docs/screenshots/dashboard.png)

**Dark Mode**
![Dark Mode](docs/screenshots/dark-mode.png)

---

## Testing

Tests are written with **Jest** and **Testing Library**. The suite covers:

- **`VideoIdSchema`** — valid 11-character IDs, short IDs, IDs with special characters
- **`TitleDescriptionSchema`** — valid objects, empty title rejection
- **`PresentationSchema`** — valid slide arrays, empty array rejection
- **`UserCreateSchema`** — valid user data, invalid email formats
- **`getVideoMetadata`** — successful fetch, video-too-long rejection, no English subtitles rejection, network failure handling
- **`getSubtitleText`** — non-string response rejection, network failure handling

```bash
# Run all tests
npm run test

# With coverage report
npm run test:coverage
```

---

## Roadmap

Based on the current architecture, natural next steps include:

- **PDF export** — generate PDF alongside PPTX using a headless renderer
- **Custom slide count** — allow users to specify 5, 10, or 15 slides before generating
- **Template library** — multiple visual themes for the PPTX (dark, light, brand colors)
- **Regenerate individual slides** — surface a per-slide "regenerate" action on the dashboard
- **Webhook-based user sync** — replace `CreateUserIfNull` polling with a proper Clerk webhook endpoint
- **Rate limiting** — enforce the Free plan's 5-presentation/month cap with a DB-level counter
- **Batch generation** — accept a playlist URL and generate presentations for multiple videos
- **Multi-language support** — extend subtitle extraction to non-English captions with translation

---

## Contributing

Contributions are welcome. Please follow the project's conventions:

1. **Fork** the repository and create a feature branch
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Commit** using Conventional Commits (enforced by CommitLint)
   ```bash
   git commit -m "feat: add PDF export option"
   git commit -m "fix: handle missing subtitle URL gracefully"
   git commit -m "docs: update environment variable reference"
   ```

3. **Run** the full check suite before opening a PR
   ```bash
   npm run check-types
   npm run lint
   npm run test
   ```

4. **Open a Pull Request** with a clear description of what changed and why

### Commit Types

| Type | When to use |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `refactor` | Code restructuring without behaviour change |
| `test` | Adding or updating tests |
| `chore` | Build system, dependency, or config changes |
| `perf` | Performance improvement |

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">

Built with Next.js, Gemini AI, and a strong dislike for manual slide-making.

</div>
