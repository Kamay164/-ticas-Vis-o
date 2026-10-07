import { site, whatsappLink } from './data/site'

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {site.location}
      </p>
      <h1 className="mt-4 font-display text-[2.5rem] leading-[1.05] md:text-6xl">
        Enxergue com clareza.{' '}
        <em className="text-accent">Viva com estilo.</em>
      </h1>
      <p className="mt-5 max-w-md text-muted">{site.description}</p>
      <a
        href={whatsappLink()}
        className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors hover:bg-accent-strong"
      >
        Falar no WhatsApp
      </a>
      <p className="mt-10 text-xs text-muted">
        Setup da Etapa 2 · {site.name} é uma marca fictícia de portfólio
      </p>
    </main>
  )
}
