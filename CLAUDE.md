# Landing page de ótica fictícia (projeto de portfólio)

> LEIA PRIMEIRO. Este arquivo é a fonte de verdade do projeto. Se algo aqui conflitar com uma suposição sua, siga este arquivo e pergunte.

## 0. Regra principal: UMA ETAPA POR VEZ

1. O projeto é dividido em etapas numeradas (seção 8). **Execute somente a etapa que o usuário pediu.**
2. **Nunca avance para a próxima etapa por conta própria**, nem "adiantando um pouco". Ao terminar, pare.
3. No fim de cada etapa, siga o protocolo da seção 9 e **aguarde o usuário autorizar** a próxima (ex.: "aprovado, pode ir para a etapa 3").
4. Se uma tarefa pedida estiver fora da etapa atual, avise e pergunte antes de fazer.
5. Se faltar uma informação que muda o resultado, **pergunte em vez de inventar**. Se a dúvida for pequena, escolha o padrão mais simples, registre a suposição no resumo final e siga.
6. Não altere arquivos fora do escopo da etapa. Não refatore código de etapas anteriores sem pedir.

## 1. Objetivo

Criar uma landing page moderna, limpa e responsiva para uma **ótica fictícia**, para ser exibida no portfólio do usuário (Vinicius). O foco é qualidade visual, boa organização de código, acessibilidade, performance e um deploy funcionando na Vercel, com histórico de versões no GitHub.

## 2. Contexto e referências

- **Nome da ótica:** **Óticas Visão** (confirmado). Local fictício: bairro de Lourdes, Belo Horizonte, MG.
- **Direção visual:** definida em `docs/design-brief.md` (paleta neutra com destaque areia/caramelo, fontes Manrope + Instrument Serif). Siga o brief em todas as etapas de interface.
- **Referência de DESIGN:** página de vendas "Ótica Lumme" no Behance. O site bloqueia acesso automático, então a referência virá em **prints salvos pelo usuário na pasta `referencias/`**. Analise as imagens na Etapa 1 e extraia: paleta, tipografia, espaçamento, estilo de imagens, botões e ritmo das seções. Não tente baixar o Behance.
- **Referência de INFORMAÇÕES/ESTRUTURA:** site de uma ótica de Belo Horizonte (multivisaosavassi.com.br). Use apenas como modelo do **tipo de conteúdo** (categorias de produtos, diferenciais, marcas, sobre o espaço, localização e contato). **Não copie textos, imagens, nome, endereço, telefone ou marcas dele.**
- Tudo que for dado do negócio (nome, endereço, telefone, horários, texto) é **fictício e original**.

## 3. Stack

- React + Vite + Tailwind CSS (use a versão estável atual e siga a documentação oficial na hora de instalar e configurar).
- JavaScript (JSX). Se o usuário preferir TypeScript, ele avisará na Etapa 1.
- Gerenciador de pacotes: npm.
- Ícones: uma biblioteca leve (ex.: lucide-react) ou SVG inline.
- Animações: CSS + IntersectionObserver. Só adicione biblioteca de animação com autorização.
- Sem backend, sem banco de dados, sem formulário com envio real.
- Deploy: Vercel (detecta Vite automaticamente; build `npm run build`, saída `dist`). Código no GitHub, branch `main`.

## 4. Estrutura prevista (ajuste só se necessário e avise)

```
/
├─ CLAUDE.md
├─ README.md
├─ referencias/          # prints do usuário (somente leitura, não editar)
├─ docs/
│  └─ design-brief.md    # criado na Etapa 1
├─ public/               # favicon, imagens estáticas, og-image
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css          # Tailwind + tokens de design
│  ├─ components/        # Header, Hero, Categories, Products, Brands, About, Location, Footer, WhatsAppButton...
│  ├─ data/site.js       # TODOS os textos/dados do negócio (nome, endereço, horários, telefone, categorias, marcas)
│  ├─ hooks/             # ex.: useReveal (animação ao rolar)
│  └─ assets/            # imagens otimizadas
└─ package.json
```

## 5. Seções da landing page (ordem)

