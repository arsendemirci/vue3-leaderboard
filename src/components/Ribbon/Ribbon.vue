<template>
  <div class="ribbon">
    <div :class="[`r${props.rank}`]">{{ props.label }}</div>
  </div>
</template>

<script setup>
import './Ribbon.scss'
const props = defineProps({
  label: {
    type: String,
    default: '',
    required: false
  },
  rank: {
    type: Number,
    default: 0,
    required: false,
    validator(value) {
      // The value must match one of these strings
      return [1, 2, 3].includes(value)
    }
  }
})
</script>
