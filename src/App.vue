<script setup>
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue'
import ObsahSection from './components/ObsahSection.vue'
import AkcieSection from './components/AkcieSection.vue'
import GallerySection from './components/GallerySection.vue'
import TrasaSection from './components/TrasaSection.vue'

const FooterSection = defineAsyncComponent(() => import('./components/FooterSection.vue'))

const menuOpen = ref(false)
const cookiesVisible = ref(true)
const cookieSettingsOpen = ref(false)
const showHiddenNav = ref(false)
const waveVisible = ref(false)
const footerVisible = ref(false)
const wavePlaceholder = ref(null)
const footerPlaceholder = ref(null)

let sectionObserver
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === wavePlaceholder.value) {
          showDeferredContent('wave')
        } else if (entry.target === footerPlaceholder.value) {
          showDeferredContent('footer')
        }
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { rootMargin: '0px 0px 180px' })

  document.querySelectorAll('.deferred-section').forEach((section) => {
    sectionObserver?.observe(section)
  })
  if (wavePlaceholder.value) {
    sectionObserver.observe(wavePlaceholder.value)
  }
  if (footerPlaceholder.value) {
    sectionObserver.observe(footerPlaceholder.value)
  }
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  sectionObserver?.disconnect()
})

function handleScroll() {
  showHiddenNav.value = window.scrollY > 250
}

function closeMenu() {
  menuOpen.value = false
}

function acceptCookies() {
  cookiesVisible.value = false
  cookieSettingsOpen.value = false
}

function openCookieSettings() {
  cookieSettingsOpen.value = true
}

function showDeferredContent(content) {
  if (content === 'wave') {
    waveVisible.value = true
  } else {
    footerVisible.value = true
  }
}
</script>