1. Header fixo com navegação por âncoras e botão de contato.
2. Hero com promessa clara e chamadas para ação (WhatsApp e ver produtos).
3. Categorias: óculos de grau, óculos de sol, lentes de contato, infantil, esportivo.
4. Diferenciais/experiência (ex.: atendimento personalizado, exame de vista, variedade de modelos). Use números e anos de experiência **fictícios**, deixando claro no `site.js` que são exemplos.
5. Produtos e tecnologias de lentes (multifocais, antirreflexo, filtro de luz azul, fotossensíveis, proteção UV etc.).
6. Marcas: **somente marcas fictícias ou texto genérico**. Não use logos nem nomes de marcas reais.
7. Depoimentos: 3 cards com nomes **fictícios**, marcados como exemplo em `site.js` (confirmado na Etapa 1).
8. Sobre a ótica / o espaço.
9. Visite-nos: endereço fictício, mapa incorporado, **horários de funcionamento**, telefone e WhatsApp.
10. Rodapé com links, redes sociais (placeholders) e crédito de portfólio.

A ordem e os textos-base estão em `docs/design-brief.md`. Não inclua FAQ, blog, vitrine com compra, promoções ou convênios sem o usuário pedir.

## 6. Funcionalidades confirmadas

- **Botão de WhatsApp:** flutuante e também nas seções-chave, com `https://wa.me/<número>?text=<mensagem codificada>`. O número fictício e a mensagem ficam só em `src/data/site.js`.
- **Mapa e horários de funcionamento:** mapa via `<iframe>` de embed que não exija chave de API, `loading="lazy"` e `title` descritivo; tabela de horários acessível.
- **Animações de entrada ao rolar:** sutis, respeitando `prefers-reduced-motion`. Nada que prejudique o visual limpo ou a performance.

Fora do escopo (não fazer): formulário de agendamento, carrinho, login, painel admin, CMS, blog, multi-idioma.

## 7. Padrões de trabalho

**Design**
- Visual moderno e limpo: muito espaço em branco, hierarquia tipográfica clara, poucas cores, imagens de alta qualidade, bordas e sombras discretas.
- Tokens de design (cores, fontes, raios, espaçamentos) definidos uma vez na Etapa 2 em `src/index.css`/config do Tailwind e reutilizados. Evite cores e tamanhos "soltos" no JSX.
- Mobile-first. Teste em 375px, 768px e 1280px.
- Texto do site em **português do Brasil**, tom acolhedor e profissional, sem exageros de marketing.

**Código**
- Componentes pequenos, um por arquivo, nomes em inglês (`Hero.jsx`), conteúdo em português.
- Nenhum texto de negócio hardcoded dentro de componentes: tudo vem de `src/data/site.js`.
- HTML semântico (`header`, `nav`, `main`, `section`, `footer`), um único `h1`, hierarquia de títulos correta.
- Acessibilidade: `alt` em todas as imagens, contraste mínimo AA, foco visível, navegação por teclado, `aria-label` em botões só com ícone.
- Imagens: formato moderno (WebP/AVIF quando possível), dimensões definidas, `loading="lazy"` abaixo da dobra, sem arquivos gigantes.
- Sem dependências desnecessárias. Antes de instalar qualquer pacote novo fora da stack, pergunte.
- Sem `console.log` esquecido, código morto ou comentários óbvios.

**Imagens e licenças**
- Use apenas imagens com licença livre (ex.: Unsplash, Pexels) ou placeholders. Registre a origem e o crédito em `README.md`. As fotos são colocadas pelo usuário em `src/assets/images/` (nomes em `site.js` e no README dessa pasta); o código usa `getImageUrl` e cai numa ilustração se o arquivo não existir. Não use fotos de marcas reais nem imagens copiadas das referências.

**Economia de tokens**
- Leia só os arquivos necessários para a etapa. Não releia o projeto inteiro a cada pedido.
- Não cole arquivos inteiros no chat; mostre só o que mudou.
- Respostas finais curtas: o que foi feito, como verificar, o que falta.
- Ao fim da etapa, sugira ao usuário abrir uma sessão nova (ou usar `/clear`) antes da próxima.

## 8. Etapas do projeto

Cada etapa tem entregável e verificação. Só marque como concluída depois que o **usuário aprovar**.

- [x] **Etapa 1: Briefing e direção visual (sem código de interface)**
  - Fazer: analisar os prints em `referencias/`; confirmar nome da ótica; definir paleta, tipografia (fontes gratuitas, ex.: Google Fonts), estilo de imagem, tom de voz, estrutura das seções e rascunho dos textos; listar imagens necessárias.
  - Entregável: `docs/design-brief.md` curto (menos de 150 linhas).
  - Verificação: usuário lê e aprova paleta, fontes e seções. Nenhum arquivo de código criado.

