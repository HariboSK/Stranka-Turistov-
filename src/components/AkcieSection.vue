<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const now = ref(new Date())

const events = [
  { date: '10.03.2027', 
    month: 'MAR', 
    title: 'Rodinný výlet do Čičmian', 
    category: 'Rodinný výlet', 
    text: 'Ľahká trasa plná dreveníc, príbehov a dobrého vzduchu. Vhodné pre malých aj veľkých turistov.', 
    place: 'Čičmany', 
    time: '08:00', 
    meeting: 'Obecný úrad', 
    entry: 'Vstup voľný', 
    route: 'Ľahká trasa', 
    bring: 'Pevnú obuv, vodu, desiatu a oblečenie podľa počasia.', 
    image: '/IMG/vtacnik.webp', 
    source: 'KST Kostrín', 
    sourceUrl: '#' 
  },

  { date: '05.05.2027', 
    month: 'MÁJ', 
    title: 'Výlet k vodopádu', 
    category: 'Prírodná túra', 
    text: 'Prechádzka k vodopádu s krátkou prestávkou na fotenie a oddych v prírode.', 
    place: 'Lúčanský vodopád', 
    time: '10:00', 
    meeting: 'Parkovisko pri obci', 
    entry: 'Vstup voľný', 
    route: 'Stredne ľahká trasa', 
    image: '/IMG/lake-8305673.jpg', 
    source: 'KST Kostrín', 
    sourceUrl: '#' 
  },

  { date: '20.06.2027', 
    month: 'JÚN', 
    title: 'Túra na Strážov', 
    category: 'Horská túra', 
    text: 'Horský deň s výhľadmi na celý región. Trasa je vhodná pre turistov so základnou kondíciou.', 
    place: 'Zliechov – Strážov', 
    time: '07:30', 
    meeting: 'Železničná stanica Partizánske', 
    entry: 'Členská akcia', 
    route: '12,4 km · stredná', 
    image: '/IMG/Strazovsky_vrch_.jpg', 
    source: 'KST Kostrín', 
    sourceUrl: '#' },
]

const countdown = computed(() => {
  const distance = Math.max(
    new Date('2027-03-10T08:00:00').getTime() - now.value.getTime(),
    0,
  )
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
  }
})

let timer
onMounted(() => {
  timer = window.setInterval(() => {
    now.value = new Date()
  }, 60000)
})

onUnmounted(() => {
  if (timer !== undefined) {
    window.clearInterval(timer)
  }
})

</script>

<template>
    <section id="akcie" class="events section-pad deferred-section">
      <div class="section-heading">
        <div class="section-label">02 / V KALENDÁRI</div>
        <h2>Čo nás čaká</h2>
        <p>Najbližšie dni, keď sa oplatí obuť si topánky.</p>
      </div>
      <article class="featured-event">
        <div class="featured-date"><strong>10</strong><span>MAR<br />2027</span></div>
        <div class="featured-info">
          <p class="eyebrow">NAJBLIŽŠIA AKCIA</p>
          <h3>{{ events[0].title }}</h3>
          <p>{{ events[0].text }}</p>
          <div class="event-meta"><span>◷ {{ events[0].time }}</span><span>⌖ {{ events[0].place }}</span><span>{{ events[0].entry }}</span></div>
          <div class="event-bring"><strong>ČO SI DONIESŤ</strong><span>{{ events[0].bring }}</span></div>
        </div>
        <img class="featured-image" :src="events[0].image" :alt="events[0].title" loading="lazy" />
        <div class="countdown"><span>DO VÝLETU</span><strong>{{ countdown.days }}</strong><small>DNÍ</small><b>{{ String(countdown.hours).padStart(2, '0') }} : {{ String(countdown.minutes).padStart(2, '0') }}</b></div>
      </article>
      <div class="event-list">
        <article v-for="event in events" :key="event.title" class="event-row">
          <img :src="event.image" :alt="event.title" loading="lazy" />
          <div class="event-row-content">
            <time>{{ event.date }} · {{ event.month }}</time>
            <span class="event-category">{{ event.category }}</span>
            <h3>{{ event.title }}</h3>
            <p>{{ event.text }}</p>
            <div class="event-details"><span>⌖ {{ event.place }}</span><span>◷ {{ event.time }}</span><span>{{ event.entry }}</span></div>
            <small class="event-extra-details">
              <span><strong>Stretnutie</strong>{{ event.meeting }}</span>
              <span><strong>Trasa</strong>{{ event.route }}</span>
            </small>
          </div>
          <div class="event-row-actions">
            <a href="#trasy">Pozrieť mapu ↗</a>
            <a href="#kontakt">Pridať do kalendára</a>
            <a class="source-button" :href="event.sourceUrl" target="_blank" rel="noopener">Zdroj fotky ↗</a>
          </div>
        </article>
      </div>
    </section>

</template>