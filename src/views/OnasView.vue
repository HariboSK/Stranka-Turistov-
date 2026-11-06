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
          <li class="hideOnMobile"><a href="/OnasView.html" class="nav-link">O nás</a></li>
          <li class="hideOnMobile"><a href="/GaleriaView.html" class="nav-link">Galéria</a></li>
          <li class="hideOnMobile"><a href="/KontaktView.html" class="nav-link">Kontakt</a></li>
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
          <li><a href="/OnasView.html" class="nav-side-link">O nás</a></li>
          <li><a href="/GaleriaView.html" class="nav-side-link">Galéria</a></li>
          <li><a href="/KontaktView.html" class="nav-side-link">Kontakt</a></li>
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
        <li class="hideOnMobile"><a href="/OnasView.html" class="nav-link">O nás</a></li>
        <li class="hideOnMobile"><a href="/GaleriaView.html" class="nav-link">Galéria</a></li>
        <li class="hideOnMobile"><a href="/KontaktView.html" class="nav-link">Kontakt</a></li>
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
          <li><a href="/OnasView.html" class="nav-side-link">O nás</a></li>
          <li><a href="/GaleriaView.html" class="nav-side-link">Galéria</a></li>
          <li><a href="/KontaktView.html" class="nav-side-link">Kontakt</a></li>
          <li><a href="/index.html#akcie" class="nav-side-link">Akcie</a></li>
          <li><a href="/index.html#trasa" class="nav-side-link">Trasy & Mapy</a></li>
        </ul>
      </nav>
    </nav>
  </header>

  <main>
    <div class="container-hero">
      <!--HERO SEKCIA-->
      <section class="hero-section">
        <div class="foto-hero">
          <img src="/IMG/hory_zapad_2.webp" alt="Hory" class="hero-img" />
          <div class="text-hero">
            <div class="fade-up-text">
              <h1>O NÁS</h1>
            </div>
          </div>
        </div>
      </section>

      <!--POD HERO PARAGRAF-->
      <section class="pod-hero-container fade-up-text">
        <p>
          Objavte krásu slovenských hôr, lesov a dolín spolu s nami. Náš klub spája ľudí, ktorí
          milujú prírodu, pohyb a priateľskú atmosféru. Organizujeme túry, výlety a akcie pre všetky
          vekové kategórie – od nenáročných prechádzok až po dobrodružné horské výstupy.
        </p>
        <p>
          Pridajte sa k nám a zažite Slovensko tak, ako ho poznáme my –
          <em>plné prírodných krás, tradícií a nezabudnuteľných zážitkov.</em>
        </p>
      </section>

      <!-- OBSAH O NAS-->
      <section class="about-section" id="o_nas">
        <div class="section-content">
          <div class="about-image-wrapper imageReveal">
            <img
              src="/IMG/Strazovsky_vrch_.jpg"
              alt="O nás fotka"
              class="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="about-details">
            <h2 class="section-title">O NÁS</h2>
            <div class="text-box">
              <article class="text">
                Slovensko je krajinou hôr, lesov a dolín, ktorá každoročne láka tisíce turistov.
                Naše Tatry, historické mestá a zachovalé hrady sú miestami, kde návštevníci
                nachádzajú pokoj, dobrodružstvo aj kultúrne zážitky. Klub slovenských turistov
                Kostrín je súčasťou tejto tradície – spájame ľudí, ktorí milujú prírodu, pohyb a
                priateľskú atmosféru. Organizujeme túry a akcie pre všetky vekové kategórie, aby sme
                ukázali krásu Slovenska doma aj zahraničným návštevníkom.
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- GOALS / ŠTATISTIKA SEKCIA -->
    <section class="stats-section">
      <h2 class="stats-title">Naše úspechy</h2>
      <div class="stats-container">
        <div class="stat-card">
          <div class="stat-number" data-target="15">0</div>
          <p class="stat-label">Zdolaných štítov</p>
        </div>
        <div class="stat-card">
          <div class="stat-number" data-target="20">0</div>
          <p class="stat-label">Odznakov</p>
        </div>
        <div class="stat-card">
          <div class="stat-number" data-target="5">0</div>
          <p class="stat-label">Poharov za horolezectvo</p>
        </div>
      </div>
    </section>

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
          <p><a href="/OnasView.html" class="policy-link">O nás</a></p>
          <p><a href="#akcie" class="policy-link">Akcie</a></p>
          <p><a href="/KontaktView.html" class="policy-link">Galéria</a></p>
        </div>
        <div class="footer-info">
          <p class="policy-text">© 2025 Klub slovenských turistov Kostrín</p>
          <p class="policy-text"><span class="separator">•</span> Všetky práva vyhradené</p>
          <p class="policy-text"><span class="separator">•</span> Vytvorené s láskou k prírode</p>
          <div class="policy-links">
            <a href="#" class="policy-link">GDPR</a>
            <span class="separator">|</span>
            <a href="/KontaktView.html" class="policy-link">Kontakt</a>
          </div>
        </div>
      </div>
      <div class="created-footer">
        <h5>Created and designed by JAKUB CHRKAVÝ</h5>
      </div>
    </footer>
  </main>
  <!--HAMBURGER JAVASCIRPT-->
  <!--SKRYTY NAVBAR PRI SCROLLE JAVASCIRPT-->
  <!--COUNTER JAVASCIRPT-->
  <!--SCROLL REVEAL JAVASCIRPT-->
</template>

<style src="../styles/shared.css"></style>
<style src="../styles/onas.css"></style>
