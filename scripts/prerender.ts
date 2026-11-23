/**
 * Renders App to HTML and writes it into dist/index.html, so crawlers that do
 * not run JavaScript (GPTBot, ClaudeBot, PerplexityBot) read the page. The
 * client still mounts with createRoot, which replaces this markup.
 *
 * The JSON-LD goes into <head> marked data-static-seo, so SEO.tsx removes it
 * once its own copy is live (same rule as the other static tags).
 */
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const root = resolve(import.meta.dirname, '..')
const vite = await createServer({
  root,
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { render } = (await vite.ssrLoadModule('/src/entry-server.tsx')) as { render: () => string }
  let html = render()

  // React 19 emits the metadata SEO.tsx renders (title, meta, link, JSON-LD) at
  // the start of the output. index.html already has the static English set, so
  // strip them from #root and keep only the JSON-LD, which goes into <head>.
  const HEAD_TAG =
    /^(<title[^>]*>[\s\S]*?<\/title>|<meta[^>]*>|<link[^>]*>|<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>)/
  let jsonLd = ''
  for (let m = html.match(HEAD_TAG); m; m = html.match(HEAD_TAG)) {
    if (m[0].startsWith('<script')) jsonLd += m[0]
    html = html.slice(m[0].length)
  }
  if (html.length < 1000) throw new Error(`prerender produced only ${html.length} chars`)
  if (!jsonLd.includes('application/ld+json')) throw new Error('no JSON-LD from SEO.tsx')

  const file = resolve(root, 'dist', 'index.html')
  let page = await readFile(file, 'utf8')
  if (!page.includes('<div id="root"></div>')) throw new Error('empty #root not found in index.html')
  page = page
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace('</head>', `${jsonLd.replace(/<script /g, '<script data-static-seo="true" ')}\n  </head>`)
  await writeFile(file, page, 'utf8')
  console.log(`prerendered: ${Math.round(html.length / 1024)} KB + JSON-LD into ${file}`)
} finally {
  await vite.close()
}
