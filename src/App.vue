<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss">

body {
  background-image: url('@/assets/фон6.jpg'); 
  background-size: cover; 
  background-position: center; 
  background-attachment: fixed; 
  margin: 0; 
  height: 100%; 
}

html, body {
  height: 100%; 
}
</style>
