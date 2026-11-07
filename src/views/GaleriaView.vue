<script setup>
import { computed, ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'

const photos = [
  ['/IMG/kackar-mountains-9655200.jpg', 'Vysoké Tatry'],
  ['/IMG/mount-fuji-8010752_1920.jpg', 'Horská krajina'],
  ['/IMG/mountain-9761503.jpg', 'Prírodné krásy'],
  ['/IMG/hory_zapad_2.webp', 'Západ slnka'],
  ['/IMG/mountains-8379756_1920.jpg', 'Horské slnko'],
  ['/IMG/south-tyrol-8023224_1920.jpg', 'Južný Tirol'],
  ['/IMG/hory_zapad_2.webp', 'Cesta za výhľadom'],
  ['/IMG/kackar-mountains-9655200.jpg', 'Horský chodník'],
  ['/IMG/mountain-9761503.jpg', 'Ticho v horách'],
  ['/IMG/mount-fuji-8010752_1920.jpg', 'Výprava'],
  ['/IMG/mountains-8379756_1920.jpg', 'Ranné hory'],
  ['/IMG/south-tyrol-8023224_1920.jpg', 'Alpská krajina']
]

const currentSet = ref(0)
const lightboxIndex = ref(null)
const zoom = ref(1)
const sets = computed(() => [photos.slice(0, 6), photos.slice(6)])
const activePhoto = computed(() => lightboxIndex.value === null ? null : photos[lightboxIndex.value])

function openLightbox(photo) {
  lightboxIndex.value = photos.indexOf(photo)
  zoom.value = 1
  document.body.classList.add('is-locked')
}

function closeLightbox() {
  lightboxIndex.value = null
  document.body.classList.remove('is-locked')
}

function changePhoto(step) {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value + step + photos.length) % photos.length
  zoom.value = 1
}

function changeSet(step) {
  currentSet.value = (currentSet.value + step + sets.value.length) % sets.value.length
}
</script>

