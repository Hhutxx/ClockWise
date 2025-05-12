<template>
  <div class="product-card" @click="navigateTo(`/catalog/${id}`)">
    <div class="product-image-container">
      <img :src="imageSrc" :alt="title" class="product-image" />
    </div>
    <div class="product-title">{{ title }}</div>
    <div class="product-price">{{ price }} ₽</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
  imageSrc: string
  title: string
  price: string | number
  id: string
}>()

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped lang="scss">
.product-card {
  width: 100%;
  max-width: 240px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 12px;
  margin-bottom: 16px;
  box-sizing: border-box;
  transition: box-shadow 0.3s, transform 0.3s;
  border-radius: 0;  

  @media (max-width: 768px) {
    max-width: 160px; 
  }

  @media (max-width: 576px) {
    max-width: 140px; 
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}

.product-image-container {
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  
  @media (max-width: 768px) {
    height: 200px; 
  }

  @media (max-width: 576px) {
    height: 180px; 
  }
}

.product-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.product-title {
  margin-top: 16px;
  font-size: 16px;
  color: #000;
  text-align: center;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 14px; 
  }

  @media (max-width: 576px) {
    font-size: 12px; 
  }
}

.product-price {
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px; 
  }

  @media (max-width: 576px) {
    font-size: 14px; 
  }
}

.product-brand {
  margin-top: 8px;
  font-size: 14px;
  color: #555;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px; 
  }

  @media (max-width: 576px) {
    font-size: 10px; 
  }
}
</style>