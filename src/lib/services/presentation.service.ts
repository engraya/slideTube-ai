import pptxgen from 'pptxgenjs'

import type { Slide } from '@/lib/schemas'

export async function createPptx(
  slides: Slide[],
  title: string,
  videoName: string,
): Promise<Buffer> {
  const pptx = new pptxgen()

  const titleSlide = pptx.addSlide()
  titleSlide.background = { color: '0F172A' }
  titleSlide.addText(title, {
    x: 0.5,
    y: '35%',
    w: 9,
    h: 1.5,
    fontSize: 36,
    bold: true,
    color: 'FFFFFF',
    align: 'center',
    fontFace: 'Arial',
  })
  titleSlide.addText(videoName, {
    x: 0.5,
    y: '55%',
    w: 9,
    h: 0.6,
    fontSize: 18,
    color: '94A3B8',
    align: 'center',
    fontFace: 'Arial',
  })

  slides.forEach(({ title: slideTitle, content }) => {
    const slide = pptx.addSlide()
    slide.background = { color: 'FFFFFF' }

    slide.addText(slideTitle, {
      x: 0.5,
      y: 0.4,
      w: 9,
      h: 0.9,
      fontSize: 28,
      bold: true,
      color: '0F172A',
      align: 'left',
      fontFace: 'Arial',
    })

    const bullets = Array.isArray(content)
      ? content
      : String(content).split('. ')

    bullets.slice(0, 5).forEach((bullet, i) => {
      slide.addText(bullet.trim(), {
        x: 0.5,
        y: 1.6 + i * 0.72,
        w: 9,
        h: 0.65,
        fontSize: 15,
        color: '334155',
        align: 'left',
        fontFace: 'Arial',
        bullet: true,
      })
    })
  })

  const fileBuffer = (await pptx.write({ outputType: 'nodebuffer' })) as Buffer
  return fileBuffer
}