<template>
  <Navbar />

  <main>
    <section class="banner-section">
      <div class="banner-image">
        <img src="/IMG/galeria_hero.webp" alt="Horská krajina" class="hero-img" />
        <div class="banner-text">
          <h1>GALÉRIA</h1>
        </div>
      </div>
    </section>

    <section class="description-section">
      <div class="description-box">
        Slovensko je krajinou hôr, lesov a dolín, ktorá každoročne láka tisíce turistov.
        Klub slovenských turistov Kostrín spája ľudí, ktorí milujú prírodu, pohyb a priateľskú atmosféru.
      </div>
    </section>

    <section class="collections-section">
      <div class="collections-heading">
        <p class="section-label">02 / KOLEKCIE</p>
        <h2>Vyberte si<br /><em>výpravu.</em></h2>
      </div>

      <div class="collections-grid">
        <details class="collection-card" open>
          <summary>
            <img src="/IMG/kackar-mountains-9655200.jpg" alt="Vysoké Tatry" />
            <span class="collection-card-content">
              <span class="collection-number">01</span>
              <strong>Vysoké Tatry</strong>
              <small>Výpravy za výhľadmi</small>
              <span class="collection-open">Otvoriť kolekciu <b>↗</b></span>
            </span>
          </summary>
          <div class="collection-detail">
            <p class="section-label">KOLEKCIA 01 / VYSOKÉ TATRY</p>
            <div class="collection-photos">
              <img src="/IMG/kackar-mountains-9655200.jpg" alt="Vysoké Tatry" loading="lazy" />
              <img src="/IMG/mountains-8379756_1920.jpg" alt="Ranné hory" loading="lazy" />
              <img src="/IMG/mount-fuji-8010752_1920.jpg" alt="Horská krajina" loading="lazy" />
            </div>
          </div>
        </details>

        <details class="collection-card">
          <summary>
            <img src="/IMG/hory_zapad_2.webp" alt="Cesta za výhľadom" />
            <span class="collection-card-content">
              <span class="collection-number">02</span>
              <strong>Cesty za slnkom</strong>
              <small>Západy a ranné chodníky</small>
              <span class="collection-open">Otvoriť kolekciu <b>↗</b></span>
            </span>
          </summary>
          <div class="collection-detail">
            <p class="section-label">KOLEKCIA 02 / CESTY ZA SLNKOM</p>
            <div class="collection-photos">
              <img src="/IMG/hory_zapad_2.webp" alt="Západ slnka" loading="lazy" />
              <img src="/IMG/south-tyrol-8023224_1920.jpg" alt="Alpská krajina" loading="lazy" />
              <img src="/IMG/mountain-9761503.jpg" alt="Prírodné krásy" loading="lazy" />
            </div>
          </div>
        </details>

        <details class="collection-card">
          <summary>
            <img src="/IMG/south-tyrol-8023224_1920.jpg" alt="Južný Tirol" />
            <span class="collection-card-content">
              <span class="collection-number">03</span>
              <strong>Za hranicami</strong>
              <small>Hory, ktoré zostávajú v pamäti</small>
              <span class="collection-open">Otvoriť kolekciu <b>↗</b></span>
            </span>
          </summary>
          <div class="collection-detail">
            <p class="section-label">KOLEKCIA 03 / ZA HRANICAMI</p>
            <div class="collection-photos">
              <img src="/IMG/south-tyrol-8023224_1920.jpg" alt="Južný Tirol" loading="lazy" />
              <img src="/IMG/mount-fuji-8010752_1920.jpg" alt="Výprava" loading="lazy" />
              <img src="/IMG/kackar-mountains-9655200.jpg" alt="Horský chodník" loading="lazy" />
            </div>
          </div>
        </details>
      </div>
    </section>

    <section class="gallery-page-section">
      <div class="nadpis-akcie">
        <p class="section-label">03 / Z NAŠICH VÝPRAV</p>
        <h2>Momenty z<br /><em>chodníka.</em></h2>
      </div>

      <div class="gallery-wrapper">
        <button type="button" class="sipky" aria-label="Predchádzajúca sada" @click="changeSet(-1)">&#10094;</button>
        <section class="gallery-slider">
          <div class="gallery-track" :style="{ transform: `translateX(-${currentSet * 100}%)` }">
            <div v-for="(photoSet, setIndex) in sets" :key="setIndex" class="gallery-set">
              <button
                v-for="photo in photoSet"
                :key="photo[0] + photo[1]"
                type="button"
                class="gallery-item"
                @click="openLightbox(photo)"
              >
                <img :src="photo[0]" :alt="photo[1]" class="img-galeria" loading="lazy" decoding="async" />
                <span class="gallery-overlay"><span>{{ photo[1] }}</span></span>
              </button>
            </div>
          </div>
        </section>
        <button type="button" class="sipky" aria-label="Ďalšia sada" @click="changeSet(1)">&#10095;</button>
      </div>
    </section>
  </main>

  <div v-if="activePhoto" class="lightbox is-open" role="dialog" aria-modal="true" @click.self="closeLightbox">
    <button type="button" class="lightbox-close" aria-label="Zavrieť" @click="closeLightbox">✕</button>
    <button type="button" class="lightbox-nav lightbox-prev" aria-label="Predchádzajúca" @click="changePhoto(-1)">&#10094;</button>
    <div class="lightbox-content">
      <div class="lightbox-media">
        <img :src="activePhoto[0]" :alt="activePhoto[1]" :style="{ '--zoom': zoom }" />
      </div>
      <div class="lightbox-caption">{{ activePhoto[1] }}</div>
      <div class="lightbox-toolbar">
        <button type="button" @click="zoom = Math.max(1, zoom - 0.25)">-</button>
        <button type="button" @click="zoom = 1">Reset</button>
        <button type="button" @click="zoom = Math.min(2.5, zoom + 0.25)">+</button>
      </div>
    </div>
    <button type="button" class="lightbox-nav lightbox-next" aria-label="Ďalšia" @click="changePhoto(1)">&#10095;</button>
  </div>

  <FooterSection />
</template>

<style src="../styles/shared.css"></style>
<style scoped src="../styles/galeria.css"></style>
