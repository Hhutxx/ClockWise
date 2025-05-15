<template>
  <div class="about">
    <div class="about-container">
      <div class="about-content">
        <h1>Добро пожаловать в Clockwise </h1>
        <p>Clockwise – это не просто магазин часов, а место, где стиль, точность и качество сочетаются в каждом изделии.
          Мы верим, что часы – это больше, чем просто инструмент для измерения времени. Это аксессуар, который
          подчеркивает ваш стиль, статус и индивидуальность.</p>

        <p>Мы стремимся предложить вам лучшие модели часов от мировых и проверенных брендов. Clockwise помогает вам найти
          идеальный аксессуар, который дополнит ваш образ и прослужит долгие годы.</p>

        <h2>Почему выбирают нас?</h2>
        <ul>
          <li>Широкий ассортимент – от классических механических моделей до современных умных часов.</li>
          <li>Гарантия качества – мы сотрудничаем только с надежными производителями.</li>
          <li>Честные цены – без наценок и скрытых платежей.</li>
          <li>Быстрая доставка – оперативная отправка заказов по всей России и странам СНГ.</li>
          <li>Клиентский сервис – наши специалисты всегда готовы помочь вам с выбором и ответить на любые вопросы.</li>
        </ul>

        <h2>Мы всегда рядом</h2>
        <p>Если у вас есть вопросы или пожелания, свяжитесь с нами:</p>
        <ul class="contacts">
          <li>✉️ Email: support@clockwise-shop.com</li>
          <li>📲 Телефон: +7 (499) 123-45-67</li>
          <li>📍 Адрес: Москва, ул. Временная, д. 10</li>
        </ul>
        <p class="motto">Clockwise – время в ваших руках!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  min-height: 100vh;
  padding: 10px 0;
  background-color: rgba(200, 200, 200, 0.5);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
}

.about-container {
  margin: 0 auto;
  padding: 0 20px;
}

.about-content {
  margin-top: 5px;
  line-height: 1.6;


  h1 {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 600;

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

  h2 {
    font-size: 14px;
    margin: 30px 0 15px;
    font-weight: 500;

    @media (min-width: 576px) {
      font-size: 16px;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 992px) {
      font-size: 20px;
    }
  }


  p {
    margin-bottom: 20px;
    font-size: 12px;

    @media (min-width: 576px) {
      font-size: 14px;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 992px) {
      font-size: 18px;
    }
  }


  ul {
    padding-left: 20px;
    margin-bottom: 20px;

    li {
      margin-bottom: 10px;
      font-size: 12px;

      @media (min-width: 576px) {
        font-size: 14px;
      }

      @media (min-width: 768px) {
        font-size: 16px;
      }

      @media (min-width: 992px) {
        font-size: 18px;
      }
    }
  }

  .contacts {
    list-style-type: none;
    padding-left: 5px;
    font-size: 12px;

    @media (min-width: 576px) {
      font-size: 14px;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 992px) {
      font-size: 18px;
    }
  }

  .motto {
    font-size: 14px;
    font-weight: 500;
    margin-top: 30px;

    @media (min-width: 576px) {
      font-size: 16px;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
}</style>