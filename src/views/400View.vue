<template>
  <main class="page">
    <img src="/IMG/maskot/MaskotErrorPagepng.png" alt="" class="error-maskot" aria-hidden="true" />
    <section class="card">
      <div class="badge">CHYBA / 400</div>
      <h1>Táto požiadavka nesedí.</h1>
      <p class="lead">Údaje sa nepodarilo spracovať. Skontroluj ich a skús to znova.</p>
      <div class="actions"><RouterLink class="btn" to="/">Späť na úvod</RouterLink><RouterLink class="btn ghost" to="/kontakt">Kontaktuj nás</RouterLink></div>
    </section>
  </main>
</template>
<style src="../styles/shared.css"></style>
<style scoped src="../styles/error.css"></style>
