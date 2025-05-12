<template>
  <div v-if="isHeader" class="cart-row-header">
    <div class="cart-row-header-qty">Количество</div>
    <div class="cart-row-header-price">Итого</div>
    <div class="cart-row-header-close"></div>
  </div>
  <div v-else class="cart-row">
    <img :src="product?.imageSrc" :alt="product?.title" class="cart-row-img" />
    <div class="cart-row-title">{{ product?.title }}</div>
    <div class="cart-row-qty-block">
      <button class="cart-row-qty-btn cart-row-minus" @click="$emit('decrement')">-</button>
      <span class="cart-row-qty">{{ qty ?? 1 }}</span>
      <button class="cart-row-qty-btn cart-row-plus" @click="$emit('increment')">+</button>
    </div>
    <div class="cart-row-price">{{ formatPrice(product?.price, qty ?? 1) }} Р</div>
    <button class="cart-row-remove" @click="$emit('remove')">
      <svg width="14" height="14" viewBox="0 0 14 14"><line x1="0" y1="0" x2="14" y2="14" stroke="rgba(0,0,0,0.5)" stroke-width="2"/><line x1="14" y1="0" x2="0" y2="14" stroke="rgba(0,0,0,0.5)" stroke-width="2"/></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product?: { id: string, title: string, imageSrc: string, price: number|string },
  qty?: number,
  isHeader?: boolean
}>()
defineEmits(['increment', 'decrement', 'remove'])

function formatPrice(price: number|string|undefined, qty: number|undefined): string {
  // Если price это строка с пробелами (например "44 290"), извлекаем только числа
  let p = 0
  if (typeof price === 'string') {
    // Удаляем все пробелы и парсим как число
    p = parseFloat(price.replace(/\s+/g, ''))
  } else {
    p = Number(price)
  }

  const q = Number(qty)
  if (isNaN(p) || isNaN(q)) return '0'
  
  // Форматируем с разделителем тысяч (пробел)
  return (p * q).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
</script>

<style scoped lang="scss">
.cart-row-header {
  display: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 20px 10px 20px;
  
  @media (min-width: 768px) {
    display: flex;
    padding: 0 30px 15px 30px;
  }
}

.cart-row-header-qty {
  margin-left: auto;
  font-size: 16px;
  
  @media (min-width: 992px) {
    font-size: 18px;
  }
}

.cart-row-header-price {
  margin-left: 40px;
  font-size: 16px;
  width: 120px;
  text-align: center;
  
  @media (min-width: 992px) {
    font-size: 18px;
    width: 150px;
    margin-left: 60px;
  }
}

.cart-row-header-close {
  width: 30px;
  
  @media (min-width: 992px) {
    width: 40px;
  }
}

.cart-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    padding: 20px 30px;
  }
}

.cart-row-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
  
  @media (min-width: 992px) {
    width: 100px;
    height: 100px;
  }
}

.cart-row-title {
  flex: 1;
  font-size: 14px;
  padding: 0 10px;
  
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 0 20px;
  }
  
  @media (min-width: 992px) {
    font-size: 18px;
  }
}

.cart-row-qty-block {
  display: flex;
  align-items: center;
  margin-left: auto;
  
  @media (min-width: 768px) {
    margin-left: 0;
  }
}

.cart-row-qty-btn {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 14px;
  cursor: pointer;
  
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
  
  @media (min-width: 992px) {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
}

.cart-row-qty {
  width: 30px;
  text-align: center;
  font-size: 16px;
  
  @media (min-width: 768px) {
    width: 40px;
    font-size: 18px;
  }
}

.cart-row-price {
  width: 100px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin: 10px 0 0 0;
  
  @media (min-width: 768px) {
    width: 120px;
    margin: 0 0 0 40px;
  }
  
  @media (min-width: 992px) {
    width: 150px;
    font-size: 18px;
    margin: 0 0 0 60px;
  }
}

.cart-row-remove {
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  opacity: 0.6;
  position: absolute;
  top: 15px;
  right: 15px;
  
  @media (min-width: 768px) {
    position: static;
    margin-left: 10px;
    opacity: 0.4;
  }
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 14px;
    height: 14px;
    
    @media (min-width: 992px) {
      width: 16px;
      height: 16px;
    }
  }
}
</style> 