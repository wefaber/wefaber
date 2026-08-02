import { writeFile } from 'node:fs/promises'
import { defineConfig, type Plugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { site, absoluteUrl } from './src/config/site.ts'
import { copy } from './src/content/copy.ts'

const en = copy.en

/** Values injected into index.html's %TOKENS%. */
const tokens: Record<string, string> = {
  SITE_URL: site.url,
  SITE_NAME: site.name,
  SITE_EMAIL: site.email,
  META_TITLE: en.meta.title,
  META_DESCRIPTION: en.meta.description,
  OG_LOCALE: en.meta.ogLocale,
  OG_LOCALE_ALT: copy.es.meta.ogLocale,
  OG_IMAGE: absoluteUrl(site.ogImage),
  OG_IMAGE_WIDTH: String(site.ogImageWidth),
  OG_IMAGE_HEIGHT: String(site.ogImageHeight),
  OG_IMAGE_ALT: `${site.name} — ${en.hero.headlineLead} ${en.hero.headlineRest}`,
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Keeps index.html, robots.txt and sitemap.xml derived from src/config/site.ts
 * so the domain only ever has to be changed in one place.
 */
function seoHtml(): Plugin {
  return {
    name: 'wefaber-seo-html',
    transformIndexHtml(html) {
      return html.replace(/%([A-Z_]+)%/g, (match, key: string) =>
        key in tokens ? escapeHtml(tokens[key]) : match,
      )
    },
    async closeBundle() {
      const today = new Date().toISOString().slice(0, 10)

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
      const robots = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`
      await writeFile('dist/sitemap.xml', sitemap, 'utf8')
      await writeFile('dist/robots.txt', robots, 'utf8')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    seoHtml(),
  ],
  build: {
    target: 'es2022',
  },
})
