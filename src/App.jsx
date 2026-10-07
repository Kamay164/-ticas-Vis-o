import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Seções temporárias: mantêm as âncoras do menu funcionando até as Etapas 4 e 5.
const upcoming = [
  { id: 'colecoes', label: 'Coleções', step: 4 },
  { id: 'lentes', label: 'Lentes e tecnologias', step: 4 },
  { id: 'sobre', label: 'Sobre o espaço', step: 5 },
  { id: 'contato', label: 'Visite-nos', step: 5 },
]

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        {upcoming.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`flex min-h-[40vh] items-center justify-center px-5 ${i % 2 === 0 ? 'bg-surface' : 'bg-bg'}`}
          >
            <p className="text-sm text-muted">
              {s.label}: em construção (Etapa {s.step})
            </p>
          </section>
        ))}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
