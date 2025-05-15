<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const navigateTo = (path: string) => {
  router.push(path)
}

const navigateAndClose = (path: string) => {
  router.push(path)
  menuOpen.value = false
}

const isActive = (path: string) => {
  return router.currentRoute.value.path === path
}
</script>
<template>
  <header class="header">
    <div class="header-container container">

      <div class="logo logo-container" @click="navigateTo('/')">
        <img src="../assets/logo.svg" alt="logo" />
      </div>


      <div class="burger" :class="{ open: menuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>


      <nav :class="['menu', { open: menuOpen }]">

        <ul class="menu-left">
          <li>
            <a @click.prevent="navigateAndClose('/about')" :class="['nav-link', { active: isActive('/about') }]">О нас</a>
          </li>
          <li>
            <a @click.prevent="navigateAndClose('/catalog')"
              :class="['nav-link', { active: isActive('/catalog') }]">Каталог</a>
          </li>
          <li>
            <a @click.prevent="navigateAndClose('/register')"
              :class="['nav-link', { active: isActive('/register') }]">Регистрация</a>
          </li>
          <li>
            <a @click.prevent="navigateAndClose('/login')"
              :class="['nav-link', { active: isActive('/login') }]">Авторизация</a>
          </li>
        </ul>


        <div class="menu-right">
          <div class="cart" @click="navigateAndClose('/profile')">
            <img v-if="router.currentRoute.value.path !== '/profile'" src="../assets/lg2.svg" alt="личный кабинет" />
            <img v-else src="../assets/lg.svg" alt="личный кабинет" />
          </div>
          <div class="cart" @click="navigateAndClose('/cart')">
            <img v-if="router.currentRoute.value.path !== '/cart'" src="../assets/cart.svg" alt="корзина" />
            <img v-else src="../assets/cart copy.svg" alt="корзина" />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>


<style scoped lang="scss">
.header {
  background-color: rgba(237, 221, 221, 0.2);
  padding: 0 20px;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media (min-width: 992px) {
    height: 90px;
  }

  @media (min-width: 1200px) {
    height: 100px;
  }
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  img {
    width: 14px;

    @media (min-width: 576px) {
      width: 18px;
    }

    @media (min-width: 768px) {
      width: 22px;
    }

    @media (min-width: 992px) {
      width: 24px;
    }
  }

  .logo-text {
    font-family: var(--second-family);
    font-size: 14px;

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
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  cursor: pointer;
  z-index: 20;

  span {
    height: 3px;
    width: 100%;
    background: #000;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 768px) {
    display: flex;
  }
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex: 1;

  .menu-left {
    display: flex;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      margin-left: 32px;
    }
  }

  .menu-right {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .nav-link {
    text-decoration: none;
    color: #222;
    font-size: 14px;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      color: #555;
    }

    &:hover::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #555;
      transition: all 0.3s ease;
    }

    @media (min-width: 576px) {
      font-size: 16px;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    &.active {
      color: #333;
      font-weight: bold;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #333;
      }
    }
  }

  .cart img {
    width: 22px;

    @media (min-width: 768px) {
      width: 26px;
    }

    @media (min-width: 992px) {
      width: 30px;
    }
  }

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    background-color: rgba(233, 233, 233, 0.9);
    padding: 1rem;
    border-top: 1px solid #ddd;

    .menu-left {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin-left: 0;
    }

    .menu-right {
      margin-top: 1rem;
    }

    &.open {
      display: flex;
    }
  }
}
</style>
