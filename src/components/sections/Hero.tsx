import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { useLanguage } from '../../i18n/language-context'
import { site } from '../../config/site'

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const { t } = useLanguage()
  const reduced = useReducedMotion()

  /** One orchestrated load sequence; every element derives its delay from here. */
  const rise = (delay: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: 26 },
    animate: reduced ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  })

  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24"
    >
      <motion.p {...rise(0.15)} className="label-mono text-ink-500">
        {t.hero.eyebrow}
      </motion.p>

      <h1 className="mt-6 sm:mt-8">
        <motion.span
          {...rise(0.25)}
          // Druk Text Wide runs far wider per character than a normal face, so
          // the lower bound is set by the longest headline ("We fabricate.")
          // at 375px, not by what looks right on desktop.
          className="display-tight block text-ink"
          style={{ fontSize: 'clamp(1.5rem, 7vw, 7rem)' }}
        >
          {t.hero.headlineLead}
        </motion.span>
        <motion.span
          {...rise(0.35)}
          className="display-tight mt-2 block text-ink-500 sm:mt-3"
          style={{ fontSize: 'clamp(0.95rem, 3.9vw, 3.25rem)' }}
        >
          {t.hero.headlineRest}
        </motion.span>
      </h1>

      <div className="mt-10 flex flex-col gap-8 sm:mt-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <motion.p
          {...rise(0.48)}
          className="max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg"
        >
          {t.hero.subline}
        </motion.p>

        <motion.div
          {...rise(0.58)}
          className="flex shrink-0 flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-700"
          >
            {t.hero.ctaPrimary}
            <ArrowUpRight
              size={17}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#what-we-do"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/40 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink/30 hover:bg-white/70"
          >
            {t.hero.ctaSecondary}
            <ArrowDown
              size={17}
              strokeWidth={2.2}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>

      <motion.div
        {...rise(0.7)}
        className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-6 sm:mt-20"
      >
        <span className="label-mono flex items-center gap-2 text-ink-500">
          <MapPin size={13} strokeWidth={2} aria-hidden="true" />
          {t.hero.location}
        </span>
        <span
          aria-hidden="true"
          className="hidden h-1 w-1 rounded-full bg-lime-800 sm:block"
        />
        <span className="label-mono text-ink-400">
          {site.name}, {t.footer.formerly}
        </span>
      </motion.div>
    </section>
  )
}