- [x] **Etapa 2: Setup do projeto e primeiro deploy**
  - Fazer: criar projeto Vite + React + Tailwind, `.gitignore`, `README.md` inicial, tokens de design e fontes, `site.js` com dados fictícios, página mínima que renderiza.
  - Verificação: `npm install`, `npm run dev` abre sem erros e `npm run build` termina sem erros. Usuário faz o primeiro push e conecta o repositório na Vercel.

- [x] **Etapa 3: Header, Hero e rodapé base**
  - Fazer: header fixo responsivo (menu mobile), Hero, rodapé e botão flutuante de WhatsApp.
  - Verificação: build sem erros; visual conferido em 375/768/1280px; links de âncora e WhatsApp funcionam; navegação por teclado ok.

- [x] **Etapa 4: Categorias, diferenciais, produtos e marcas**
  - Fazer: seções 3 a 6 da seção 5, seguindo os componentes e tokens da Etapa 3.
  - Verificação: build sem erros; responsivo; todo texto vem de `site.js`; imagens com `alt` e otimizadas.

- [x] **Etapa 5: Depoimentos, Sobre, Visite-nos (mapa e horários) e acabamentos de conteúdo**
  - Fazer: seções 7, 8 e 9, com depoimentos (scroll-snap no celular), mapa incorporado, tabela de horários e contatos fictícios.
  - Verificação: mapa carrega, tabela de horários legível no celular, telefone e WhatsApp clicáveis, build sem erros.

- [ ] **Etapa 6: Animações de entrada ao rolar**
  - Fazer: hook `useReveal` com IntersectionObserver e classes de transição; aplicar nas seções.
  - Verificação: animações suaves e discretas; com "reduzir movimento" ativado no sistema elas são desligadas; sem layout shift; build sem erros.

- [ ] **Etapa 7: Qualidade (QA), acessibilidade, performance e SEO**
  - Fazer: revisar responsividade, contraste, foco, `alt`, meta tags, Open Graph, favicon, `lang="pt-BR"`, otimização de imagens e fontes.
  - Verificação: Lighthouse mobile em produção ou preview com metas Performance ≥ 90, Acessibilidade ≥ 95, Boas práticas ≥ 90, SEO ≥ 90; sem erros no console; relatório curto das correções.

- [ ] **Etapa 8: Finalização e publicação**
  - Fazer: `README.md` de portfólio (descrição, stack, prints, link do deploy, créditos de imagens), limpeza de código e arquivos não usados, conferência final.
  - Verificação: `npm run build` ok, site da Vercel abre e funciona, README completo, nenhum dado real ou marca real no projeto.

## 9. Protocolo de fim de etapa (obrigatório)

Ao terminar uma etapa, responda com este formato curto e **pare**:

1. **O que foi feito** (3 a 6 linhas).
2. **Como verifiquei** (comandos rodados e resultado) e **como você pode verificar** (o que abrir/testar).
3. **Suposições feitas** ou pendências.
4. **Comandos de git para o usuário rodar** (seção 10), com mensagem de commit sugerida.
5. **Recomendação de modelo e esforço para a próxima etapa** (seção 11).
6. Frase final: "Aguardando sua aprovação para iniciar a Etapa N."

Não inicie a próxima etapa, não abra novos arquivos "para adiantar" e não marque a etapa como concluída neste arquivo até o usuário aprovar.

## 10. Git e deploy

- **O usuário roda os comandos de git. Claude não executa `git commit`, `git push`, `git tag` nem cria repositório.** Comandos somente de leitura (`git status`, `git diff`, `git log`) podem ser usados.
- Idioma das mensagens de commit: português, no padrão `tipo: descrição curta` (`chore`, `feat`, `fix`, `style`, `docs`, `refactor`).
- Fluxo padrão a cada etapa, na raiz do projeto:

```bash
git status
git add .
git commit -m "feat: etapa 3 - header, hero e rodape"
git push
git tag etapa-3        # opcional, marca a versão da etapa
git push --tags        # opcional
```

- Primeira vez (depois da Etapa 2, com o repositório vazio criado no GitHub):

