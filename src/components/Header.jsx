import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { navLinks, whatsappLink } from '../data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Header ganha fundo e borda depois de rolar um pouco.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu mobile: trava a rolagem, fecha com Esc, leva o foco para o menu
  // e deixa o resto da página inerte (teclado e leitor de tela ficam só no menu).
  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    const background = [
      document.getElementById('conteudo'),
      document.querySelector('footer'),
      document.getElementById('whatsapp-flutuante'),
    ]
    const onKey = (e) => e.key === 'Escape' && setOpen(false)

    document.body.style.overflow = 'hidden'
    background.forEach((el) => el?.setAttribute('inert', ''))
    window.addEventListener('keydown', onKey)
    menuRef.current?.querySelector('a')?.focus()

    return () => {
      document.body.style.overflow = ''
      background.forEach((el) => el?.removeAttribute('inert'))
      window.removeEventListener('keydown', onKey)
      toggle?.focus({ preventScroll: true })
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled || open ? 'border-b border-line bg-bg/90 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-5 md:px-8">
          <a href="#inicio" aria-label="Óticas Visão, voltar ao início" onClick={close}>
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button
              href={whatsappLink()}
              variant="accent"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11! px-6! text-sm!"
            >
              Fale no WhatsApp
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {open && (
        <nav
          ref={menuRef}
          id="menu-mobile"
          aria-label="Menu"
          className="fixed inset-x-0 top-18 bottom-0 z-40 flex flex-col bg-bg px-5 pt-6 pb-10 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-5 font-display text-3xl text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={whatsappLink()}
            variant="accent"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-auto w-full"
          >
            Fale no WhatsApp
          </Button>
        </nav>
      )}
    </>
  )
}
