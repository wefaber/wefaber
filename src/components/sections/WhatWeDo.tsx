import { Boxes, BrainCircuit, FlaskConical } from 'lucide-react'
import { useLanguage } from '../../i18n/language-context'
import { SectionHeader } from '../SectionHeader'
import { RevealGroup, RevealItem } from '../motion/Reveal'

/**
 * Positional: the copy layer owns the words, this only owns the glyphs.
 * Declared as a tuple so cycling past the end still resolves to a real icon.
 */
const icons = [Boxes, BrainCircuit, FlaskConical] as const

export function WhatWeDo() {
  const { t } = useLanguage()

  return (
    <section
      id="what-we-do"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
    >
      <SectionHeader
        index={t.whatWeDo.index}
        kicker={t.whatWeDo.kicker}
        heading={t.whatWeDo.heading}
        intro={t.whatWeDo.intro}
      />

      <RevealGroup
        as="ul"
        className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {t.whatWeDo.blocks.map((block, i) => {
          const Icon = icons[i % icons.length] ?? icons[0]
          return (
            <RevealItem
              as="li"
              key={block.title}
              className="glass group flex flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(13,15,6,0.16)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-lime text-ink transition-transform duration-500 group-hover:scale-105">
                <Icon size={19} strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold tracking-[-0.015em] text-ink">
                {block.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">
                {block.body}
              </p>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </section>
  )
}
