<script setup>
import data from './data/events.json'
import { computed } from 'vue'
import { compare, getDatesArrRecursive, getDatesArr } from '@arrayUtils'
import { IconNumber, IconMoney, IconTime } from '@icons'
import './App.scss'
const datesData = computed(() => {
  //const dates = getDatesArr(data)
  const dates = getDatesArrRecursive(data).sort(compare)

  return { top3: dates.slice(0, 3), ranking: dates.slice(3) }
})
const formatDate = (dateStr) => {
  let date = new Date(dateStr)
  return {
    month: date.toLocaleString('default', { month: 'short' }),
    day: date.toLocaleString('default', { day: '2-digit' }),
    weekday: date.toLocaleString('default', { weekday: 'long' }),
    year: date.toLocaleString('default', { year: 'numeric' })
  }
}
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="(e, i) in datesData.top3" :key="e.date">
        <div class="card">
          <!-- <div class="ribbon" :class="[`r${i + 1}`]">
            {{ `${i + 1}${i == 0 ? 'st' : i == 1 ? 'nd' : 'rd'}` }}
          </div> -->
          <div class="ribbon">
            <div :class="[`r${i + 1}`]">{{ i + 1 }}</div>
          </div>
          <div class="event">
            <div><IconNumber /> {{ e.c }}</div>
            <div><IconTime />{{ e.dur }}</div>
            <div><IconMoney />{{ e.s }}</div>
          </div>
          <div class="spacer"></div>
          <div class="date">
            <div class="date-header">{{ formatDate(e.date).month }}</div>
            <div class="date-body">
              {{ formatDate(e.date).day }}
            </div>
            <div class="date-footer">{{ formatDate(e.date).year }}</div>
          </div>
        </div>
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="e in datesData.ranking" :key="e.date">
        <div>
          <strong>{{ e.date }}</strong>
        </div>
        <div>{{ `${e.c} - ${e.dur} - ${e.s}` }}</div>
      </li>
    </ul>
  </div>
</template>
