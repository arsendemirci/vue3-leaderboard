<template>
  <div class="date">
    <div class="date-header">{{ datePart.month }}</div>
    <div class="date-body">
      {{ datePart.day }}
    </div>
    <div class="date-footer">{{ datePart.year }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import './DateCard.scss'
const props = defineProps({
  date: {
    type: String,
    default: '',
    required: true
  }
})

const datePart = computed(() => {
  let date = new Date(props.date)
  return {
    month: date.toLocaleString('default', { month: 'short' }),
    day: date.toLocaleString('default', { day: '2-digit' }),
    weekday: date.toLocaleString('default', { weekday: 'long' }),
    year: date.toLocaleString('default', { year: 'numeric' })
  }
})
</script>
