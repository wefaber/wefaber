import { Braces, BriefcaseBusiness } from 'lucide-react'
import { useLanguage } from '../../i18n/language-context'
import { site } from '../../config/site'
import { Logo } from '../Logo'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-6xl px-5 pb-12 sm:px-6">
      <div className="flex flex-col gap-8 border-t border-ink/10 pt-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
            {t.footer.tagline}
          </p>
        </div>

        {/* Also carries the section anchors, which the header hides on mobile. */}
        <nav aria-label={t.nav.contact}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded text-sm text-ink-700 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="rounded text-sm text-ink-700 transition-colors hover:text-ink"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on GitHub`}
            className="rounded-xl border border-ink/10 bg-white/40 p-2.5 text-ink-700 transition-colors hover:border-ink/25 hover:text-ink"
          >
            <Braces size={17} strokeWidth={1.9} aria-hidden="true" />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on LinkedIn`}
            className="rounded-xl border border-ink/10 bg-white/40 p-2.5 text-ink-700 transition-colors hover:border-ink/25 hover:text-ink"
          >
            <BriefcaseBusiness size={17} strokeWidth={1.9} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono text-ink-400">
          © {year} {site.legalName}. {t.footer.rights}
        </p>
        <p className="label-mono text-ink-400">{t.footer.formerly}</p>
      </div>
    </footer>
  )
}
