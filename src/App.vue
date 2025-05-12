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
/* Устанавливаем только фон с изображением для всего приложения */
body {
  background-image: url('@/assets/фон6.jpg'); /* <-- путь к картинке фона */
  background-size: cover; /* Фон будет растянут по всему экрану */
  background-position: center; /* Центрирует изображение */
  background-attachment: fixed; /* Фон будет фиксирован при прокрутке */
  margin: 0; /* Убирает отступы */
  height: 100%; /* Устанавливаем высоту для всего документа */
}

html, body {
  height: 100%; /* Устанавливаем высоту для html и body */
}
</style>
