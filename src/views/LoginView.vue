<template>
  <div class="login-bg">
    <div class="login-title">Зарегистрированный клиент</div>
    <div class="login-subtitle">Войти в личный кабинет</div>
    <form class="login-form" @submit.prevent="onLogin">
      <div class="login-row">
        <label>E-Mail</label>
        <div class="input-wrapper">
          <input v-model="form.email" type="email" placeholder="E-Mail" />
          <div v-if="errors.email" class="error-message">Заполните пожалуйста поле</div>
        </div>
      </div>
      <div class="login-row">
        <label>Пароль</label>
        <div class="input-wrapper">
          <input v-model="form.password" type="password" placeholder="Пароль" />
          <div v-if="errors.password" class="error-message">Заполните пожалуйста поле</div>
        </div>
      </div>
      <div class="login-error" v-if="error">{{ error }}</div>
      <button class="login-btn" type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  email: '',
  password: ''
})

const error = ref('')
const errors = ref({
  email: false,
  password: false
})

function onLogin() {
  error.value = ''
  Object.keys(errors.value).forEach(key => {
    errors.value[key as keyof typeof errors.value] = false
  })

  let hasEmpty = false
  for (const key in form.value) {
    if (!form.value[key as keyof typeof form.value].trim()) {
      errors.value[key as keyof typeof errors.value] = true
      hasEmpty = true
    }
  }

  if (hasEmpty) return

  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const user = users.find((u: any) => u.email === form.value.email && u.password === form.value.password)
  if (!user) {
    error.value = 'Неверный email или пароль'
    return
  }
  localStorage.setItem('currentUser', JSON.stringify(user))
  router.push('/profile')
}
</script>

<style scoped lang="scss">
.login-bg {
  background-color: rgba(233, 233, 233, 0.5);
  border-radius: 0;  // Убираем скругление
  padding: 20px 15px;  // Уменьшаем отступы для мобильных устройств
  max-width: 400px;
  margin: 40px auto;

  @media (max-width: 576px) {
    padding: 15px 10px;  // Еще меньше отступы для мобильных устройств
    max-width: 100%;
  }
}

.login-title {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;

  @media (min-width: 576px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 14px;  // Уменьшаем размер для мобильных устройств
  }
}

.login-subtitle {
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #000;
  margin-bottom: 24px;

  @media (min-width: 576px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 12px;  // Уменьшаем размер для мобильных устройств
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 12px;  // Уменьшаем расстояние между полями для мобильных устройств

  @media (max-width: 576px) {
    gap: 8px;  // Еще меньше расстояние на мобильных устройствах
  }
}

.login-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.login-row label {
  font-size: 12px;
  color: #000;
  min-width: 120px;

  @media (min-width: 576px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 12px;  // Уменьшаем размер шрифта для мобильных устройств
  }
}

.input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.login-row input {
  font-size: 14px;
  padding: 8px 12px;
  border: 2px solid #888;
  border-radius: 6px;
  background: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #000;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 576px) {
    font-size: 14px;  // Уменьшаем размер шрифта для мобильных устройств
    padding: 8px 10px;  // Немного уменьшаем отступы
  }

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

.login-btn {
  width: 100%;
  max-width: 180px; /* Уменьшаем максимальную ширину кнопки */
  height: 40px; /* Уменьшаем высоту кнопки */
  background: #000;
  color: #fff;
  font-size: 14px; /* Уменьшаем размер шрифта */
  border: none;
  border-radius: 0;
  margin-top: 24px;
  margin-left: auto;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  @media (max-width: 576px) {
    font-size: 14px; /* Размер шрифта для мобильных */
    height: 44px; /* Немного увеличиваем высоту для мобильных, чтобы было комфортно нажимать */
  }

  @media (min-width: 576px) {
    font-size: 16px;
    height: 48px; /* Немного увеличиваем высоту на устройствах с большим экраном */
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

.login-btn:hover {
  background: #fff;
  color: #000;
  border: 1px solid #000;
}

.login-error {
  color: #d00;
  font-size: 12px;

  @media (max-width: 576px) {
    font-size: 14px;  // Уменьшаем размер шрифта для мобильных устройств
  }

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

.error-message {
  font-size: 12px;
  color: #d00;
  margin-top: 4px;

  @media (max-width: 576px) {
    font-size: 14px;  // Уменьшаем размер шрифта для мобильных
  }

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


</style>
