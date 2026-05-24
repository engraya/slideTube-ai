import {
  PresentationSchema,
  TitleDescriptionSchema,
  UserCreateSchema,
  VideoIdSchema,
} from './schemas'

describe('VideoIdSchema', () => {
  it('accepts a valid 11-char video ID', () => {
    expect(VideoIdSchema.safeParse('dQw4w9WgXcQ').success).toBe(true)
  })

  it('rejects IDs shorter than 11 chars', () => {
    expect(VideoIdSchema.safeParse('short').success).toBe(false)
  })

  it('rejects IDs with special chars', () => {
    expect(VideoIdSchema.safeParse('dQw4w9Wg!cQ').success).toBe(false)
  })
})

describe('TitleDescriptionSchema', () => {
  it('accepts valid title and description', () => {
    const result = TitleDescriptionSchema.safeParse({
      title: 'My Great Presentation',
      description: 'This is a description of the presentation content.',
    })
    expect(result.success).toBe(true)
  })

  it('rejects empty title', () => {
    expect(
      TitleDescriptionSchema.safeParse({ title: '', description: 'desc' }).success,
    ).toBe(false)
  })
})

describe('PresentationSchema', () => {
  it('accepts a valid slide array', () => {
    const slides = Array.from({ length: 10 }, (_, i) => ({
      title: `Slide ${i + 1}`,
      content: ['Bullet one', 'Bullet two', 'Bullet three'],
    }))
    expect(PresentationSchema.safeParse(slides).success).toBe(true)
  })

  it('rejects an empty array', () => {
    expect(PresentationSchema.safeParse([]).success).toBe(false)
  })
})

describe('UserCreateSchema', () => {
  it('accepts valid user data', () => {
    const result = UserCreateSchema.safeParse({
      id: 'user_abc123',
      name: 'Jane Doe',
      email: 'jane@example.com',
    })
    expect(result.success).toBe(true)
  })

  it('rejects invalid email', () => {
    expect(
      UserCreateSchema.safeParse({
        id: 'user_abc123',
        name: 'Jane Doe',
        email: 'not-an-email',
      }).success,
    ).toBe(false)
  })
})
