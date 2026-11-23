import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'

/** Build-time render: crawlers that run no JavaScript (most AI ones) get the real page. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <HelmetProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </HelmetProvider>
    </StrictMode>,
  )
}
