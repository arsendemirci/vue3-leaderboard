<script setup>
import data from './data/events.json'
import { computed, ref } from 'vue'
import { compare, getDatesArrRecursive, getDatesArr } from '@arrayUtils'

import { DateCard, Ribbon, DataBar, Header } from '@components'
import './App.scss'
const overflow = ref(false)

const datesData = computed(() => {
  //const dates = getDatesArr(data).sort(compare)

  //Alternatively non-recursive getDatesArr(data) can be used the output is the same
  const dates = getDatesArrRecursive(data).sort(compare)

  return { top3: dates.slice(0, 3), ranking: dates.slice(3) }
})
setTimeout(() => {
  overflow.value = true
}, 2500)
const getDelay = (i) => {
  if (i === 0) {
    return `${0.65}s`
  } else if (i < 20) {
    return `${0.65 + i * 0.11}s`
  } else {
    /* list is big and loading fast so, 
    this speeding up the animation of remaining elements after visible area finished animating*/
    return `${0.8 + i * 0.015}s`
  }
}
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <div class="container-top">
        <h2>Top 3</h2>
        <hr />
        <ul>
          <li v-for="(e, i) in datesData.top3" :key="e.date" :class="[`rank${i + 1}`]">
            <div class="card card-top">
              <Ribbon :label="`${i + 1}`" :rank="i + 1" />
              <DataBar :eventsData="e" type="footer" />
              <div class="spacer"></div>
              <DateCard :date="e.date" />
            </div>
          </li>
        </ul>
      </div>

      <div class="container-rankings">
        <h2>Rankings</h2>
        <hr />
        <div class="container-scroll" :class="[overflow ? 'overflow' : '']">
          <ul>
            <li
              v-for="(e, i) in datesData.ranking"
              :key="e.date"
              :style="{ 'animation-delay': getDelay(i) }"
            >
              <div class="card card-rank">
                <div class="card-no">{{ i + 4 }}</div>
                <DataBar :eventsData="e" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
