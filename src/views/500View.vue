<template>
  <main class="page">
    <img src="/IMG/maskot/MaskotErrorPagepng.png" alt="" class="error-maskot" aria-hidden="true" />
    <section class="card">
      <div class="badge">CHYBA / 500</div>
      <h1>Chodník je dočasne zatvorený.</h1>
      <p class="lead">Na serveri nastala chyba. Skús to prosím neskôr.</p>
      <div class="actions"><RouterLink class="btn" to="/">Späť na úvod</RouterLink><RouterLink class="btn ghost" to="/kontakt">Kontaktujte nás</RouterLink></div>
    </section>
  </main>
</template>
<style src="../styles/shared.css"></style>
<style scoped src="../styles/error.css"></style>
