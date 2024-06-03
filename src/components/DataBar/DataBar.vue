<script setup>
import { computed } from 'vue'
import { IconNumber, IconMoney, IconTime, IconCalendar } from '@icons'
import './DataBar.scss'
const props = defineProps({
  eventsData: {
    type: Object,
    default: () => ({ c: 1, dur: 1, s: 1 }),
    required: true
  },
  type: {
    type: String,
    default: 'normal',
    validator: (value) => {
      return ['footer', 'normal'].includes(value)
    }
  }
})

const { date, c, dur, s } = props.eventsData
const comp = computed(() => {
  return { isNormal: props.type === 'normal', isFooter: props.type === 'footer' }
})
</script>
<template>
  <div class="data-bar" :class="[`${comp.isNormal ? 'normal' : comp.isFooter ? 'footer' : ''}`]">
    <div v-if="comp.isNormal"><IconCalendar /> {{ date }}</div>
    <div><IconNumber /> {{ c }}</div>
    <div><IconTime />{{ dur }}</div>
    <div><IconMoney />{{ s }}</div>
  </div>
</template>
