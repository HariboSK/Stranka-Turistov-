<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeForm = ref('login')
const errorMessage = ref('')
const isSubmitting = ref(false)
const router = useRouter()

async function submitAuth(event) {
  errorMessage.value = ''
  isSubmitting.value = true

  const form = event.currentTarget
  const formData = new FormData(form)
  const endpoint = activeForm.value === 'login' ? '/api/auth/login' : '/api/auth/register'

  try {
    const response = await fetch(endpoint, {
      body: JSON.stringify(Object.fromEntries(formData)),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    })
    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Prihlásenie sa nepodarilo.')
    }

    if (result.role === 'admin') {
      await router.push('/admin/panel')
    } else if (result.role === 'user') {
      await router.push('/user')
    } else {
      throw new Error('Server nevrátil platnú používateľskú rolu.')
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Nastala chyba pri komunikácii so serverom.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="auth-page">
    <section class="auth-card">
      <RouterLink to="/" class="auth-logo-link">
        <img src="/IMG/navbar/logo.webp" alt="Logo turistov" class="auth-logo" />
      </RouterLink>
      <p class="section-label">KLUB SLOVENSKÝCH TURISTOV</p>
      <h1 v-if="activeForm === 'login'">Vitajte<br /><em>späť.</em></h1>
      <h1 v-else>Pridajte sa<br /><em>k nám.</em></h1>

      <form v-if="activeForm === 'login'" class="auth-form" @submit.prevent="submitAuth">
        <div class="auth-field">
          <label for="login-email">Email</label>
          <input id="login-email" name="email" type="email" autocomplete="email" required />
        </div>
        <div class="auth-field">
          <label for="login-password">Heslo</label>
          <input id="login-password" name="password" type="password" autocomplete="current-password" required />
        </div>
        <button type="submit" class="auth-submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Prihlasujem...' : 'Prihlásiť sa' }}
        </button>
      </form>

      <form v-else class="auth-form" @submit.prevent="submitAuth">
        <div class="auth-field">
          <label for="register-name">Meno</label>
          <input id="register-name" name="name" type="text" autocomplete="name" required />
        </div>
        <div class="auth-field">
          <label for="register-email">Email</label>
          <input id="register-email" name="email" type="email" autocomplete="email" required />
        </div>
        <div class="auth-field">
          <label for="register-password">Heslo</label>
          <input id="register-password" name="password" type="password" autocomplete="new-password" required />
        </div>
        <button type="submit" class="auth-submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Vytváram...' : 'Vytvoriť účet' }}
        </button>
      </form>

      <p v-if="errorMessage" class="auth-error" role="alert">{{ errorMessage }}</p>
      <button type="button" class="auth-switch" @click="activeForm = activeForm === 'login' ? 'register' : 'login'">
        {{ activeForm === 'login' ? 'Ešte nemáte účet? Registrácia' : 'Už máte účet? Prihlásenie' }}
      </button>
    </section>
  </main>
</template>

<style src="../styles/shared.css"></style>
<style scoped src="../styles/auth.css"></style>
