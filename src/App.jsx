import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Lenses from './components/Lenses'
import Benefits from './components/Benefits'
import Brands from './components/Brands'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

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
        <Collections />
        <Lenses />
        <Benefits />
        <Brands />
        <Testimonials />
        <About />
        <Location />
      </main>
      <Footer />
      <aside aria-label="Contato rápido">
        <WhatsAppButton />
      </aside>
    </>
  )
}
