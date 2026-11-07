<template>
  <main class="page">
    <img src="/IMG/maskot/MaskotErrorPagepng.png" alt="" class="error-maskot" aria-hidden="true" />
    <section class="card">
      <div class="badge">CHYBA / 401</div>
      <h1>Prístup je zamknutý.</h1>
      <p class="lead">Na túto trasu potrebuješ prihlásenie.</p>
      <div class="actions"><RouterLink class="btn" to="/admin">Prihlásiť sa</RouterLink><RouterLink class="btn ghost" to="/">Späť na úvod</RouterLink></div>
    </section>
  </main>
</template>
<style src="../styles/shared.css"></style>
<style scoped src="../styles/error.css"></style>
