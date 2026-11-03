<template>
  <!-- Header / Navbar -->
  <header class="header-ostatne">
    <!-- NAVBAR ERB A NADPIS -->
    <div class="header-content">
      <div class="logo-title">
        <a href="/index.html">
          <img src="/IMG/navbar/logo.webp" alt="Erb Turistov" class="logo" />
        </a>
        <div class="title-name">
          <a href="/index.html" class="odkaz-klatova"
            ><h1>KLÁTOVA NOVÁ VES KLUB SLOVENSKÝCH TURISTOV KOSTRÍN</h1></a
          >
        </div>
      </div>

      <!-- Navbar -->
      <nav class="navbar">
        <ul>
          <li class="hideOnMobile"><a href="/index.html" class="nav-link">Domov</a></li>
          <li class="hideOnMobile"><a href="/o_nas.html" class="nav-link">O nás</a></li>
          <li class="hideOnMobile"><a href="#galeria" class="nav-link">Galéria</a></li>
          <li class="hideOnMobile"><a href="/kontakt.html" class="nav-link">Kontakt</a></li>
          <li class="hideOnMobile"><a href="/index.html#akcie" class="nav-link">Akcie</a></li>
          <li class="hideOnMobile">
            <a href="/index.html#trasa" class="nav-link">Trasy & Mapy</a>
          </li>
          <li class="menu-button" data-sidebar-action="open">
            <a href="#"
              ><img
                src="/IMG/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                alt="HAMBURGER-open"
                width="30"
                height="30"
                class="open"
            /></a>
          </li>
        </ul>
      </nav>
      <nav class="navbar-side">
        <!--SIDE BAR NA HAMBURGER MENU-->
        <ul class="sidebar">
          <li data-sidebar-action="close">
            <a href="#"
              ><img
                src="/IMG/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                alt="HAMBURGER-close"
                width="30"
                height="30"
                class="close"
            /></a>
          </li>
          <li><a href="/index.html" class="nav-side-link">Domov</a></li>
          <li><a href="/o_nas.html" class="nav-side-link">O nás</a></li>
          <li><a href="#galeria" class="nav-side-link">Galéria</a></li>
          <li><a href="/kontakt.html" class="nav-side-link">Kontakt</a></li>
          <li><a href="/index.html#akcie" class="nav-side-link">Akcie</a></li>
          <li><a href="/index.html#trasa" class="nav-side-link">Trasy & Mapy</a></li>
        </ul>
      </nav>
    </div>
    <!-- Skryty navbar ktory sa objavi po scrolle -->
    <nav class="skrytyNav" id="skrytyNav">
      <a href="/index.html">
        <img src="/IMG/navbar/logo.webp" alt="Erb Turistov" class="logo-skryty" />
      </a>
      <ul class="menu-skryte">
        <li class="hideOnMobile"><a href="/index.html" class="nav-link">Domov</a></li>
        <li class="hideOnMobile"><a href="/o_nas.html" class="nav-link">O nás</a></li>
        <li class="hideOnMobile"><a href="/galeria.html" class="nav-link">Galéria</a></li>
        <li class="hideOnMobile"><a href="/kontakt.html" class="nav-link">Kontakt</a></li>
        <li class="hideOnMobile"><a href="/index.html#akcie" class="nav-link">Akcie</a></li>
        <li class="hideOnMobile"><a href="/index.html#trasa" class="nav-link">Trasy & Mapy</a></li>
        <li class="menu-button" data-sidebar-action="open">
          <a href="#"
            ><img
              src="/IMG/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
              alt="HAMBURGER-open"
              width="30"
              height="30"
              class="open"
          /></a>
        </li>
      </ul>
      <nav class="navbar-side">
        <!--SIDE BAR NA HAMBURGER MENU-->
        <ul class="sidebar">
          <li data-sidebar-action="close">
            <a href="#"
              ><img
                src="/IMG/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                alt="HAMBURGER-close"
                width="30"
                height="30"
                class="close"
            /></a>
          </li>
          <li><a href="/index.html" class="nav-side-link">Domov</a></li>
          <li><a href="/o_nas.html" class="nav-side-link">O nás</a></li>
          <li><a href="/galeria.html" class="nav-side-link">Galéria</a></li>
          <li><a href="/kontakt.html" class="nav-side-link">Kontakt</a></li>
          <li><a href="/index.html#akcie" class="nav-side-link">Akcie</a></li>
          <li><a href="/index.html#trasa" class="nav-side-link">Trasy & Mapy</a></li>
        </ul>
      </nav>
    </nav>
  </header>

  <main class="thanks-wrapper">
    <section class="thanks-card">
      <h1>Ďakujeme za vyplnenie formulára</h1>
      <p>Vašu správu sme úspešne prijali. Ozveme sa Vám v najbližšom možnom termíne.</p>
      <div class="thanks-actions">
        <a href="/index.html" class="btn-home">Domov</a>
        <a href="/kontakt.html" class="btn-contact">Kontakt</a>
      </div>
    </section>
  </main>

  <!-- Vlna nad footerom -->
  <div class="wave-top">
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill="#0b2818"
        fill-opacity="1"
        d="M0,160L40,170C80,180,160,200,240,192C320,184,400,148,480,133.3C560,119,640,133,720,144C800,155,880,165,960,176C1040,187,1120,197,1200,186.7C1280,176,1360,144,1440,112L1440,320L0,320Z"
      ></path>
    </svg>
  </div>
  <!-- Footer section -->
  <footer class="footer-section">
    <div class="section-content">
      <div class="footer-logo">
        <a href="/index.html">
          <img src="/IMG/navbar/logo2.webp" alt="Erb Turistov" class="footer-logo" />
        </a>
      </div>
      <div class="contact-footer">
        <h4>Kontaktujte nás</h4>
        <a href="mailto:info@gmail.com"
          ><img src="/IMG/telefon_icon.png" alt="telefon_icon" /><i aria-hidden="true"
            >+421 1121 2221
          </i></a
        >
        <a href="tel:+42111212221"
          ><img src="/IMG/emai_icon.png" alt="email_icon" /><i aria-hidden="true"
            >info@gmail.com
          </i></a
        >
      </div>
      <div class="contact-footer">
        <h4>Sociálne siete</h4>
        <a
          href="https://www.facebook.com/KSTKostrin"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link1F"
          ><i class="fa-brands fa-facebook">FACEBOOK</i></a
        >
      </div>
      <div class="fast-a-footer">
        <h4>Rýchle odkazy</h4>
        <p><a href="/index.html" class="policy-link">Domov</a></p>
        <p><a href="/o_nas.html" class="policy-link">O nás</a></p>
        <p><a href="#akcie" class="policy-link">Akcie</a></p>
        <p><a href="/kontakt.html" class="policy-link">Galéria</a></p>
      </div>
      <div class="footer-info">
        <p class="policy-text">© 2025 Klub slovenských turistov Kostrín</p>
        <p class="policy-text"><span class="separator">•</span> Všetky práva vyhradené</p>
        <p class="policy-text"><span class="separator">•</span> Vytvorené s láskou k prírode</p>
        <div class="policy-links">
          <a href="#" class="policy-link">GDPR</a>
          <span class="separator">|</span>
          <a href="/kontakt.html" class="policy-link">Kontakt</a>
        </div>
      </div>
    </div>
    <div class="created-footer">
      <h5>Created and designed by JAKUB CHRKAVÝ</h5>
    </div>
  </footer>
</template>

<style src="../styles/shared.css"></style>
<style src="../styles/thanks.css"></style>
