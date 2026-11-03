<script setup>
import { ref } from 'vue'

const activePhoto = ref(0)
const photos = [
  { src: '/IMG/hory_zapad_2.webp', title: 'Západ slnka nad horami' },
  { src: '/IMG/Strazovsky_vrch_.jpg', title: 'Strážovský vrch' },
  { src: '/IMG/kackar-mountains-9655200.jpg', title: 'Horská cesta' },
  { src: '/IMG/lake-8305673.jpg', title: 'Tiché horské jazero' },
]

function showPhoto(direction) {
  activePhoto.value =
    (activePhoto.value + direction + photos.length) % photos.length
}

</script>

<template>

    <section id="galeria" class="gallery-section section-pad deferred-section">
      <div class="section-label">03 / Z NAŠICH CIEST</div>
      <div class="gallery-heading">
        <h2>Miesta,<br /><em>ktoré zostanú.</em></h2>
        <div class="gallery-controls">
          <button type="button" aria-label="Predchádzajúca fotografia" @click="showPhoto(-1)">←</button>
          <span>{{ String(activePhoto + 1).padStart(2, '0') }} / {{ String(photos.length).padStart(2, '0') }}</span>
          <button type="button" aria-label="Ďalšia fotografia" @click="showPhoto(1)">→</button>
        </div>
      </div>
      <figure class="gallery-frame">
        <img :src="photos[activePhoto].src" :alt="photos[activePhoto].title" loading="lazy" />
        <figcaption><span>{{ photos[activePhoto].title }}</span><span>KST KOSTRÍN</span></figcaption>
      </figure>
      <a class="text-link" href="/galeria.html">Pozrieť celú galériu <span>↗</span></a>
    </section>

</template>