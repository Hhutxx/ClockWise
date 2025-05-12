<template>
  <div class="catalog-list">
    <h1 class="catalog-title">Каталог товаров</h1>
    <div class="catalog-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { products } from '../composables/products'

</script>

<style scoped lang="scss">
.catalog-list {
  width: 100%;
  background-color: rgba(200, 200, 200, 0.5); 
  padding: 30px 20px 40px; 
  box-sizing: border-box;
  overflow-x: hidden; 
}

.catalog-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 20px 0;

  @media (min-width: 576px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    font-size: 24px;
  }
}

.catalog-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px; 
  justify-content: center;
  padding: 0 15px;
  margin: 0 auto; 
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 767px) {
    gap: 20px; 
    flex-direction: row; 
  }

  @media (max-width: 575px) {
    gap: 10px; 
  }
}
</style>