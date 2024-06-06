<template>
  <div class="title-wrap">
    <h2>{{ props.title }}</h2>
    <hr />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true
  },
  marginBottom: {
    type: Number,
    default: 10,
    required: false
  }
})

const marginBottom = computed(() => {
  return `${props.marginBottom}px`
})
</script>
<style lang="scss" scoped>
.title-wrap {
  opacity: 0;
  animation: appear-top 0.6s ease-out forwards;
  animation-delay: 1.8s;
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  hr {
    margin-bottom: v-bind(marginBottom);
  }
}
</style>
