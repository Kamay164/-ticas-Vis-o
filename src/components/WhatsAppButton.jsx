import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/site'

// Botão flutuante, sempre visível no canto inferior direito.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-5 bottom-5 z-30 inline-flex size-14 items-center justify-center rounded-full bg-accent-strong text-white shadow-[0_10px_30px_-10px_rgba(28,27,25,0.5)] transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-ink md:right-8 md:bottom-8"
    >
      <MessageCircle className="size-6" strokeWidth={1.75} aria-hidden="true" />
    </a>
  )
}
