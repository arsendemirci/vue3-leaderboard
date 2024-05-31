<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import data from './data/events.json'

console.log('events data', data)
// const reduce1 = Object.entries(data).reduce((acc, curr) => {
//   const [key, value] = curr

let events = [] // all event dates array

Object.entries(data).forEach(([key1, value1]) => {
  const year = key1
  let month, date
  Object.entries(value1).forEach(([key2, value2]) => {
    month = key2
    Object.entries(value2).forEach(([key3, value3]) => {
      date = key3
      if (!['c', 'dur', 's'].includes(key3)) {
        let dateStr = new Date(year, month - 1, date).toLocaleDateString('tr-TR')
        let c = value3['c']
        let dur = value3['dur']
        let s = value3['s']
        events.push({ date: dateStr, c, dur, s })
      }
    })
  })
})

console.log('topevent', events)
events.sort((a, b) => {
  if (a.c > b.c) {
    return -1
  } else if (a.c === b.c) {
    return a.dur > b.dur ? -1 : 1
  } else {
    return 1
  }
})
console.log('sorted', events)
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
