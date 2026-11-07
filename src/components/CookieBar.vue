<script setup>
import { ref } from 'vue'

const cookiesVisible = ref(true)
const cookieSettingsOpen = ref(false)

function acceptCookies() {
  cookiesVisible.value = false
  cookieSettingsOpen.value = false
}

function openCookieSettings() {
  cookieSettingsOpen.value = true
}

</script>


<template>
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
</template>