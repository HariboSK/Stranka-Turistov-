<template>
  <main class="page">
    <section class="card">
      <div class="badge">CHYBA / 404</div>
      <h1>Táto trasa neexistuje.</h1>
      <p class="lead">Odkaz je nesprávny alebo bola stránka presunutá. Vráť sa na chodník a skús to znova.</p>
      <div class="actions"><RouterLink class="btn" to="/">Späť na úvod</RouterLink><RouterLink class="btn ghost" to="/kontakt">Nahlásiť problém</RouterLink></div>
    </section>
  </main>
</template>
<style src="../styles/shared.css"></style>
<style scoped src="../styles/error.css"></style>
