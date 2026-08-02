import { useLanguage } from './i18n/language-context'
import { SEO } from './components/SEO'
import { Atmosphere } from './components/Atmosphere'
import { Nav } from './components/Nav'
import { Hero } from './components/sections/Hero'
import { WhatWeDo } from './components/sections/WhatWeDo'
import { TheName } from './components/sections/TheName'
import { Stack } from './components/sections/Stack'
import { Values } from './components/sections/Values'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

export default function App() {
  const { t } = useLanguage()

  return (
    <>
      <SEO />
      <Atmosphere />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        {t.nav.skipToContent}
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <WhatWeDo />
        <TheName />
        <Stack />
        <Values />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
