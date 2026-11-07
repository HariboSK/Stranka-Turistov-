<script setup>
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <Navbar />

  <main>
    <section class="kontakt-section">
      <div class="container">
        <p class="section-label">05 / SPOJME SA</p>
        <h1 class="kontakt-title">Uvidíme sa<br /><em>na chodníku.</em></h1>
        <p class="kontakt-popis">
          Máte otázky? Chcete sa pripojiť k nám? Napíšte nám a ozveme sa vám.
        </p>

        <div class="kontakt-container">
          <form class="contact-form" id="contactForm" novalidate>
            <div class="form-group">
              <label for="name">Meno</label>
              <input type="text" id="name" name="name" required />
              <small class="error-message" id="nameError"></small>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
              <small class="error-message" id="emailError"></small>
            </div>
            <div class="form-group">
              <label for="phone">Telefón</label>
              <input type="tel" id="phone" name="phone" />
              <small class="error-message" id="phoneError"></small>
            </div>
            <div class="form-group">
              <label for="subject">Predmet</label>
              <select id="subject" name="subject" required>
                <option value="">-- Vyberte --</option>
                <option value="chcem_sem">Chcem sa prihlásiť na zájazd</option>
                <option value="pripojit">Chcem sa pripojiť</option>
                <option value="informacie">Informácie o akciách</option>
                <option value="ina">Iné</option>
              </select>
              <small class="error-message" id="subjectError"></small>
            </div>
            <div class="form-group">
              <label for="message">Správa</label>
              <textarea id="message" name="message" rows="6" required></textarea>
              <small class="error-message" id="messageError"></small>
            </div>
            <div class="form-group checkbox-group">
              <input type="checkbox" id="consent" name="consent" required />
              <label for="consent" class="checkbox-label">Súhlasím so spracovaním mojich osobných údajov</label>
              <small class="error-message" id="consentError"></small>
            </div>
            <button type="submit" class="btn-submit">Poslať správu</button>
          </form>

        </div>
      </div>
    </section>
  </main>

  <FooterSection />
</template>

<style src="../styles/shared.css"></style>
<style scoped src="../styles/kontakt.css"></style>
