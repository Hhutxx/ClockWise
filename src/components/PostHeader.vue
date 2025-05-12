<template>
    <div class="post-header">
      <video
        class="banner-video"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="../assets/банер.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
  
      <div class="overlay"></div>
  
      <div class="banner-text">
        ClockWise
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Всё чисто
  </script>
  
  <style scoped lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .post-header {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  
    @media (max-width: 768px) {
      height: 26.5vh;  /* Сделаем высоту контейнера на мобилках максимальной */
      padding: 0;     /* Убираем отступы */
    }
  
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }
  
  .banner-video {
    width: 100%;
    height: 100%;
    object-fit: contain; /* На мобильных устройствах видео не будет обрезаться */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  
  .banner-text {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    font-family: serif;
    font-weight: bold;
    font-size: clamp(24px, 6vw, 64px); /* Адаптивный размер текста */
    padding: 0 20px;
    opacity: 0.7;
  }
  </style>
  