```bash
git init
git branch -M main
git add .
git commit -m "chore: setup inicial com Vite, React e Tailwind"
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

- Vercel: "Add New > Project", importar o repositório, preset Vite, deixar build e saída padrão. Cada `git push` na `main` gera um novo deploy automático.
- Ao fim de cada etapa, sempre entregue os comandos já com a mensagem de commit pronta.
- Nunca versionar `node_modules`, `dist`, `.env` ou segredos.

## 11. Modelo e esforço recomendados (o usuário troca com `/model` e `/effort`)

Defina o esforço no **início** da sessão, pois mudar no meio invalida o cache e gasta mais tokens. Use uma sessão nova por etapa.

| Etapa | Modelo | Esforço |
|---|---|---|
| 1. Briefing e direção visual | Opus 5.5 | high |
| 2. Setup e primeiro deploy | Sonnet 5.5 | medium |
| 3. Header, Hero e rodapé | Opus 5.5 | medium |
| 4. Categorias, produtos, marcas | Sonnet 5.5 | medium |
| 5. Sobre, mapa e horários | Sonnet 5.5 | medium |
| 6. Animações | Sonnet 5.5 | medium (high se houver bug) |
| 7. QA, acessibilidade, performance | Opus 5.5 | high |
| 8. Finalização | Sonnet 5.5 | low |

Se o assistente pulou arquivos, não rodou o build ou parou no meio: **aumente o esforço**, não o modelo. Se tentou com bom contexto e continua errando: suba o modelo. Haiku 5.5 serve para ajustes pequenos de texto e README.

## 12. Restrições (nunca fazer)

- Avançar de etapa sem autorização.
- Copiar design, texto, imagem, logotipo ou nome das referências.
- Usar marcas reais, pessoas reais, endereços reais, telefones reais ou dados pessoais.
- Prometer diagnóstico, preços ou convênios reais.
- Instalar dependências fora da stack sem perguntar.
- Criar backend, formulário com envio real ou integrações pagas.
- Editar arquivos da pasta `referencias/`.
- Usar `localStorage` para dados do site sem necessidade.
- Rodar comandos destrutivos (`rm -rf`, `git reset --hard`, `git push --force`) sem pedir confirmação explícita.

## 13. Avisos de ambiente

- A pasta do projeto fica em uma unidade sincronizada do Google Drive (`G:\Outros computadores\...`). A pasta `node_modules` tem milhares de arquivos e pode deixar a sincronização e o `npm install` lentos. Se isso ocorrer, avise o usuário para excluir `node_modules` e `dist` da sincronização ou mover o projeto para fora do Drive.
- Sistema do usuário: Windows. Prefira comandos compatíveis (`npm`, `git`), evite scripts que dependam de bash.
- O site deve ser pensado primeiro para celular, porque o público de uma ótica local usa muito o WhatsApp.

## 14. Critérios de conclusão do projeto

- Todas as etapas aprovadas pelo usuário.
- `npm run build` sem erros nem avisos relevantes.
- Site publicado na Vercel, funcionando em celular, tablet e desktop.
- Lighthouse mobile dentro das metas da Etapa 7.
- Todos os textos e dados fictícios, vindos de `src/data/site.js`.
- Sem imagens, marcas ou textos copiados; créditos de imagem no README.
- README de portfólio completo.
- Histórico de commits organizado, um bloco por etapa.

## 15. Status atual

- Planejamento: aprovado.
- Etapa 1: concluída e aprovada (`docs/design-brief.md`).
- Etapa 2: concluída e aprovada.
- Etapa 3: concluída e aprovada.
- Etapa 4: concluída e aprovada.
- Etapa 5: concluída e aprovada.
- Etapa 6: entregue (hook `useReveal`, componente `Reveal`, fade + subida de 16px em todas as seções, respeita movimento reduzido; Hero sem animação no título e na foto), **aguardando aprovação do usuário**.
- Fotos: o usuário já adicionou as 8 fotos em `src/assets/images/` (JPG originais de 0,7 a 8,5 MB, até 8000px de largura, ~21 MB no total). **Para a Etapa 7:** redimensionar e converter para WebP/AVIF (hero até 1600px, cards até 800px) e criar versões responsivas. Preencher os créditos no README.
- Atenção (Etapa 7): algumas fotos parecem mostrar logotipos de marcas reais (ex.: óculos esportivo). Avisar o usuário para trocar ou recortar, pois a regra do projeto é não usar marcas reais.
- Marcas fictícias atuais: Arco, Linea, Nórdica, Ponte, Vértice, Brisa ("Halo" foi trocada por existir como marca real). Conferir antes da publicação.
- Quando o usuário pedir uma etapa, confirme em uma linha qual etapa vai executar e comece.
