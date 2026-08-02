import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { copy, type Language } from '../content/copy'
import { LanguageContext, type LanguageState } from './language-context'

const STORAGE_KEY = 'wefaber:lang'

function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'es'
}

/** Stored choice wins; otherwise fall back to the browser's preferred language. */
function initialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isLanguage(stored)) return stored

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(initialLanguage)

  // The `lang` attribute is a real accessibility and SEO signal, so it has to
  // track the toggle rather than staying on whatever index.html shipped with.
  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
  }, [])

  const toggle = useCallback(() => {
    setLangState((current) => (current === 'en' ? 'es' : 'en'))
  }, [])

  const value = useMemo<LanguageState>(
    () => ({ lang, t: copy[lang], setLang, toggle }),
    [lang, setLang, toggle],
  )

  return <LanguageContext value={value}>{children}</LanguageContext>
}
