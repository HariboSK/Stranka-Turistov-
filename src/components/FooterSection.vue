<script setup>
const telefon = '+421 1121 5555'
const email = 'info@gmail.com'
const facebook = 'https://www.facebook.com/KSTKostrin'
</script>

<template>
    <div class="wave-top">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#0b2818" fill-opacity="1" d="M0,160L40,170C80,180,160,200,240,192C320,184,400,148,480,133.3C560,119,640,133,720,144C800,155,880,165,960,176C1040,187,1120,197,1200,186.7C1280,176,1360,144,1440,112L1440,320L0,320Z"></path>
      </svg>
    </div>

    <footer class="footer-section">
        <div class="section-content">
        <div class="footer-logo"><a href="/"><img src="/IMG/navbar/logo2.webp" alt="Erb turistov" class="footer-logo" /></a></div>
        <div class="contact-footer"><h4>Kontaktujte nás</h4><a :href="`tel:${telefon.replaceAll(' ', '')}`"><img src="/IMG/telefon_icon.png" alt="" /><i>{{ telefon }}</i></a><a :href="`mailto:${email}`"><img src="/IMG/emai_icon.png" alt="" /><i>{{ email }}</i></a></div>
        <div class="contact-footer"><h4>Sociálne siete</h4><a :href="facebook" target="_blank" rel="noopener noreferrer" class="social-link1F">FACEBOOK</a></div>
        <div class="fast-a-footer"><h4>Rýchle odkazy</h4><p><a href="/" class="policy-link">Domov</a></p><p><a href="/onas" class="policy-link">O nás</a></p><p><a href="/#akcie" class="policy-link">Akcie</a></p><p><a href="/galeria" class="policy-link">Galéria</a></p></div>
        <div class="footer-info"><p class="policy-text">© 2026 Klub slovenských turistov Kostrín</p><p class="policy-text"><span class="separator">•</span> Všetky práva vyhradené</p><p class="policy-text"><span class="separator">•</span> Vytvorené s láskou k prírode</p><div class="policy-links"><a href="#" class="policy-link">GDPR</a><span class="separator">|</span><a href="/kontakt" class="policy-link">Kontakt</a></div></div>
        </div>
        <div class="created-footer"><h5>Created and designed by JAKUB CHRKAVÝ</h5></div>
    </footer>
</template>