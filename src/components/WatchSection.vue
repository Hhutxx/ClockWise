<template>
  <section class="watch-section">
    <div class="heading-container">
      <h2 class="heading">Скоро в продаже</h2>
    </div>

    <div class="watches-container">
      <Watch 
        imageSrc="https://raw.githubusercontent.com/Hhutxx/ClockWise/refs/heads/main/src/assets/главная%20страница/новинки%201.png"
        brand="CHANEL"
      />
      <Watch 
        imageSrc="https://raw.githubusercontent.com/Hhutxx/ClockWise/refs/heads/main/src/assets/главная%20страница/новинки%202.png"
        brand="Vivienne Westwood"
      />
      <Watch 
        imageSrc="https://raw.githubusercontent.com/Hhutxx/ClockWise/refs/heads/main/src/assets/главная%20страница/новинки%203.png"
        brand="Cartier"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Watch from './Watch.vue'
</script>

<style scoped lang="scss">
.watch-section {
  width: 100%;
  background-color: rgba(200, 200, 200, 0.5); // светло-серый фон с прозрачностью
  padding: 2vw 3vw;
  box-sizing: border-box;
}

.heading-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1vw;
}

.heading {
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  font-weight: 600;
  color: black;
}

.watches-container {
  display: flex;
  gap: 1.5vw;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.5vw;
}

/* Стиль для каждого элемента */
.watch-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 25%;
  max-width: 200px;
  min-width: 120px;
  gap: 0.8rem;
  margin: 0 auto;
}

/* Контейнер для изображений */
.watch-image-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

/* Изображение */
.watch-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 180px; /* Уменьшаем максимальную ширину изображений */
}

/* Уменьшаем размер текста брендов */
.watch-brand {
  font-size: clamp(0.5rem, 1.2vw, 0.7rem); /* Уменьшаем размер текста для брендов */
  font-weight: 500;
  text-align: center;
  color: #333; /* Цвет бренда */
}

/* Для экранов с максимальной шириной 600px */
@media (max-width: 600px) {
  .watches-container {
    display: flex; /* Оставляем flex для одного ряда */
    justify-content: space-between; /* Размещаем карточки с отступами */
    flex-wrap: nowrap; /* Убираем перенос элементов */
  }

  .watch-card {
    flex: 0 0 30%; /* Устанавливаем карточки в 1 ряд */
    max-width: 100%; /* Задаем максимальную ширину */
  }

  .watch-image {
    max-width: 80px; /* Уменьшаем максимальную ширину изображений */
  }

  .watch-brand {
    font-size: clamp(0.4rem, 3vw, 0.6rem); /* Уменьшаем размер текста на мобильных */
  }
}

/* Для экранов от 600px до 900px */
@media (max-width: 900px) {
  .watches-container {
    gap: 4vw;
  }

  .watch-card {
    flex: 0 0 30%; /* Увеличиваем ширину карточки */
  }

  .watch-brand {
    font-size: clamp(0.5rem, 2vw, 0.7rem); /* Текст бренда меньше на этих устройствах */
  }
}

/* Для экранов от 900px до 1200px */
@media (max-width: 1200px) {
  .watch-card {
    flex: 0 0 22%; /* Уменьшаем карточки */
    max-width: 240px;
  }

  .watches-container {
    gap: 3vw;
  }

  .watch-brand {
    font-size: clamp(0.6rem, 1.8vw, 0.8rem); /* Уменьшаем текст бренда */
  }
}

</style>
