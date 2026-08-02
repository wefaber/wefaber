import { motion, useReducedMotion } from 'motion/react'
import { CornerDownRight, Hammer } from 'lucide-react'
import { useLanguage } from '../../i18n/language-context'
import { Reveal } from '../motion/Reveal'

/**
 * Splits a word around a shared stem so it can be highlighted in place.
 * Returns the three parts; the middle one is the stem itself.
 */
function splitOnStem(word: string, stem: string): [string, string, string] {
  const at = word.indexOf(stem)
  if (at === -1) return [word, '', '']
  return [word.slice(0, at), stem, word.slice(at + stem.length)]
}

function StemWord({ word, stem }: { word: string; stem: string }) {
  const [before, matched, after] = splitOnStem(word, stem)
  return (
    <>
      <span className="text-cream/45">{before}</span>
      <span className="text-lime">{matched}</span>
      <span className="text-cream/45">{after}</span>
    </>
  )
}

export function TheName() {
  const { t } = useLanguage()
  const reduced = useReducedMotion()
  const n = t.theName

  return (
    <section id="the-name" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-16">
      <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink sm:rounded-[2.5rem]">
        {/* Lime bloom bleeding in from the corner */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-lime/18 blur-[130px]"
        />

        <div className="on-ink relative px-5 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-32">
          <div className="flex items-center gap-3">
            <span className="label-mono text-lime" aria-hidden="true">
              {n.index}
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-cream/25" />
            <span className="label-mono text-cream/60">{n.kicker}</span>
          </div>

          {/* The derivation, drawn rather than explained. */}
          <div className="mt-14 sm:mt-20">
            <Reveal>
              <p
                className="display-tight leading-none"
                style={{ fontSize: 'clamp(1.35rem, 6.6vw, 6.5rem)' }}
              >
                <StemWord word={n.mark} stem={n.stem} />
              </p>
            </Reveal>

            {/*
              Derivation marker. Deliberately not aligned to the stem: FAB sits
              at a different offset in each language (WEFABER/FABRICAMOS vs
              WEFABER/WE FABRICATE), so a pointer would only line up in one.
            */}
            <div
              className="flex h-12 items-center gap-3 sm:h-16"
              aria-hidden="true"
            >
              <motion.span
                initial={reduced ? undefined : { scaleY: 0 }}
                whileInView={reduced ? undefined : { scaleY: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block h-full w-[2px] origin-top bg-lime"
              />
              <motion.span
                initial={reduced ? undefined : { opacity: 0, x: -6 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-lime"
              >
                <CornerDownRight size={18} strokeWidth={2.2} />
              </motion.span>
            </div>

            <Reveal delay={0.35}>
              <p
                className="display-tight leading-none"
                style={{ fontSize: 'clamp(1.35rem, 6.6vw, 6.5rem)' }}
              >
                <StemWord word={n.derived} stem={n.stem} />
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="label-mono mt-8 text-cream/55">{n.translation}</p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 border-t border-cream/12 pt-12 sm:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <Reveal>
                <h2 className="text-2xl leading-[1.15] font-bold tracking-[-0.02em] text-cream sm:text-3xl">
                  {n.lead}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
                  {n.body}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <div className="glass-ink rounded-3xl p-7">
                <span className="label-mono flex items-center gap-2 text-cream/50">
                  <Hammer size={13} strokeWidth={2} aria-hidden="true" />
                  {n.outputsLabel}
                </span>
                <ul className="mt-6 space-y-0">
                  {n.outputs.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-cream/10 py-3.5 text-cream last:border-0"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime"
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
