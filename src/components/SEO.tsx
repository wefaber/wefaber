import { useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { copy } from '../content/copy'
import { useLanguage } from '../i18n/language-context'
import { absoluteUrl, site } from '../config/site'

/**
 * Escapes the sequences that could terminate the surrounding <script> block.
 * The copy is static today, but this keeps the JSON-LD safe if it ever isn't.
 */
function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function SEO() {
  const { lang, t } = useLanguage()

  // index.html ships a static English copy of these tags for scrapers that do
  // not run JS. Under React 19 the tags below are hoisted by appending, with no
  // dedupe against that static set, so drop it once ours are in the document.
  // Runs after the first paint of this component, so the head is never bare.
  useLayoutEffect(() => {
    for (const el of document.head.querySelectorAll('[data-static-seo]')) {
      el.remove()
    }
  }, [])

  const canonical = site.url
  const ogImage = absoluteUrl(site.ogImage)
  const alternateLocale = copy[lang === 'en' ? 'es' : 'en'].meta.ogLocale

  // Built before the return: TypeScript infers the @-prefixed keys correctly
  // here, whereas inlining the literal into JSX makes it much harder to type.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.legalName,
    alternateName: site.formerName,
    url: canonical,
    logo: absoluteUrl('/favicon.svg'),
    image: ogImage,
    email: site.email,
    description: t.meta.description,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.foundingLocation,
        addressCountry: site.foundingCountry,
      },
    },
    knowsAbout: [
      'Software development',
      'Applied artificial intelligence',
      'Research and development',
      'React',
      'TypeScript',
      'Node.js',
    ],
    sameAs: [site.social.github, site.social.linkedin],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'business enquiries',
      email: site.email,
      availableLanguage: ['English', 'Spanish'],
    },
  }

  return (
    <Helmet>
      <html lang={lang} />

      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={t.meta.title} />
      <meta property="og:description" content={t.meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={t.meta.ogLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(site.ogImageWidth)} />
      <meta property="og:image:height" content={String(site.ogImageHeight)} />
      <meta
        property="og:image:alt"
        content={`${site.name}. ${t.hero.headlineLead} ${t.hero.headlineRest}`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.meta.title} />
      <meta name="twitter:description" content={t.meta.description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {serializeJsonLd(organizationSchema)}
      </script>
    </Helmet>
  )
}
