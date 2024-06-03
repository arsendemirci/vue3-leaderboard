<script setup>
import { IconCodepen, IconGithub, IconLinkedin } from '@icons'
import './Header.scss'
</script>
<template>
  <header>
    <h1>
      Vue 3 Leaderboard
      <a href="https://github.com/arsendemirci/vue-case" target="_blank"><IconGithub /></a>
    </h1>
    <h3>Designed By <b>Arsen Demirci</b></h3>
    <div class="links">
      <a href="https://codepen.io/arsen-demircian" target="_blank"><IconCodepen /></a>
      <a href="https://github.com/arsendemirci" target="_blank"><IconGithub /></a>
      <a href="https://www.linkedin.com/in/arsen-demirci-2a3046a6" target="_blank"
        ><IconLinkedin
      /></a>
    </div>
  </header>
</template>
