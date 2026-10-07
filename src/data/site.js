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
  // Foto: coloque src/assets/images/hero.webp (ou .jpg/.png). Sem o arquivo, aparece uma ilustração.
  // focus: posição do recorte (object-position). Aqui a pessoa fica à esquerda da foto original.
  image: { name: 'hero', alt: 'Mulher sorrindo usando óculos de grau', focus: '20% center' },
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
      image: { name: 'colecao-grau', alt: 'Armação de óculos de grau sobre fundo claro' },
    },
    {
      id: 'sol',
      name: 'Óculos de sol',
      text: 'Estilo e proteção UV para qualquer horário do dia.',
      art: 'sol',
      image: { name: 'colecao-sol', alt: 'Óculos de sol sobre uma prateleira clara' },
    },
    {
      id: 'contato',
      name: 'Lentes de contato',
      text: 'Conforto e praticidade, com orientação para o uso correto.',
      art: 'contato',
      image: { name: 'colecao-contato', alt: 'Pessoa colocando uma lente de contato' },
    },
    {
      id: 'infantil',
      name: 'Infantil',
      text: 'Armações resistentes e coloridas, pensadas para crianças ativas.',
      art: 'infantil',
      image: { name: 'colecao-infantil', alt: 'Armação de óculos com hastes amarelas' },
    },
    {
      id: 'esportivo',
      name: 'Esportivo',
      text: 'Leves, firmes e confortáveis para treinar com segurança.',
      art: 'esportivo',
      image: { name: 'colecao-esportivo', alt: 'Óculos esportivo com lentes espelhadas' },
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
  image: { name: 'diferenciais', alt: 'Mãos segurando uma armação de óculos' },
}

export const brands = {
  eyebrow: 'Marcas selecionadas',
  title: 'Marcas que combinam com',
  highlight: 'você',
  // Nomes FICTÍCIOS (palavras comuns). Não usar marcas reais de óculos.
  items: ['Arco', 'Linea', 'Nórdica', 'Ponte', 'Vértice', 'Brisa'],
}

export const testimonials = {
  eyebrow: 'Depoimentos',
  title: 'Quem já',
  highlight: 'enxerga melhor',
  // Depoimentos e nomes FICTÍCIOS, apenas exemplos para o portfólio.
  items: [
    {
      name: 'Mariana Costa',
      text: 'Fui atendida sem pressa e saí com uma armação que combinou muito com meu rosto. Voltarei com certeza.',
    },
    {
      name: 'Rafael Andrade',
      text: 'Me explicaram cada opção de lente com calma e indicaram a que fazia sentido para o meu dia a dia.',
    },
    {
      name: 'Helena Prado',
      text: 'O ajuste ficou perfeito e a adaptação foi tranquila. Ambiente acolhedor e equipe atenciosa.',
    },
  ],
}

export const about = {
  eyebrow: 'Sobre a ótica',
  title: 'Um espaço feito para',
  highlight: 'você ficar à vontade',
  paragraphs: [
    'Na Óticas Visão, escolher óculos não precisa ser corrido. Aqui você prova com calma, conversa com quem entende e tem ajuda para encontrar a armação que combina com o seu estilo e com a sua rotina.',
    'O espaço foi pensado para ser claro e acolhedor, com café à disposição e atendimento que começa ouvindo o que você precisa.',
  ],
  cta: 'Conversar pelo WhatsApp',
  image: { name: 'sobre', alt: 'Atendimento em uma ótica, com uma mãe e o filho escolhendo óculos' },
}

export const location = {
  eyebrow: 'Visite-nos',
  title: 'Venha tomar um café e',
  highlight: 'experimentar',
  text: 'Estamos no bairro de Lourdes, em Belo Horizonte. Será um prazer receber você.',
  hoursTitle: 'Horário de funcionamento',
  // Mapa centrado no bairro (sem marcador), via OpenStreetMap (sem chave de API).
  map: {
    title: 'Mapa do bairro de Lourdes, em Belo Horizonte',
    embedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-43.9480%2C-19.9420%2C-43.9280%2C-19.9250&layer=mapnik',
    linkUrl: 'https://www.openstreetmap.org/#map=16/-19.9335/-43.9380',
    linkLabel: 'Abrir mapa maior',
  },
}

export function whatsappLink(message = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
