<script setup>
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <Navbar />
  <main class="thanks-wrapper">
    <section class="thanks-card">
      <p class="section-label">SPRÁVA ODOSLANÁ</p>
      <h1>Ďakujeme za vašu správu.</h1>
      <p>Vašu správu sme úspešne prijali. Ozveme sa vám v najbližšom možnom termíne.</p>
      <div class="thanks-actions">
        <RouterLink to="/" class="btn-home">Domov</RouterLink>
        <RouterLink to="/kontakt" class="btn-contact">Kontakt</RouterLink>
      </div>
    </section>
  </main>
  <FooterSection />
</template>

<style src="../styles/shared.css"></style>
<style scoped src="../styles/thanks.css"></style>
