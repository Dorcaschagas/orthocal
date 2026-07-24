// ══════════════════════════════════════════
//  Shared nav/footer, injected into every page
//  (single source of truth — avoids copy/paste drift across pages)
// ══════════════════════════════════════════

const SKIP_LINK_HTML = `
<a class="skip-link" href="#main-content">Pular para o conteúdo</a>`;

const NAV_HTML = `
<nav aria-label="Navegação principal">
  <a class="nav-logo" href="/orthocal/" style="display:flex;align-items:center;gap:10px;">
    <img src="/orthocal/orthocal-icon.png" alt="OrthoCal" width="36" height="36" style="border-radius:8px;">
    OrthoCal
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="/orthocal/#benefits" data-i18n="nav_features">Funcionalidades</a></li>
    <li><a href="/orthocal/#videos" data-i18n="nav_demo">Demonstração</a></li>
    <li><a href="/orthocal/#reviews" data-i18n="nav_reviews">Avaliações</a></li>
    <li><a href="/orthocal/#faq" data-i18n="nav_faq">FAQ</a></li>
    <li class="nav-dropdown">
      <a href="/orthocal/bolton/" data-i18n="nav_resources">Recursos</a>
      <ul class="nav-dropdown-menu">
        <li><a href="/orthocal/bolton/" data-i18n="link_bolton">Análise de Bolton</a></li>
        <li><a href="/orthocal/moyers/" data-i18n="link_moyers">Análise de Moyers</a></li>
        <li><a href="/orthocal/wolford/" data-i18n="link_wolford">Análise de Wolford</a></li>
        <li><a href="/orthocal/denticao-mista/" data-i18n="link_denticao_mista">Dentição Mista</a></li>
        <li><a href="/orthocal/denticao-permanente/" data-i18n="link_denticao_permanente">Dentição Permanente</a></li>
        <li><a href="/orthocal/stl/" data-i18n="link_stl">Arquivos STL</a></li>
        <li><a href="/orthocal/stl-viewer/" data-i18n="link_stl_viewer">Visualizador STL</a></li>
        <li><a href="/orthocal/dicom/" data-i18n="link_dicom">Visualizador DICOM</a></li>
        <li><a href="/orthocal/cbct/" data-i18n="link_cbct">Tomografia CBCT</a></li>
        <li><a href="/orthocal/reconstrucao-3d/" data-i18n="link_reconstrucao_3d">Reconstrução 3D</a></li>
      </ul>
    </li>
    <li><a href="/orthocal/blog/" data-i18n="nav_blog">Blog</a></li>
  </ul>
  <div class="nav-right">
    <div class="theme-switcher" role="group" aria-label="Tema claro ou escuro">
      <button class="theme-btn active" data-theme-choice="light" type="button" aria-label="Tema claro">☀️</button>
      <button class="theme-btn" data-theme-choice="dark" type="button" aria-label="Tema escuro">🌙</button>
    </div>
    <div class="lang-switcher" role="group" aria-label="Language selector">
      <button class="lang-btn active" data-lang="pt-BR" type="button">🇧🇷 PT</button>
      <button class="lang-btn" data-lang="en" type="button">🇺🇸 EN</button>
      <button class="lang-btn" data-lang="es" type="button">🇪🇸 ES</button>
    </div>
    <a class="nav-cta" href="/orthocal/#download" data-i18n="nav_cta">Baixar agora</a>
    <button class="nav-hamburger" id="navHamburger" aria-label="Abrir menu" aria-expanded="false" aria-controls="navLinks">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-cols">
    <nav class="footer-col" aria-label="Produto">
      <h2>Produto</h2>
      <div class="footer-col-links">
        <a href="/orthocal/#benefits" data-i18n="nav_features">Funcionalidades</a>
        <a href="/orthocal/#download" data-i18n="nav_cta">Baixar agora</a>
        <a href="/orthocal/#faq" data-i18n="nav_faq">FAQ</a>
      </div>
    </nav>
    <nav class="footer-col" aria-label="Recursos">
      <h2 data-i18n="nav_resources">Recursos</h2>
      <div class="footer-col-links">
        <a href="/orthocal/bolton/" data-i18n="link_bolton">Análise de Bolton</a>
        <a href="/orthocal/moyers/" data-i18n="link_moyers">Análise de Moyers</a>
        <a href="/orthocal/wolford/" data-i18n="link_wolford">Análise de Wolford</a>
        <a href="/orthocal/denticao-mista/" data-i18n="link_denticao_mista">Dentição Mista</a>
        <a href="/orthocal/denticao-permanente/" data-i18n="link_denticao_permanente">Dentição Permanente</a>
        <a href="/orthocal/stl/" data-i18n="link_stl">STL Odontológico</a>
        <a href="/orthocal/stl-viewer/" data-i18n="link_stl_viewer">Visualizador STL</a>
        <a href="/orthocal/dicom/" data-i18n="link_dicom">Visualizador DICOM</a>
        <a href="/orthocal/cbct/" data-i18n="link_cbct">Tomografia CBCT</a>
        <a href="/orthocal/reconstrucao-3d/" data-i18n="link_reconstrucao_3d">Reconstrução 3D</a>
      </div>
    </nav>
    <nav class="footer-col" aria-label="Blog">
      <h2 data-i18n="nav_blog">Blog</h2>
      <div class="footer-col-links">
        <a href="/orthocal/blog/o-que-e-analise-de-bolton/" data-i18n="footer_blog_1">O que é a análise de Bolton</a>
        <a href="/orthocal/blog/como-funciona-analise-de-moyers/" data-i18n="footer_blog_2">Como funciona a análise de Moyers</a>
        <a href="/orthocal/blog/como-funciona-analise-de-wolford/" data-i18n="footer_blog_3">Como funciona a análise de Wolford</a>
        <a href="/orthocal/blog/como-abrir-arquivos-stl-odontologicos/" data-i18n="footer_blog_4">Como abrir arquivos STL odontológicos</a>
        <a href="/orthocal/blog/o-que-e-dicom/" data-i18n="footer_blog_5">O que é DICOM</a>
        <a href="/orthocal/blog/o-que-e-cbct/" data-i18n="footer_blog_6">O que é CBCT</a>
        <a href="/orthocal/blog/scanner-intraoral/" data-i18n="footer_blog_7">Scanner intraoral</a>
        <a href="/orthocal/blog/modelos-digitais-na-ortodontia/" data-i18n="footer_blog_8">Modelos digitais na Ortodontia</a>
        <a href="/orthocal/blog/planejamento-ortodontico-digital/" data-i18n="footer_blog_9">Planejamento ortodôntico digital</a>
        <a href="/orthocal/blog/como-medir-modelos-stl/" data-i18n="footer_blog_10">Como medir modelos STL</a>
      </div>
    </nav>
  </div>
  <p style="margin-bottom:12px;">
    <a href="https://sitedc.online/politicaPrivacidade/privacidadeorthocal.html" data-i18n="footer_privacy">Política de Privacidade</a>
    <a href="https://sitedc.online/politicaPrivacidade/termosorthocal.html" data-i18n="footer_terms">Termos de Uso</a>
  </p>
  <p>© 2024 OrthoCal. <span data-i18n="footer_rights">Todos os direitos reservados.</span></p>
</footer>`;

(function injectPartials() {
    const navSlot = document.getElementById('nav-partial');
    const footerSlot = document.getElementById('footer-partial');
    if (navSlot) navSlot.outerHTML = SKIP_LINK_HTML + NAV_HTML;
    if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
})();
