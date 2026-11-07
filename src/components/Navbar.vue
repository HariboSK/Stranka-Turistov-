<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const showHiddenNav = ref(false)
const route = useRoute()
const isHome = computed(() => route.path === '/' || route.path === '/domov')

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  showHiddenNav.value = window.scrollY > 250
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="header-ostatne" :class="{ 'header-home': isHome }">
    <div class="header-content">
      <div class="logo-title">
        <RouterLink to="/">
          <img src="/IMG/navbar/logo.webp" alt="Erb turistov" class="logo" />
        </RouterLink>
        <div class="title-name">
          <RouterLink to="/" class="odkaz-klatova">
            <h1>KLÁTOVA NOVÁ VES KLUB SLOVENSKÝCH TURISTOV KOSTRÍN</h1>
          </RouterLink>
        </div>
      </div>
      <nav class="navbar" aria-label="Hlavná navigácia">
        <ul>
          <li class="hideOnMobile"><RouterLink to="/" class="nav-link">Domov</RouterLink></li>
          <li class="hideOnMobile"><RouterLink to="/onas" class="nav-link">O nás</RouterLink></li>
          <li class="hideOnMobile"><RouterLink to="/#akcie" class="nav-link">Akcie</RouterLink></li>
          <li class="hideOnMobile"><RouterLink to="/galeria" class="nav-link">Galéria</RouterLink></li>
          <li class="hideOnMobile"><RouterLink to="/#trasy" class="nav-link">Trasy & Mapy</RouterLink></li>
          <li class="hideOnMobile"><RouterLink to="/kontakt" class="nav-link">Kontakt</RouterLink></li>
          <li class="hideOnMobile"><RouterLink to="/ucet" class="nav-link">Pridaj sa tu</RouterLink></li>
          <li class="menu-button">
            <button type="button" class="hamburger" :class="{ 'is-open': menuOpen }" :aria-expanded="menuOpen" aria-label="Otvoriť menu" @click="menuOpen = !menuOpen">
              <span></span><span></span><span></span>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <nav class="skrytyNav" :class="{ show: showHiddenNav }" aria-label="Rýchla navigácia">
      <RouterLink to="/">
        <img src="/IMG/navbar/logo.webp" alt="Erb turistov" class="logo-skryty" />
      </RouterLink>
      <ul class="menu-skryte">
        <li class="hideOnMobile"><RouterLink to="/" class="nav-link">Domov</RouterLink></li>
        <li class="hideOnMobile"><RouterLink to="/onas" class="nav-link">O nás</RouterLink></li>
        <li class="hideOnMobile"><RouterLink to="/#akcie" class="nav-link">Akcie</RouterLink></li>
        <li class="hideOnMobile"><RouterLink to="/galeria" class="nav-link">Galéria</RouterLink></li>
        <li class="hideOnMobile"><RouterLink to="/#trasy" class="nav-link">Trasy & Mapy</RouterLink></li>
        <li class="hideOnMobile"><RouterLink to="/kontakt" class="nav-link">Kontakt</RouterLink></li>
        <li class="hideOnMobile"><RouterLink to="/ucet" class="nav-link">Pridaj sa tu</RouterLink></li>
        <li class="menu-button">
          <button type="button" class="hamburger" :class="{ 'is-open': menuOpen }" :aria-expanded="menuOpen" aria-label="Otvoriť menu" @click="menuOpen = !menuOpen">
            <span></span><span></span><span></span>
          </button>
        </li>
      </ul>
    </nav>

    <Transition name="menu-panel">
      <nav v-if="menuOpen" class="navbar-side" aria-label="Mobilná navigácia">
        <ul class="sidebar">
          <li><RouterLink to="/" class="nav-side-link" @click="closeMenu">Domov</RouterLink></li>
          <li><RouterLink to="/onas" class="nav-side-link" @click="closeMenu">O nás</RouterLink></li>
          <li><RouterLink to="/#akcie" class="nav-side-link" @click="closeMenu">Akcie</RouterLink></li>
          <li><RouterLink to="/galeria" class="nav-side-link" @click="closeMenu">Galéria</RouterLink></li>
          <li><RouterLink to="/#trasy" class="nav-side-link" @click="closeMenu">Trasy & Mapy</RouterLink></li>
          <li><RouterLink to="/kontakt" class="nav-side-link" @click="closeMenu">Kontakt</RouterLink></li>
          <li><RouterLink to="/ucet" class="nav-side-link" @click="closeMenu">Pridaj sa tu</RouterLink></li>
        </ul>
      </nav>
    </Transition>
  </header>

</template>