<template>
  <main>
    <section id="domov" class="hero">
      <header class="header-ostatne">
        <div class="header-content">
          <div class="logo-title">
            <a href="#domov"><img src="/IMG/navbar/logo.webp" alt="Erb turistov" class="logo" /></a>
            <div class="title-name"><a href="#domov" class="odkaz-klatova"><h1>KLÁTOVA NOVÁ VES KLUB SLOVENSKÝCH TURISTOV KOSTRÍN</h1></a></div>
          </div>
          <nav class="navbar" aria-label="Hlavná navigácia">
            <ul>
              <li class="hideOnMobile"><a href="#domov" class="nav-link">Domov</a></li>
              <li class="hideOnMobile"><a href="#o-nas" class="nav-link">O nás</a></li>
              <li class="hideOnMobile"><a href="#akcie" class="nav-link">Akcie</a></li>
              <li class="hideOnMobile"><a href="#galeria" class="nav-link">Galéria</a></li>
              <li class="hideOnMobile"><a href="#trasy" class="nav-link">Trasy & Mapy</a></li>
              <li class="hideOnMobile"><a href="#kontakt" class="nav-link">Kontakt</a></li>
              <li class="hideOnMobile"><a href="#pridaj-sa" class="nav-link">Pridaj sa tu</a></li>
              <li class="menu-button"><button type="button" aria-label="Otvoriť menu" @click="menuOpen = !menuOpen">{{ menuOpen ? '×' : '☰' }}</button></li>
            </ul>
          </nav>
        </div>
        <nav class="skrytyNav" :class="{ show: showHiddenNav }" aria-label="Rýchla navigácia">
          <a href="#domov">
            <img src="/IMG/navbar/logo.webp" alt="Erb turistov" class="logo-skryty" />
          </a>
          <ul class="menu-skryte">
            <li class="hideOnMobile"><a href="#domov" class="nav-link">Domov</a></li>
            <li class="hideOnMobile"><a href="#o-nas" class="nav-link">O nás</a></li>
            <li class="hideOnMobile"><a href="#akcie" class="nav-link">Akcie</a></li>
            <li class="hideOnMobile"><a href="#galeria" class="nav-link">Galéria</a></li>
            <li class="hideOnMobile"><a href="#trasy" class="nav-link">Trasy & Mapy</a></li>
            <li class="hideOnMobile"><a href="#kontakt" class="nav-link">Kontakt</a></li>
            <li class="hideOnMobile"><a href="#pridaj-sa" class="nav-link">Pridaj sa tu</a></li>
            <li class="menu-button">
              <button type="button" aria-label="Otvoriť menu" @click="menuOpen = !menuOpen">
                {{ menuOpen ? '×' : '☰' }}
              </button>
            </li>
          </ul>
        </nav>
        <nav v-if="menuOpen" class="navbar-side" aria-label="Mobilná navigácia">
          <ul class="sidebar">
            <li><a href="#domov" class="nav-side-link" @click="closeMenu">Domov</a></li>
            <li><a href="#o-nas" class="nav-side-link" @click="closeMenu">O nás</a></li>
            <li><a href="#akcie" class="nav-side-link" @click="closeMenu">Akcie</a></li>
            <li><a href="#galeria" class="nav-side-link" @click="closeMenu">Galéria</a></li>
            <li><a href="#trasy" class="nav-side-link" @click="closeMenu">Trasy & Mapy</a></li>
            <li><a href="#kontakt" class="nav-side-link" @click="closeMenu">Kontakt</a></li>
            <li><a href="#pridaj-sa" class="nav-side-link" @click="closeMenu">Pridaj sa tu</a></li>
          </ul>
        </nav>
      </header>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">KLUB SLOVENSKÝCH TURISTOV</p>
        <h1>Vonku je<br /><em>to najlepšie.</em></h1>
        <p class="hero-lead">Objavujeme slovenské hory, lesy a doliny. Spolu, vlastným tempom a s výhľadom, na ktorý sa nezabúda.</p>
        <a class="button button-light" href="#akcie">Pozrieť najbližšie akcie <span>↓</span></a>
      </div>
      <div class="hero-stamp">EST.<br /><strong>1998</strong><br />KOSTRÍN</div>
      <div class="hero-scroll">SCROLL <span>↓</span></div>
    </section>

    <ObsahSection />

    <AkcieSection />

    <GallerySection />

    <TrasaSection />

    <section id="kontakt" class="contact section-pad deferred-section">
      <div class="section-label">05 / SPOJME SA</div>
      <h2>Uvidíme sa<br /><em>na chodníku.</em></h2>
      <p>Napíš nám, príď na akciu alebo nás len sleduj. Každý výlet začína jedným rozhodnutím vyraziť.</p>
      <a class="button button-light" href="/KontaktView.html">Kontaktuj nás <span>↗</span></a>
    </section>
  </main>

  <div v-if="cookiesVisible" class="cookies-bar" role="dialog" aria-label="Nastavenie cookies">
    <div>
      <strong>Používame cookies</strong>
      <p>Cookies nám pomáhajú zlepšovať fungovanie stránky a načítať mapu z Mapy.cz.</p>
    </div>
    <div class="cookies-actions">
      <button type="button" class="cookies-btn cookies-btn-settings" @click="openCookieSettings">Nastaviť</button>
      <button type="button" class="cookies-btn cookies-btn-reject" @click="acceptCookies">Odmietnuť</button>
      <button type="button" class="cookies-btn cookies-btn-accept" @click="acceptCookies">Prijať cookies</button>
    </div>
    <div v-if="cookieSettingsOpen" class="cookie-settings">
      <label><input type="checkbox" checked disabled /> Nevyhnutné cookies</label>
      <label><input type="checkbox" /> Analytické cookies</label>
      <button type="button" class="cookies-btn cookies-btn-accept" @click="acceptCookies">Uložiť nastavenia</button>
    </div>
  </div>

  <div v-if="!waveVisible" ref="wavePlaceholder" class="deferred-placeholder wave-placeholder" aria-hidden="true"></div>
  <div v-else class="wave-top">
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="#0b2818" fill-opacity="1" d="M0,160L40,170C80,180,160,200,240,192C320,184,400,148,480,133.3C560,119,640,133,720,144C800,155,880,165,960,176C1040,187,1120,197,1200,186.7C1280,176,1360,144,1440,112L1440,320L0,320Z"></path>
    </svg>
  </div>

  <div v-if="!footerVisible" ref="footerPlaceholder" class="deferred-placeholder footer-placeholder" aria-hidden="true"></div>
  <FooterSection v-else />
</template>
