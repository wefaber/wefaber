import { useLanguage } from '../../i18n/language-context'
import { SectionHeader } from '../SectionHeader'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

export function Stack() {
  const { t } = useLanguage()

  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
    >
      <SectionHeader
        index={t.stack.index}
        kicker={t.stack.kicker}
        heading={t.stack.heading}
        intro={t.stack.intro}
      />

      <Reveal delay={0.2} className="mt-10">
        <span className="label-mono text-ink-400">{t.stack.techLabel}</span>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {t.stack.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-ink/12 bg-white/50 px-4 py-2 font-mono text-sm font-medium text-ink backdrop-blur-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Reveal>

      <RevealGroup as="ol" className="mt-16 sm:mt-20">
        {t.stack.pillars.map((pillar, i) => (
          <RevealItem
            as="li"
            key={pillar.title}
            className="group grid gap-3 border-t border-ink/10 py-8 last:border-b sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-10 md:grid-cols-[5rem_16rem_1fr]"
          >
            <span
              className="display-tight text-2xl text-lime-800 transition-colors duration-500 group-hover:text-ink sm:text-3xl"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-bold tracking-[-0.02em] text-ink sm:text-2xl">
              {pillar.title}
            </h3>
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-700 sm:text-base">
              {pillar.body}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
