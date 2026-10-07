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
  address: {
    street: 'Rua da Clareza, 120',
    district: 'Lourdes',
    city: 'Belo Horizonte',
    state: 'MG',
  },
  instagram: '@oticasvisao',
}

export const hours = [
  { days: 'Segunda a sexta', time: '9h às 19h' },
  { days: 'Sábado', time: '9h às 14h' },
  { days: 'Domingo', time: 'Fechado' },
]

export function whatsappLink(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
