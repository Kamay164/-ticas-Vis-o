import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// URL pública do site, usada em canonical e Open Graph (index.html).
// Na Vercel vem de VERCEL_PROJECT_PRODUCTION_URL; dá para forçar com VITE_SITE_URL.
// Sem nenhuma das duas (ex.: build local), canonical e og:url saem do HTML e a imagem fica relativa.
const siteUrl = (
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '')
).replace(/\/$/, '')

function siteUrlPlugin() {
  return {
    name: 'site-url',
    transformIndexHtml: (html) =>
      siteUrl
        ? html.replaceAll('__SITE_URL__', siteUrl)
        : // Sem URL conhecida: remove canonical e og:url (um canonical relativo seria inválido).
          html
            .replace(/^.*(rel="canonical"|property="og:url").*\n/gm, '')
            .replaceAll('__SITE_URL__', ''),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
})
