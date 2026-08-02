import { GitFork, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../i18n/language-context'
import { SectionHeader } from '../SectionHeader'
import { RevealGroup, RevealItem } from '../motion/Reveal'

const icons = [GitFork, ShieldCheck] as const

export function Values() {
  const { t } = useLanguage()

  return (
    <section
      id="values"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
    >
      <SectionHeader
        index={t.values.index}
        kicker={t.values.kicker}
        heading={t.values.heading}
      />

      <RevealGroup as="ul" className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2">
        {t.values.items.map((item, i) => {
          const Icon = icons[i % icons.length] ?? icons[0]
          return (
            <RevealItem
              as="li"
              key={item.title}
              className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-full w-1 bg-lime"
              />
              <Icon
                size={22}
                strokeWidth={1.8}
                aria-hidden="true"
                className="text-lime-800"
              />
              <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700 sm:text-base">
                {item.body}
              </p>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </section>
  )
}
