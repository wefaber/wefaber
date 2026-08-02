import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowUpRight, Languages } from 'lucide-react'
import { useLanguage } from '../i18n/language-context'
import { Logo } from './Logo'

export function Nav() {
  const { t, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 24)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        aria-label={t.nav.contact}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-4 ${
          // Heavier than the shared `glass` surface: the bar floats over the
          // dark "the name" panel, where 55% white leaves ink text muddy.
          scrolled
            ? 'border border-ink/8 bg-cream/85 shadow-[0_8px_28px_-12px_rgba(13,15,6,0.18)] backdrop-blur-xl backdrop-saturate-150'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a
          href="#top"
          className="rounded-md px-1 py-0.5 transition-opacity hover:opacity-70"
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.switchToLabel}
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-ink-700 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <Languages size={15} strokeWidth={2} aria-hidden="true" />
            <span className="label-mono text-[0.7rem]">{t.nav.switchTo}</span>
          </button>

          <a
            href="#contact"
            className="group flex items-center gap-1 rounded-lg bg-ink px-3.5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-ink-700"
          >
            {t.nav.contact}
            <ArrowUpRight
              size={15}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
