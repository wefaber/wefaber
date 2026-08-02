import { Reveal } from './motion/Reveal'

export function SectionHeader({
  index,
  kicker,
  heading,
  intro,
  tone = 'light',
}: {
  index: string
  kicker: string
  heading: string
  intro?: string
  tone?: 'light' | 'ink'
}) {
  const onInk = tone === 'ink'

  return (
    <header className="max-w-3xl">
      <Reveal className="flex items-center gap-3">
        <span
          className={`label-mono ${onInk ? 'text-lime' : 'text-lime-800'}`}
          aria-hidden="true"
        >
          {index}
        </span>
        <span
          aria-hidden="true"
          className={`h-px w-8 ${onInk ? 'bg-cream/25' : 'bg-ink/15'}`}
        />
        <span className={`label-mono ${onInk ? 'text-cream/60' : 'text-ink-500'}`}>
          {kicker}
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          className={`mt-5 text-3xl leading-[1.1] font-bold tracking-[-0.025em] sm:text-4xl md:text-[2.75rem] ${
            onInk ? 'text-cream' : 'text-ink'
          }`}
        >
          {heading}
        </h2>
      </Reveal>

      {intro && (
        <Reveal delay={0.14}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${
              onInk ? 'text-cream/70' : 'text-ink-700'
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  )
}
