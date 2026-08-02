/**
 * Derives the web-sized image assets from the master brand art in /brand.
 *
 * Run with: bun run assets
 *
 * /brand holds the originals (multi-thousand-pixel PNGs). Nothing there is
 * served; everything under /public that this script writes is generated, so
 * re-run it after replacing a source file rather than editing /public by hand.
 */
import sharp from 'sharp'
import { site } from '../src/config/site.ts'

const SOURCE_OG = 'brand/og-source.png'
const SOURCE_MARK = 'brand/logo-square.png'

async function main(): Promise<void> {
  // Open Graph: the declared og:image:width/height must match the real file, so
  // this is cropped to exactly the dimensions site.ts advertises.
  await sharp(SOURCE_OG)
    .resize(site.ogImageWidth, site.ogImageHeight, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9, palette: true })
    .toFile('public/og-image.png')

  // Square mark, at the sizes browsers and mobile actually request.
  const squares: readonly [string, number][] = [
    ['public/favicon-32.png', 32],
    ['public/apple-touch-icon.png', 180],
    ['public/favicon.png', 512],
    ['public/logo-mark.png', 128],
  ]

  for (const [out, size] of squares) {
    await sharp(SOURCE_MARK)
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9, palette: true })
      .toFile(out)
  }

  for (const [out] of squares) {
    const { width, height, size } = await sharp(out).metadata()
    console.log(`${out}  ${width}x${height}  ${Math.round((size ?? 0) / 1024)}KB`)
  }
  const og = await sharp('public/og-image.png').metadata()
  console.log(
    `public/og-image.png  ${og.width}x${og.height}  ${Math.round((og.size ?? 0) / 1024)}KB`,
  )
}

await main()
