<script setup>
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <Navbar />

  <main>
    <section class="hero-section onas-hero">
      <div class="onas-hero-content">
        <div class="onas-hero-copy">
          <p class="section-label">01 / NÁŠ PRÍBEH</p>
          <h1>Ľudia,<br /><em>ktorí vyrážajú.</em></h1>
          <p class="hero-intro">Nie sme len klub. Sme partia, ktorá si vyberá cestu vonku pred cestou na obrazovke.</p>
          <span class="hero-meta">KOSTRÍN · OD 1998</span>
        </div>
        <div class="onas-hero-image">
          <img src="/IMG/javorak_tribeč.jpeg" alt="Turistický chodník v pohorí Tribeč" />
          <span class="image-index">01</span>
        </div>
      </div>
    </section>

    <section class="pod-hero-container">
      <p>
        Objavte krásu slovenských hôr, lesov a dolín spolu s nami. Náš klub spája ľudí, ktorí
        milujú prírodu, pohyb a priateľskú atmosféru.
      </p>
      <p>
        Organizujeme túry, výlety a akcie pre všetky vekové kategórie – od nenáročných prechádzok
        až po dobrodružné horské výstupy.
      </p>
    </section>

    <section class="about-section" id="o-nas">
      <div class="section-content">
        <div class="about-image-wrapper">
          <img src="/IMG/Strazovsky_vrch_.jpg" alt="Strážovský vrch" class="about-image" loading="lazy" />
        </div>
        <div class="about-details">
          <p class="section-label">01 / NÁŠ KLUB</p>
          <h2 class="section-title">Spolu<br /><em>vonku.</em></h2>
          <div class="text-box">
            <p class="text">
              Slovensko je krajinou hôr, lesov a dolín, ktorá každoročne láka tisíce turistov.
              Klub slovenských turistov Kostrín je súčasťou tejto tradície – spájame ľudí, ktorí
              milujú prírodu, pohyb a priateľskú atmosféru. Organizujeme túry a akcie pre všetky
              vekové kategórie, aby sme ukázali krásu Slovenska doma aj zahraničným návštevníkom.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <p class="section-label">NAŠE VÝSLEDKY</p>
      <h2 class="stats-title">Čo sme spolu<br />prešli.</h2>
      <div class="stats-container">
        <div class="stat-card"><strong class="stat-number">15</strong><p class="stat-label">Zdolaných štítov</p></div>
        <div class="stat-card"><strong class="stat-number">20</strong><p class="stat-label">Odznakov</p></div>
        <div class="stat-card"><strong class="stat-number">5</strong><p class="stat-label">Pohárov</p></div>
      </div>
    </section>
  </main>

  <FooterSection />
</template>

<style src="../styles/shared.css"></style>
<style scoped src="../styles/onas.css"></style>
