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
          <li class="hideOnMobile"><a href="#galeria" class="nav-link">Galéria</a></li>
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
          <li><a href="#galeria" class="nav-side-link">Galéria</a></li>
          <li><a href="/KontaktView.html" class="nav-side-link">Kontakt</a></li>
          <li><a href="/index.html#akcie" class="nav-side-link">Akcie</a></li>
          <li><a href="/index.html#trasa" class="nav-side-link">Trasy & Mapy</a></li>
        </ul>
      </nav>
    </div>
  </header>

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

  <main>
    <!--HERO SEKCIA-->
    <section class="banner-section">
      <div class="banner-image">
        <img src="/IMG/galeria_hero.webp" alt="Banner fotka" class="hero-img" />
        <div class="banner-text">
          <div class="fade-up-text">
            <h1>GALÉRIA</h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Popisová sekcia pod galériou -->
    <section class="description-section fade-up-text">
      <div class="description-box">
        <p>
          Slovensko je krajinou hôr, lesov a dolín, ktorá každoročne láka tisíce turistov. Klub
          slovenských turistov Kostrín je súčasťou tejto tradície – spájame ľudí, ktorí milujú
          prírodu, pohyb a priateľskú atmosféru.
        </p>
      </div>
    </section>

    <!--SLIDER GALERIA-->
    <div class="nadpis-akcie fade-up-text">
      <h2>GALÉRIA</h2>
    </div>

    <div class="gallery-wrapper">
      <button id="prev-gallery" class="sipky">&#10094;</button>

      <section class="gallery-slider fade-up-text">
        <div class="gallery-track">
          <!-- prvá sada 6 fotiek -->
          <div class="gallery-set">
            <div class="gallery-item">
              <img
                src="/IMG/kackar-mountains-9655200.jpg"
                alt="kackar"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Vysoké Tatry</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/mount-fuji-8010752_1920.jpg"
                alt="fuji"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Horská krajina</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/mountain-9761503.jpg"
                alt="hory"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Prírodné krásy</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/hory_zapad_2.webp"
                alt="hory_zapad"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Západ slnka</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/mountains-8379756_1920.jpg"
                alt="Fmountains"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Horské slnko</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/south-tyrol-8023224_1920.jpg"
                alt="south-tyrol"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Južný Tirol</p>
              </div>
            </div>
          </div>
          <!-- druhá sada 6 fotiek -->
          <div class="gallery-set">
            <div class="gallery-item">
              <img
                src="/IMG/alps-9266131.jpg"
                alt="alps"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Alpy</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/ona_faroe-islands-9939486.jpg"
                alt="ona_faroe-islands"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Faerské ostrovy</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/lake-8305673.jpg"
                alt="lake"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Horské jazero</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/stubaital-valley-tirol-austria.jpg"
                alt="stubaital-valley"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Stubaital údolie</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/mountain-clouds.jpg"
                alt="hory v oblakoch"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>V oblakoch</p>
              </div>
            </div>
            <div class="gallery-item">
              <img
                src="/IMG/horizontal-shot-body-water-surrounded-by-rocky-mountains-beautiful-cloudy-sky_181624-5572.jpg"
                alt="Pleso"
                class="img-galeria"
                loading="lazy"
                decoding="async"
              />
              <div class="gallery-overlay">
                <p>Horské pleso</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button id="next-gallery" class="sipky">&#10095;</button>
    </div>

    <!--LIGHTBOX MENU PRE VACSIE FOTO-->
    <div class="lightbox" id="gallery-lightbox" aria-hidden="true">
      <button class="lightbox-close" id="lightbox-close" aria-label="Zavriet">✕</button>
      <button class="lightbox-nav lightbox-prev" id="lightbox-prev" aria-label="Predosla">
        &#10094;
      </button>
      <button class="lightbox-nav lightbox-next" id="lightbox-next" aria-label="Dalsia">
        &#10095;
      </button>
      <div class="lightbox-content" role="dialog" aria-modal="true">
        <img id="lightbox-image" alt="" loading="lazy" />
        <div class="lightbox-caption" id="lightbox-caption"></div>
        <div class="lightbox-toolbar" aria-label="Ovladanie priblizenia">
          <button type="button" id="lightbox-zoom-out" aria-label="Oddialit">-</button>
          <button type="button" id="lightbox-zoom-reset" aria-label="Reset">Reset</button>
          <button type="button" id="lightbox-zoom-in" aria-label="Priblizit">+</button>
        </div>
        <p class="lightbox-hint">Scrollom priblížiš fotku</p>
      </div>
    </div>

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
            ><img src="/IMG/telefon_icon.png" alt="telefon_icon" /><i aria-hidden="true">
              +421 1121 2221
            </i></a
          >
          <a href="tel:+42111212221"
            ><img src="/IMG/emai_icon.png" alt="email_icon" /><i aria-hidden="true">
              info@gmail.com
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
  <!--NAČÍTANIE FOTIEK Z ADMIN PANELU-->
  <!--PRIBLIŽENIE FOTIEK SCRIPT-->
  <!--SCROLL REVEAL JAVASCIRPT-->
</template>

<style src="../styles/shared.css"></style>
<style src="../styles/galeria.css"></style>
