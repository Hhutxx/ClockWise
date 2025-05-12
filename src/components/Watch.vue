<template>
  <div class="watch-card">
    <div class="watch-image-container">
      <img :src="imageSrc" :alt="brand + ' watch'" class="watch-image">
    </div>
    <p class="watch-brand">{{ brand }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string
  brand: string
}>()
</script>

<style scoped lang="scss">
.watch-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 30%;
  max-width: 300px;
  min-width: 180px;
  gap: 1rem;
  margin: 0 auto;
}


.watch-image-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}


.watch-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 220px;
}

.watch-brand {
  font-size: clamp(0.8rem, 2vw, 1rem); 
  font-weight: 500;
  text-align: center;
  color: #191919;
}
</style>
