// Fonte única dos textos e dados do negócio.
// ATENÇÃO: tudo aqui é FICTÍCIO e serve apenas para o portfólio.

export const site = {
  name: 'Óticas Visão',
  tagline: 'Enxergue com clareza. Viva com estilo.',
  description:
    'Armações selecionadas, lentes de alta tecnologia e um atendimento que começa ouvindo você.',
  location: 'Lourdes · Belo Horizonte',
}

export const contact = {
  // Número fictício: o link abre o WhatsApp, mas não leva a nenhuma conversa real.
  whatsappNumber: '5531900000000',
  whatsappMessage: 'Olá! Vim pelo site e gostaria de atendimento.',
  phone: '(31) 90000-0000',
  phoneHref: 'tel:+5531900000000',
  address: {
    street: 'Rua da Clareza, 120',
    district: 'Lourdes',
    city: 'Belo Horizonte',
    state: 'MG',
  },
  // Perfil fictício (placeholder).
  instagram: '@oticasvisao',
  instagramUrl: '#',
}

export const hours = [
  { days: 'Segunda a sexta', time: '9h às 19h' },
  { days: 'Sábado', time: '9h às 14h' },
  { days: 'Domingo', time: 'Fechado' },
]

// Âncoras do menu. Os ids correspondem às seções da página.
export const navLinks = [
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Lentes', href: '#lentes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export const hero = {
  eyebrow: 'Ótica em Lourdes · BH',
  titleStart: 'Enxergue com clareza.',
  titleHighlight: 'Viva com estilo.',
  text: 'Armações selecionadas, lentes de alta tecnologia e um atendimento que começa ouvindo você.',
  primaryCta: {
    label: 'Agendar pelo WhatsApp',
    message: 'Olá! Gostaria de agendar um atendimento na Óticas Visão.',
  },
  secondaryCta: { label: 'Ver coleções', href: '#colecoes' },
  // Número de exemplo (fictício).
  badge: { value: '15 anos', label: 'cuidando do seu olhar' },
  // Imagem do Hero: definida quando o plano de imagens for aprovado.
  // Enquanto for null, o Hero mostra uma ilustração no lugar da foto.
  image: null, // ex.: { src: '/images/hero.webp', alt: '...', width: 1200, height: 1500 }
}

export const footer = {
  about: 'Óculos de grau, óculos de sol e lentes de contato com atendimento personalizado.',
  disclaimer: 'marca fictícia criada para portfólio.',
  developer: 'Vinicius',
}

export function whatsappLink(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
