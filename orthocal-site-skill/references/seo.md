# SEO Reference — OrthoCal Site

## Meta tags essenciais (já devem estar no `<head>`)

```html
<!-- Primary -->
<meta name="description" content="OrthoCal: app de análises ortodônticas para iOS e Android. Dentição mista e permanente, Bolton, Wolford, visualizador STL e DICOM. Gratuito.">
<meta name="keywords" content="análise ortodôntica, bolton, wolford, moyers, dentição mista, dentição permanente, STL ortodontia, DICOM ortodontia, CBCT app, scanner intraoral análise, app ortodontia, orthodontic app">
<link rel="canonical" href="https://sitedc.online/orthocal/">

<!-- Open Graph -->
<meta property="og:title" content="OrthoCal – Calculadora Ortodôntica | STL, DICOM, Dentição Mista e Permanente">
<meta property="og:description" content="O app mais completo para ortodontistas. Análises de Bolton, Wolford, Moyers. Visualizador STL e DICOM. iOS, Android e macOS.">
<meta property="og:image" content="https://sitedc.online/orthocal/og-image.png">
<meta property="og:url" content="https://sitedc.online/orthocal/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="OrthoCal – Calculadora Ortodôntica">
<meta name="twitter:description" content="Análises de Bolton, Wolford, Moyers, STL e DICOM. App para ortodontistas.">
```

---

## Schema.org — App Mobile (JSON-LD)

Inserir dentro de `<script type="application/ld+json">` no `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "OrthoCal",
  "description": "App de análises ortodônticas com cálculos de dentição mista e permanente, visualizador STL e DICOM, e gestão de pacientes.",
  "url": "https://sitedc.online/orthocal/",
  "applicationCategory": "MedicalApplication",
  "operatingSystem": "iOS, Android, macOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "13",
    "bestRating": "5"
  },
  "installUrl": [
    "https://apps.apple.com/app/orthocal/id6636519508",
    "https://play.google.com/store/apps/details?id=com.dorcaschagas.calculadora"
  ],
  "screenshot": [
    "https://sitedc.online/orthocal/screenshot1.png"
  ],
  "featureList": [
    "Análise de dentição mista (Moyers)",
    "Análise de dentição permanente (Bolton, Wolford)",
    "Visualizador STL para modelos 3D",
    "Visualizador DICOM com MPR",
    "Gestão de pacientes",
    "Funciona offline",
    "Multilíngue: Português, Inglês, Espanhol"
  ],
  "author": {
    "@type": "Organization",
    "name": "OrthoCal",
    "email": "suporte@orthocal.app"
  },
  "inLanguage": ["pt-BR", "en", "es"]
}
```

---

## Schema.org — FAQ (JSON-LD)

Adicionar junto ao schema do app quando a seção FAQ estiver presente:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o OrthoCal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OrthoCal é um aplicativo para ortodontistas com cálculos de dentição mista e permanente, visualizador STL, visualizador DICOM e gestão de pacientes."
      }
    },
    {
      "@type": "Question",
      "name": "O app é gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Os cálculos de dentição são gratuitos. STL e DICOM Viewer requerem assinatura com 7 dias grátis."
      }
    },
    {
      "@type": "Question",
      "name": "Como fazer análise de Bolton no celular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No OrthoCal, acesse a seção de Dentição Permanente e insira as medidas dos dentes. O app calcula automaticamente o índice de Bolton anterior e total."
      }
    },
    {
      "@type": "Question",
      "name": "Como abrir arquivo DICOM no celular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O OrthoCal possui um visualizador DICOM integrado que abre arquivos .dcm diretamente no app, com suporte a MPR."
      }
    },
    {
      "@type": "Question",
      "name": "Como visualizar modelo STL no celular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Importe o arquivo STL pelo app OrthoCal e use o visualizador 3D integrado para rotacionar, aplicar zoom e fazer medições em tempo real."
      }
    }
  ]
}
```

---

## Palavras-chave por intenção de busca

### Buscas de problema (alta conversão)
- "como fazer análise de bolton no celular"
- "app para análise ortodôntica"
- "como calcular discrepância ósseo-dentária"
- "app para abrir dicom no celular"
- "visualizar stl ortodontia celular"
- "análise de moyers app"
- "análise tanaka johnston app"

### Buscas de produto
- "orthocal app"
- "orthocal ortodontia"
- "calculadora ortodôntica app"

### Buscas técnicas
- "bolton analysis app"
- "wolford analysis mobile"
- "orthodontic stl viewer"
- "dicom viewer orthodontics"
- "cbct app orthodontics"
- "dental stl 3d viewer app"

---

## Hreflang (para multilíngue)

Adicionar no `<head>` quando houver versões EN e ES separadas:

```html
<link rel="alternate" hreflang="pt-BR" href="https://sitedc.online/orthocal/">
<link rel="alternate" hreflang="en" href="https://sitedc.online/orthocal/en/">
<link rel="alternate" hreflang="es" href="https://sitedc.online/orthocal/es/">
<link rel="alternate" hreflang="x-default" href="https://sitedc.online/orthocal/">
```

---

## Checklist SEO antes de publicar

- [ ] `<title>` com keyword principal no começo (máx 60 chars)
- [ ] `<meta description>` entre 150-160 chars com CTA
- [ ] Schema JSON-LD do app presente
- [ ] Schema JSON-LD do FAQ presente
- [ ] Todas as imagens com `alt` descritivo
- [ ] Headings em ordem: H1 → H2 → H3
- [ ] Links internos funcionando
- [ ] `rel="noopener"` em links externos
- [ ] `loading="lazy"` em iframes e imagens abaixo do fold
- [ ] Sitemap.xml atualizado
