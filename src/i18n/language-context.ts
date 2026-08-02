import { createContext, use } from 'react'
import type { Copy, Language } from '../content/copy'

export interface LanguageState {
  readonly lang: Language
  readonly t: Copy
  readonly setLang: (lang: Language) => void
  readonly toggle: () => void
}

export const LanguageContext = createContext<LanguageState | null>(null)

export function useLanguage(): LanguageState {
  const state = use(LanguageContext)
  if (state === null) {
    throw new Error('useLanguage must be used inside <LanguageProvider>')
  }
  return state
}
