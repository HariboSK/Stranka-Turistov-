<script setup lang="ts">
import { ref } from 'vue'

const obsah = {
    nazov: 'Nie sme len',
    zvyraznene:'turistický klub',
    popisok: 'Spájame ľudí, ktorí radi vyrazia von. Organizujeme túry a výlety pre všetky vekové kategórie, od pokojnej prechádzky až po poriadny horský výstup.',
    prvaStatistika: {
        hodnota: 10,
        popisok: 'rokov na horach'
    },
    druhaStatistika: {
        hodnota: 56,
        popisok: 'navštívených turistických tras'
    },
    tretiaStatistika: {
        hodnota: '∞',
        popisok: 'nových miest na objavenie'
    }
}
</script>

<template>
    <section id="o-nas" class="intro section-pad deferred-section">
      <div class="section-label">01 / O NÁS</div>
      <div class="split-heading">
        <h2>{{obsah.nazov}}<br /><em>{{obsah.zvyraznene}}</em></h2>
        <div>
          <p>{{obsah.popisok}}</p>
          <a class="text-link" href="/o_nas.html">Spoznaj nás bližšie <span>↗</span></a>
        </div>
      </div>
      <div class="stats">
        <div><strong>{{obsah.prvaStatistika.hodnota}}</strong><span>{{obsah.prvaStatistika.popisok}}</span></div>
        <div><strong>{{obsah.druhaStatistika.hodnota}}</strong><span>{{obsah.druhaStatistika.popisok}}</span></div>
        <div><strong>{{obsah.tretiaStatistika.hodnota}}</strong><span>{{obsah.tretiaStatistika.popisok}}</span></div>
      </div>
    </section>
</template>