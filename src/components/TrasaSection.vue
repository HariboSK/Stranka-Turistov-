<script setup>
import { ref } from 'vue'

const mapActive = ref(false)

const trasy = {
  1: {
    nazov: 'Trasa 1',
    zvyraznene: 'Klátova Nová Ves',
    dlzka: '12,4 km',
    cas: '4 h',
    narocnost: 'stredná',
    odkazMapy: 'https://mapy.com/s/furabejuso',
    info: 'Vyber si trasu, ktorá ti sadne. Mapu otvoríš priamo cez Mapy.cz a môžeš si ju uložiť alebo naplánovať cestu.',
    popis:'Táto trasa je ideálna pre tých, ktorí hľadajú stredne náročnú cestu s krásnymi panorámami.'
  },
}

</script>

<template>
    <section id="trasy" class="routes section-pad deferred-section">
      <div>
        <div class="section-label">04 / VYRAZ S NAMI</div>
        <h2>{{ trasy[1].nazov }}<br/><em>{{ trasy[1].zvyraznene }}</em></h2>
        <p class="routes-intro">{{ trasy[1].info }}</p>
        <p class="routes-description">{{ trasy[1].popis }}</p>
        <div class="route-facts"><span><strong>{{ trasy[1].dlzka }}</strong> km</span><span><strong>{{ trasy[1].cas }}</strong> odhad</span><span><strong>{{ trasy[1].narocnost }}</strong> náročnosť</span></div>
        <a class="button button-dark" href="{{ trasy[1].odkazMapy }}" target="_blank" rel="noopener">Otvoriť Mapy.cz <span>↗</span></a>
      </div>
      <div class="route-map">
        <div v-if="!mapActive" class="map-placeholder">
          <img src="/IMG/screenshot maps.png" alt="Náhľad turistickej mapy" loading="lazy" />
          <div class="map-overlay">
            <button type="button" class="map-button" @click="mapActive = true">📍 Zobraziť interaktívnu mapu</button>
            <p class="map-info">Kliknutím načítate mapu a cookies z Mapy.cz</p>
          </div>
        </div>
        <iframe v-else title="Turistická mapa trasy" src="https://mapy.com/s/furabejuso" loading="lazy"></iframe>
      </div>
    </section>
</template>