<template>
  <div class="profile-bg">
    <div class="profile-title">Личный кабинет</div>
    <div v-if="user" class="profile-info">
      <div class="profile-row"><b>Фамилия:</b> {{ user.surname }}</div>
      <div class="profile-row"><b>Имя:</b> {{ user.name }}</div>
      <div class="profile-row"><b>Email:</b> {{ user.email }}</div>
      <div class="profile-row"><b>Телефон:</b> {{ user.phone }}</div>
      <button class="profile-logout" @click="logout">Выйти</button>
    </div>
    <div v-else class="profile-empty">Не авторизован</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref<any>(null)

onMounted(() => {
  const u = localStorage.getItem('currentUser')
  if (u) user.value = JSON.parse(u)
})

function logout() {
  localStorage.removeItem('currentUser')
  router.push('/login')
}
</script>

<style scoped lang="scss">
.profile-bg {
  background-color: rgba(233, 233, 233, 0.5);
  padding: 20px 15px;
  max-width: 400px;
  margin: 40px auto;
  border-radius: 0;  /* Убираем скругление */

  @media (max-width: 576px) {
    padding: 15px 10px;
    max-width: 100%;
  }
}

.profile-title {
  font-size: 16px; /* Устанавливаем размер текста как в авторизации */
  font-weight: 600;
  color: #000;
  margin-bottom: 16px;

  @media (min-width: 576px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    font-size: 22px;
  }
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.profile-row {
  font-size: 16px; /* Устанавливаем размер текста как в авторизации */
  color: #000;

  @media (min-width: 576px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    font-size: 22px;
  }
}

.profile-logout {
  width: 100%;
  max-width: 180px;
  height: 36px;  /* Уменьшаем высоту кнопки для мобильных */
  background: #000;
  color: #fff;
  font-size: 14px; /* Тот же размер шрифта, что и в авторизации */
  border: none;
  margin-top: 20px;
  margin-left: auto;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  @media (max-width: 576px) {
    font-size: 14px;
    height: 36px;  /* Меньше высота кнопки на мобильных */
    padding: 10px;  /* Добавляем отступы для кнопки */
  }

  @media (min-width: 576px) {
    font-size: 16px;
    height: 48px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    height: 48px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
    height: 50px;
  }
}

.profile-logout:hover {
  background: #fff;
  color: #000;
  border: 1px solid #000;
}

.profile-empty {
  font-size: 16px; /* Устанавливаем размер текста как в авторизации */
  color: #888;

  @media (min-width: 576px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    font-size: 22px;
  }
}
</style>