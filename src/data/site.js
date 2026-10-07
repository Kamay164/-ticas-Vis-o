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

export const collections = {
  eyebrow: 'Coleções',
  title: 'Encontre o seu',
  highlight: 'estilo',
  linkLabel: 'Quero ver modelos',
  items: [
    {
      id: 'grau',
      name: 'Óculos de grau',
      text: 'Armações leves e elegantes para o seu dia a dia, com lentes sob medida.',
      art: 'grau',
      image: null, // ex.: { src: '/images/colecao-grau.webp', alt: '...', width: 800, height: 600 }
    },
    {
      id: 'sol',
      name: 'Óculos de sol',
      text: 'Estilo e proteção UV para qualquer horário do dia.',
      art: 'sol',
      image: null,
    },
    {
      id: 'contato',
      name: 'Lentes de contato',
      text: 'Conforto e praticidade, com orientação para o uso correto.',
      art: 'contato',
      image: null,
    },
    {
      id: 'infantil',
      name: 'Infantil',
      text: 'Armações resistentes e coloridas, pensadas para crianças ativas.',
      art: 'infantil',
      image: null,
    },
    {
      id: 'esportivo',
      name: 'Esportivo',
      text: 'Leves, firmes e confortáveis para treinar com segurança.',
      art: 'esportivo',
      image: null,
    },
  ],
}

export function collectionMessage(name) {
  return `Olá! Gostaria de ver modelos de ${name.toLowerCase()}.`
}

export const lenses = {
  eyebrow: 'Lentes e tecnologias',
  title: 'Lentes que fazem',
  highlight: 'diferença',
  text: 'Cada lente é indicada para a sua rotina: trabalho no computador, direção, esporte ou o dia a dia.',
  items: [
    'Multifocais',
    'Antirreflexo',
    'Filtro de luz azul',
    'Fotossensíveis',
    'Proteção UV',
    'Polarizadas',
  ],
  closingStart: 'Mais do que corrigir,',
  closingHighlight: 'cuidar da sua visão.',
}

export const benefits = {
  eyebrow: 'Por que a Óticas Visão',
  title: 'Cuidado que você',
  highlight: 'sente',
  titleEnd: 'desde a primeira visita',
  // Números de EXEMPLO (fictícios).
  stats: [
    { value: '+800', label: 'modelos' },
    { value: '+30', label: 'marcas' },
    { value: '15', label: 'anos de experiência' },
  ],
  items: [
    'Atendimento personalizado',
    'Ajuste de armação gratuito',
    'Orientação na escolha das lentes',
    'Garantia de adaptação',
    'Parcelamento facilitado',
  ],
  image: null, // ex.: { src: '/images/diferenciais.webp', alt: '...', width: 900, height: 1100 }
}

export const brands = {
  eyebrow: 'Marcas selecionadas',
  title: 'Marcas que combinam com',
  highlight: 'você',
  // Nomes FICTÍCIOS (palavras comuns). Não usar marcas reais de óculos.
  items: ['Arco', 'Linea', 'Nórdica', 'Ponte', 'Vértice', 'Brisa'],
}

export function whatsappLink(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
