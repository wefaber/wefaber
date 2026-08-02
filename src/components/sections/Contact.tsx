// lucide v1 dropped its brand glyphs, so the channels use generic marks and
// lean on their visible labels to identify the destination.
import { ArrowUpRight, Braces, BriefcaseBusiness, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../../i18n/language-context'
import { site } from '../../config/site'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

interface Channel {
  readonly icon: LucideIcon
  readonly label: string
  readonly value: string
  readonly href: string
  readonly external: boolean
}

export function Contact() {
  const { t } = useLanguage()

  const channels: readonly Channel[] = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      icon: Braces,
      label: t.contact.githubLabel,
      value: site.social.github.replace('https://', ''),
      href: site.social.github,
      external: true,
    },
    {
      icon: BriefcaseBusiness,
      label: t.contact.linkedinLabel,
      value: site.social.linkedin.replace('https://www.', ''),
      href: site.social.linkedin,
      external: true,
    },
  ]

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
    >
      <div className="glass overflow-hidden rounded-[2rem] px-6 py-14 sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-16">
        <Reveal className="flex items-center gap-3">
          <span className="label-mono text-lime-800" aria-hidden="true">
            {t.contact.index}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-ink/15" />
          <span className="label-mono text-ink-500">{t.contact.kicker}</span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-3xl text-3xl leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-4xl md:text-5xl">
            {t.contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {t.contact.body}
          </p>
        </Reveal>

        <RevealGroup as="ul" className="mt-12 grid gap-3 sm:mt-14 md:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <RevealItem as="li" key={label}>
              <a
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/45 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-ink/25 hover:bg-white/80"
              >
                <span className="flex items-center justify-between">
                  <Icon
                    size={20}
                    strokeWidth={1.9}
                    aria-hidden="true"
                    className="text-ink"
                  />
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="text-ink-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                </span>
                <span className="label-mono mt-8 text-ink-400">{label}</span>
                <span className="mt-1.5 font-medium break-all text-ink">
                  {value}
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
