<script setup>
import { ref } from 'vue'

const udaje = ref({
  kontakt: {
    telefon: '+421 1121 5555',
    email: 'info@gmail.com',
    facebook: 'https://www.facebook.com/KSTKostrin',
    gdpr: 'https://www.example.com/gdpr'
  }
})


</script>

<template>
    <footer class="footer-section deferred-section">
        <div class="section-content">
        <div class="footer-logo"><a href="#domov"><img src="/IMG/navbar/logo2.webp" alt="Erb turistov" class="footer-logo" /></a></div>
        <div class="contact-footer"><h4>Kontaktujte nás</h4><a href="{{ udaje.kontakt.email }}"><img src="/IMG/telefon_icon.png" alt="" /><i> {{udaje.kontakt.telefon}} </i></a><a href="{{udaje.kontakt.telefon}}"><img src="/IMG/emai_icon.png" alt="" /><i> {{udaje.kontakt.email}}</i></a></div>
        <div class="contact-footer"><h4>Sociálne siete</h4><a href="{{ udaje.kontakt.facebook }}" target="_blank" rel="noopener noreferrer" class="social-link1F"><i class="fa-brands fa-facebook"> FACEBOOK</i></a></div>
        <div class="fast-a-footer"><h4>Rýchle odkazy</h4><p><a href="#domov" class="policy-link">Domov</a></p><p><a href="#o-nas" class="policy-link">O nás</a></p><p><a href="#akcie" class="policy-link">Akcie</a></p><p><a href="#galeria" class="policy-link">Galéria</a></p></div>
        <div class="footer-info"><p class="policy-text">© 2026 Klub slovenských turistov Kostrín</p><p class="policy-text"><span class="separator">•</span> Všetky práva vyhradené</p><p class="policy-text"><span class="separator">•</span> Vytvorené s láskou k prírode</p><div class="policy-links"><a href="{{ udaje.kontakt.gdpr}}" class="policy-link">GDPR</a><span class="separator">|</span><a href="#kontakt" class="policy-link">Kontakt</a></div></div>
        </div>
        <div class="created-footer"><h5>Created and designed by JAKUB CHRKAVÝ</h5></div>
    </footer>
</template>