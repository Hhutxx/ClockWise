<template>
  <div class="product-bg">
    <div v-if="product" class="product-main">
      <div class="product-img-block">
        <img :src="product.imageSrc" :alt="product.title" class="product-img" />
      </div>
      <div class="product-info">
        <div class="product-title">{{ product.title }}</div>
        <div class="product-price">{{ product.price }} Р</div>
        <div class="product-divider"></div>
        <div class="product-code">Код Товара: {{ product.id }}</div>
        <div class="product-btns">
          <button class="sale-button" :disabled="isInCart" @click="handleAddToCart">
            {{ isInCart ? 'В корзине' : 'В корзину' }}
          </button>
          <button class="sale-button" @click="navigateToCatalog">В каталог</button>
        </div>
      </div>
      <div class="product-specs">
        <div class="specs-title">Характеристики:</div>
        <div v-for="(spec, idx) in product.specs" :key="idx" class="specs-row">
          <span class="specs-label">{{ spec[0] }}</span>
          <span class="specs-value">{{ spec[1] }}</span>
        </div>
      </div>
    </div>
    <div v-if="product" class="product-desc">
      <div class="desc-title">Описание:</div>
      <div class="desc-flex">
        <div class="desc-logo-block">
          <img :src="product.logoSrc" alt="logo" class="desc-logo" />
        </div>
        <div class="desc-text">{{ product.description }}</div>
      </div>
    </div>
    <div v-else style="padding: 40px; font-size: 24px; color: #000">Товар не найден</div>
    
    <!-- Модальное окно подтверждения добавления в корзину -->
    <div v-if="showAddedToCartModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Товар добавлен в корзину</h3>
          <button class="modal-close" @click="closeModal">×</button>
        </div>
        <div class="modal-body">
          <p>Товар "{{ product?.title }}" успешно добавлен в корзину</p>
        </div>
        <div class="modal-footer">
          <button class="modal-btn" @click="navigateToCart">Перейти в корзину</button>
          <button class="modal-btn modal-btn-secondary" @click="closeModal">Продолжить покупки</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { products } from '../composables/products'
import { useCart } from '../composables/useCart'

const route = useRoute()
const router = useRouter()
const product = computed(() => products.find(p => p.id === route.params.id))

const { cart, addToCart } = useCart()

const isInCart = computed(() => product.value && cart.value.includes(product.value.id))
const showAddedToCartModal = ref(false)

const handleAddToCart = () => {
  if (product.value && !isInCart.value) {
    addToCart(product.value.id)
    showAddedToCartModal.value = true
  }
}

const closeModal = () => {
  showAddedToCartModal.value = false
}

const navigateToCatalog = () => {
  router.push('/catalog')
}

const navigateToCart = () => {
  router.push('/cart')
}
</script>

<style scoped lang="scss">
.product-bg {
  background-color: rgba(200, 200, 200, 0.5);
  padding: 20px 0;
}

.product-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.5);
  padding: 20px 15px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 992px) {
    flex-direction: row;
    padding: 40px 20px;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    padding: 60px 30px;
    gap: 30px;
  }
}

.product-img-block {
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 90vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 1200px) {
    max-width: 550px;
  }
}

.product-img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.product-info {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 1200px) {
    max-width: 400px;
  }
}

.product-title {
  font-size: clamp(20px, 5vw, 32px);
  font-weight: 400;
  color: #000;
  margin-bottom: 10px;
}

.product-price {
  font-size: clamp(20px, 5vw, 32px);
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
}

.product-divider {
  width: 100%;
  height: 1px;
  background: #000;
  opacity: 0.5;
  margin-bottom: 20px;
}

.product-code {
  font-size: clamp(16px, 4vw, 22px);
  color: #000;
  margin-bottom: 20px;
}

.product-btns {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
}

.sale-button {
  font-size: clamp(14px, 4vw, 18px);
  letter-spacing: 0.02em;
  color: #fff;
  background: #000;
  width: 100%;
  padding: 8px;
  border: none;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    width: 48%;
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #fff;
    color: #000;
    cursor: pointer;
  }
}

.product-specs {
  width: 100%;
  max-width: 350px;
  background: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 450px;
    padding: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 400px;
  }
}

.specs-title {
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 500;
  margin-bottom: 15px;
}

.specs-row {
  display: flex;
  flex-direction: column;
  font-size: clamp(14px, 4vw, 18px);
  margin-bottom: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.specs-label {
  width: 100%;
  color: #000;
  font-weight: 500;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    width: 50%;
  }
}

.specs-value {
  width: 100%;
  color: #000;
  font-weight: 400;

  @media (min-width: 768px) {
    width: 50%;
  }
}

.product-desc {
  margin: 20px auto;
  background: #fff;
  padding: 15px;
  width: 100%;
  max-width: 90vw;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 20px;
    margin: 30px auto;
  }

  @media (min-width: 992px) {
    max-width: 740px;
    margin: 40px auto;
  }

  @media (min-width: 1200px) {
    max-width: 900px;
  }
}

.desc-title {
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 400;
  margin-bottom: 15px;
}

.desc-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.desc-logo-block {
  width: 100%;
  max-width: clamp(100px, 20vw, 180px);
  margin-bottom: 10px;
}

.desc-logo {
  width: 100%;
  height: auto;
}

.desc-text {
  font-size: clamp(14px, 4vw, 18px);
  color: #000;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;

  @media (min-width: 768px) {
    width: 80%;
    max-width: 500px;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;

  h3 {
    margin: 0;
    font-size: clamp(16px, 4vw, 20px);
    font-weight: 500;
  }
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #000;
  }
}

.modal-body {
  padding: 15px;

  p {
    margin: 0;
    font-size: clamp(14px, 4vw, 18px);
  }
}

.modal-footer {
  padding: 15px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
}

.modal-btn {
  padding: 8px 15px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: clamp(14px, 4vw, 16px);

  &:hover {
    background: #333;
  }

  &.modal-btn-secondary {
    background: #fff;
    color: #000;
    border: 1px solid #ddd;

    &:hover {
      background: #f5f5f5;
    }
  }
}
</style>

