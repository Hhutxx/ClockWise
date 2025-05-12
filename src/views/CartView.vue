<template>
  <div class="cart-bg">
    <div class="cart-title">Корзина</div>
    <div class="cart-content">
      <div v-if="cartProducts.length === 0" class="cart-box">
        <div class="cart-empty">Ваша корзина пуста!</div>
      </div>
      <div v-else class="cart-box">
        <CartProductRow isHeader />
        <CartProductRow
          v-for="product in cartProducts"
          :key="product.id"
          :product="product"
          :qty="qtyMap[product.id] || 1"
          @increment="increment(product.id)"
          @decrement="decrement(product.id)"
          @remove="remove(product.id)"
        />
        <div class="cart-total-row">
          <div class="cart-total-label">Всего:</div>
          <div class="cart-total-value">{{ total }} Р</div>
        </div>
      </div>
      <div class="cart-btn-row">
        <button class="cart-btn" @click="goToCatalog">В каталог</button>
        <button v-if="cartProducts.length > 0" class="cart-btn cart-btn-order" @click="showOrderModal = true">Оформить заказ</button>
      </div>
    </div>
    
    <!-- Модальное окно оформления заказа -->
    <div v-if="showOrderModal" class="modal-overlay" @click="showOrderModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Оформление заказа</h3>
          <button class="modal-close" @click="showOrderModal = false">×</button>
        </div>
        <div class="modal-body">
          <p>Заказ успешно оформлен!</p>
          <p>Общая сумма заказа: {{ total }} Р</p>
          <p>Спасибо за покупку в нашем магазине!</p>
        </div>
        <div class="modal-footer">
          <button class="modal-btn" @click="finishOrder">Завершить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, reactive, onMounted, ref } from 'vue'
import { useCart } from '../composables/useCart'
import { products } from '../composables/products'
import CartProductRow from '../components/CartProductRow.vue'

const router = useRouter()
const goToCatalog = () => router.push('/catalog')

const { cart, removeFromCart, clearCart } = useCart()
const qtyMap: Record<string, number> = reactive({})
const showOrderModal = ref(false)

const cartProducts = computed(() => products.filter(p => cart.value.includes(p.id)))

onMounted(() => {
  cartProducts.value.forEach(p => {
    if (!qtyMap[p.id]) qtyMap[p.id] = 1
  })
})

const increment = (id: string) => qtyMap[id]++
const decrement = (id: string) => { if (qtyMap[id] > 1) qtyMap[id]-- }
const remove = (id: string) => { removeFromCart(id); delete qtyMap[id] }

const total = computed(() => {
  let sum = cartProducts.value.reduce((acc, p) => {
    // Если price это строка с пробелами (например "44 290"), извлекаем только числа
    let price = 0
    if (typeof p.price === 'string') {
      // Удаляем все пробелы и парсим как число
      price = parseFloat(p.price.replace(/\s+/g, ''))
    } else {
      price = Number(p.price)
    }
    
    const qty = qtyMap[p.id] || 1
    if (isNaN(price)) return acc
    return acc + price * qty
  }, 0)
  
  // Форматируем с разделителем тысяч (пробел)
  return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
})

const finishOrder = () => {
  clearCart()
  showOrderModal.value = false
  router.push('/catalog')
}
</script>

<style scoped lang="scss">
.cart-bg {
  min-height: 100vh;
  background-color: rgba(200, 200, 200, 0.5); // светло-серый фон с прозрачностью
  padding: 30px 15px;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 50px 30px;
  }
  
  @media (min-width: 992px) {
    padding: 80px 50px;
  }
}

.cart-title {
  font-size: 16px; /* Совпадает с размером заголовка h1 в разделе о нас */
  font-weight: 600; /* То же самое, что и у h1 в разделе о нас */
  color: #000;
  margin-bottom: 20px; /* Снизу отступ, как у заголовков в разделе о нас */
  
  @media (min-width: 576px) {
    font-size: 18px; /* Адаптация для экранов от 576px */
  }

  @media (min-width: 768px) {
    font-size: 20px; /* Адаптация для экранов от 768px */
  }

  @media (min-width: 992px) {
    font-size: 24px; /* Адаптация для экранов от 992px */
  }
}

.cart-content {
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 992px) {
    max-width: 900px;
  }
  
  @media (min-width: 1200px) {
    max-width: 1100px;
  }
}

.cart-box {
  padding: 20px 0;
  width: 100%;
  min-height: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    padding: 30px 0;
    min-height: 250px;
    margin-bottom: 30px;
  }
  
  @media (min-width: 992px) {
    padding: 40px 0;
    min-height: 300px;
    margin-bottom: 40px;
  }
}

.cart-empty {
  font-size: 16px; /* Уменьшено для согласования с авторизацией */
  color: #000;
  margin-left: 20px;
  
  @media (min-width: 768px) {
    font-size: 18px;
    margin-left: 30px;
  }
  
  @media (min-width: 992px) {
    font-size: 20px;
    margin-left: 40px;
  }
}

.cart-total-row {
  display: flex;
  justify-content: flex-end;
  margin: 30px 0 0 0;
  padding: 15px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  
  @media (min-width: 768px) {
    margin: 40px 0 0 0;
    padding: 20px 30px;
  }
  
  @media (min-width: 992px) {
    margin: 50px 0 0 0;
    padding: 25px 40px;
  }
}

.cart-total-label {
  color: #000;
  font-weight: 400;
  font-size: 14px; /* Уменьшено */
  margin-right: 20px;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
  
  @media (min-width: 992px) {
    font-size: 18px;
  }
}

.cart-total-value {
  color: #000;
  font-weight: 700;
  font-size: 14px; /* Уменьшено */
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
  
  @media (min-width: 992px) {
    font-size: 18px;
  }
}

.cart-btn-row {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 20px;
  }
}

.cart-btn {
  padding: 12px 24px; /* Увеличено до стандартных размеров авторизации */
  background: #000;
  color: #fff;
  font-size: 16px; /* Совпадает с размерами в авторизации */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
    min-width: 180px;
    font-size: 16px; /* Совпадает с размерами в авторизации */
    padding: 12px 24px; /* Совпадает с размерами в авторизации */
  }
  
  @media (min-width: 992px) {
    min-width: 200px;
    font-size: 16px; /* Совпадает с размерами в авторизации */
  }
  
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
  
  &.cart-btn-order {
    background: #000;
    font-weight: 700;
  }
}


/* Стили для модального окна */
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
    font-size: 18px;
    font-weight: 500;
    
    @media (min-width: 768px) {
      font-size: 20px;
    }
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
    margin: 8px 0;
    font-size: 14px; /* Уменьшено */
    
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
}

.modal-footer {
  padding: 15px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
}

.modal-btn {
  padding: 8px 15px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px; /* Уменьшено */
  
  @media (min-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
  
  &:hover {
    background: #333;
  }
}

</style> 