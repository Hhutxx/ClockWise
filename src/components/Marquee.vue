<template>
  <div class="marquee-container">
    <div class="marquee">
      <div class="marquee-content">
        <img src="../assets/босс.png" alt="Hugo Boss" class="logo-image" />
        <img src="../assets/карт.png" alt="Michael Kors" class="logo-image" />
        <img src="../assets/касио.png" alt="Casio" class="logo-image casio" />
        <img src="../assets/вив.png" alt="Vivienne Westwood" class="logo-image" />
        <img src="../assets/диз.png" alt="Diesel" class="logo-image" />
        <img src="../assets/ролекс.png" alt="Rölex" class="logo-image" />
      </div>
      <div class="marquee-content" aria-hidden="true">
        <img src="../assets/босс.png" alt="Hugo Boss" class="logo-image" />
        <img src="../assets/карт.png" alt="Michael Kors" class="logo-image" />
        <img src="../assets/касио.png" alt="Casio" class="logo-image casio" />
        <img src="../assets/вив.png" alt="Vivienne Westwood" class="logo-image" />
        <img src="../assets/диз.png" alt="Diesel" class="logo-image" />
        <img src="../assets/ролекс.png" alt="Rölex" class="logo-image" />
      </div>
      <div class="marquee-content" aria-hidden="true">
        <img src="../assets/босс.png" alt="Hugo Boss" class="logo-image" />
        <img src="../assets/карт.png" alt="Michael Kors" class="logo-image" />
        <img src="../assets/касио.png" alt="Casio" class="logo-image casio" />
        <img src="../assets/вив.png" alt="Vivienne Westwood" class="logo-image" />
        <img src="../assets/диз.png" alt="Diesel" class="logo-image" />
        <img src="../assets/ролекс.png" alt="Rölex" class="logo-image" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>

<style scoped lang="scss">
.marquee-container {
  width: 100%;
  background-color: rgba(200, 200, 200, 0.5); // светло-серый фон с прозрачностью
  overflow: hidden;
  padding: 30px 0 25px 0;
}

.marquee {
  display: flex;
  width: max-content;
  margin: 0 auto;
}

.marquee-content {
  display: flex;
  align-items: center;
  animation: scroll 40s linear infinite;
}

.logo-image {
  height: 30px;
  margin: 0 20px;
  width: auto;
}

.casio {
  height: 26px;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Адаптивность для экранов до 1600px */
@media (max-width: 1600px) {
  .marquee {
    width: 80%;
  }

  .logo-image {
    height: 26px;
    margin: 0 16px;
  }

  .casio {
    height: 24px;
  }

  .marquee-content {
    animation: scroll 45s linear infinite;
  }
}

/* Адаптивность для экранов до 1200px */
@media (max-width: 1200px) {
  .marquee {
    width: 70%;
  }

  .logo-image {
    height: 24px;
    margin: 0 12px;
  }

  .casio {
    height: 22px;
  }

  .marquee-content {
    animation: scroll 50s linear infinite;
  }
}

/* Адаптивность для экранов до 900px */
@media (max-width: 900px) {
  .marquee {
    width: 90%;
  }

  .logo-image {
    height: 22px;
    margin: 0 10px;
  }

  .casio {
    height: 20px;
  }

  .marquee-content {
    animation: scroll 60s linear infinite;
  }
}

/* Адаптивность для экранов до 600px */
@media (max-width: 600px) {
  .marquee {
    width: 100%;
  }

  .logo-image {
    height: 20px;
    margin: 0 8px;
  }

  .casio {
    height: 18px;
  }

  .marquee-content {
    animation: scroll 70s linear infinite;
  }
}
</style>
