<script setup>
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import ObsahSection from '../components/ObsahSection.vue'
import AkcieSection from '../components/AkcieSection.vue'
import GallerySection from '../components/GallerySection.vue'
import TrasaSection from '../components/TrasaSection.vue'

const FooterSection = defineAsyncComponent(() => import('../components/FooterSection.vue'))

const waveVisible = ref(false)
const footerVisible = ref(false)
const wavePlaceholder = ref(null)
const footerPlaceholder = ref(null)

let sectionObserver
onMounted(() => {
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
  sectionObserver?.disconnect()
})

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
      <Navbar />
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
            <RouterLink class="button button-light" to="/kontakt">Kontaktuj nás <span>↗</span></RouterLink>
        </section>

    </main>

  <div ref="footerPlaceholder" class="deferred-placeholder footer-placeholder">
    <FooterSection v-if="footerVisible" />
  </div>
  
</template>
