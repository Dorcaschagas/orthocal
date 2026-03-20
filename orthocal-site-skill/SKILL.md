---
name: orthocal-site
description: >
  Skill especializada para desenvolvimento do site de marketing do OrthoCal (https://sitedc.online/orthocal/).
  Use esta skill SEMPRE que o usuário pedir para criar, editar, melhorar ou adicionar qualquer coisa
  ao site do OrthoCal — seja uma nova seção, página, componente, texto, SEO, vídeos, FAQ, animação,
  estilo visual, ou qualquer outro elemento do site. Também use quando o usuário mencionar "site do OrthoCal",
  "landing page do app", "página de marketing", ou quiser melhorar conversão, SEO, ou aparência do site.
---

# OrthoCal Site Skill

Skill para auxiliar no desenvolvimento do site de marketing do app OrthoCal.

## Contexto do projeto

**URL:** https://sitedc.online/orthocal/  
**Stack:** HTML + CSS + JavaScript puro (sem frameworks)  
**Linguagem principal do dev:** Dart/Flutter e Node.js, mas o site é HTML/CSS/JS  
**App:** OrthoCal — calculadora ortodôntica para iOS, Android e macOS

### O que o OrthoCal faz
- Análises de dentição mista (métodos de Moyers)
- Análises de dentição permanente (Bolton, discrepância ósseo-dentária, Wolford)
- Visualizador STL (modelos 3D de scanners intraorais)
- Visualizador DICOM/DCM com MPR (tomografias CBCT)
- Gestão de pacientes
- Offline, multilíngue (PT/EN/ES), multiplataforma

### Links importantes
- App Store iOS/macOS: https://apps.apple.com/app/orthocal/id6636519508
- Google Play: https://play.google.com/store/apps/details?id=com.dorcaschagas.calculadora
- Privacidade: https://sitedc.online/politicaPrivacidade/privacidadeorthocal.html
- Termos: https://sitedc.online/politicaPrivacidade/termosorthocal.html
- Contato: suporte@orthocal.app

---

## Design System do site

Siga rigorosamente estas convenções para manter consistência visual:

### Cores
```css
--primary: #6c3ff5;          /* roxo principal */
--primary-dark: #5a2fd4;     /* roxo hover */
--primary-light: #ede9fe;    /* fundo suave roxo */
--text-primary: #1a1a2e;     /* texto escuro */
--text-secondary: #555;      /* texto secundário */
--bg-light: #f8f9ff;         /* fundo claro */
--bg-white: #ffffff;
--accent-green: #10b981;     /* badge/indicador positivo */
--border: #e5e7eb;
```

### Tipografia
- Font: `'Inter', sans-serif` (Google Fonts — já carregado no site)
- Headings principais: `font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800`
- Subtítulos de seção: `font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700`
- Corpo: `font-size: 1rem; line-height: 1.7`

### Estrutura de seções
Cada seção segue este padrão:
```html
<section id="nome-secao">
  <div class="section-tag">Nome da seção</div>
  <h2 class="section-title">Título da seção</h2>
  <p class="section-sub">Subtítulo explicativo</p>
  <!-- conteúdo -->
</section>
```

### Classes utilitárias do site
- `.section-tag` — label/badge acima do título da seção
- `.section-title` — título principal da seção (`clamp(1.8rem, 4vw, 2.8rem); font-weight: 900`)
- `.section-sub` — subtítulo/descrição da seção (cor `--gray`, max-width 700px)
- `.btn-primary` — botão roxo com hover
- `.btn-secondary` — botão outline branco semi-transparente
- `.benefits-grid` — grid de cards de funcionalidades
- `.benefit-card` — card individual de funcionalidade
- `.benefit-icon` — ícone emoji do card
- `.video-wrap` — wrapper do iframe de vídeo YouTube
- `.videos-grid` — grid de vídeos
- `.faq-item` — item do accordion de FAQ (adicionar classe `open` para expandir)
- `.faq-q` — pergunta do FAQ
- `.faq-a` — resposta do FAQ
- `.review-card` — card de avaliação no carrossel
- `.carousel-track` — trilha do carrossel de avaliações

### Padrão de cards de funcionalidade
```html
<div class="benefit-card">
  <div class="benefit-icon">🦷</div>
  <h3>Nome da funcionalidade</h3>
  <p>Descrição curta e direta.</p>
</div>
```

---

## Estrutura atual do HTML

O `index.html` tem estas seções na ordem:
1. `<header>` — nav com logo, links, seletor de idioma, botão CTA
2. `#hero` — headline principal, stats (downloads, avaliação, países), botão download
3. `#download` — cards de plataforma (iOS, Android, macOS) com QR codes
4. `#benefits` — grid de funcionalidades (8 cards)
5. `#videos` — vídeos de demonstração (YouTube embeds)
6. `#reviews` — avaliações do App Store e Play Store (carrossel)
7. `#faq` — perguntas frequentes com accordion
8. `#cta` — chamada final para download
9. `<footer>` — links, copyright

**Arquivos existentes:**
- `index.html` — página principal
- `style.css` — estilos externos (linkado via `<link rel="stylesheet" href="style.css">`)
- `index.js` — scripts externos (carregado via `<script src="index.js">` no final do `<body>`)
- `orthocal-icon.png` — ícone do app (já no servidor)

---

## Diretrizes de desenvolvimento

### Ao adicionar nova seção
1. Manter consistência com o design system acima
2. Inserir no lugar correto na ordem do HTML (respeitar fluxo da página)
3. Adicionar link de navegação no `<header>` se for seção primária
4. Usar `id` em kebab-case: `id="nova-secao"`
5. Animações de entrada: usar `IntersectionObserver` com classe `fade-in`

### SEO — sempre incluir
Quando criar ou editar conteúdo, garantir:
- Termos-chave no texto: `análise ortodôntica`, `Bolton`, `Wolford`, `Moyers`, `STL`, `DICOM`, `dentição mista`, `dentição permanente`, `CBCT`, `tomografia`, `scanner intraoral`
- `alt` em todas as imagens com descrição semântica
- Headings em ordem hierárquica (h1 → h2 → h3)
- Schema.org para app mobile (ver `references/seo.md`)

### Performance
- Não adicionar bibliotecas JS pesadas — o site é HTML puro por escolha
- Lazy load em imagens e iframes YouTube: `loading="lazy"`
- YouTube embed: usar `https://www.youtube-nocookie.com/embed/VIDEO_ID`

### Responsividade
- Mobile-first: começar o CSS pelo mobile, usar `min-width` nos media queries
- Breakpoints: 768px (tablet), 1024px (desktop)
- Testar sempre que `grid-template-columns` não quebre em mobile

### Internacionalização
O site tem 3 idiomas (PT/EN/ES) controlados por JS. Ao adicionar texto:
- Adicionar em `translations` no JS para os 3 idiomas
- Usar `data-i18n="chave"` no elemento HTML
- Ver padrão existente no código antes de adicionar

---

## Tarefas frequentes — como executar

### Adicionar vídeo do YouTube
Inserir dentro de `.videos-grid` em `#videos`:
```html
<div class="video-wrap">
  <p>Título do vídeo (opcional)</p>
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&rel=0"
    title="Título descritivo do vídeo"
    allow="autoplay; encrypted-media"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>
```

### Adicionar FAQ item
Inserir dentro de `#faq`, seguindo os itens existentes:
```html
<div class="faq-item">
  <div class="faq-q" data-i18n="faqX_q">Pergunta aqui?</div>
  <div class="faq-a" data-i18n="faqX_a">Resposta completa aqui.</div>
</div>
```

### Adicionar avaliação
Inserir dentro do `#reviewTrack` (`.carousel-track`) seguindo o padrão:
```html
<div class="review-card">
  <div class="review-stars">★★★★★</div>
  <p class="review-text">"Texto da avaliação."</p>
  <div class="review-author">Nome do autor</div>
  <div class="review-store">App Store / Google Play · vX.X.X</div>
</div>
```

---

## Outputs esperados

Ao fazer alterações no site, sempre:
1. Entregar o **trecho HTML/CSS/JS completo** pronto para copiar
2. Indicar **exatamente onde inserir** no arquivo (`após a linha X`, `dentro de #secao`, etc.)
3. Se alterar CSS, entregar como bloco `<style>` adicional ou diffs claros
4. Se o site inteiro precisar de rebuild, entregar o `index.html` completo

Consulte `references/seo.md` para dados estruturados e meta tags avançadas.
