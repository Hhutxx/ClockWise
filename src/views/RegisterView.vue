<template>
  <div class="register-bg">
    <div class="register-title">Регистрация</div>
    <div class="register-sub">
      Если Вы уже зарегистрированы, перейдите на страницу
      <router-link class="register-link" to="/login">авторизация</router-link>
    </div>
    <div class="register-section-title">Основные данные</div>
    <form class="register-form" @submit.prevent="onRegister">
      <div class="register-row">
        <label>Фамилия</label>
        <div class="input-wrapper">
          <input v-model="form.surname" type="text" placeholder="Фамилия" />
          <div v-if="errors.surname" class="error-message">Заполните пожалуйста поле</div>
        </div>
      </div>
      <div class="register-row">
        <label>Имя</label>
        <div class="input-wrapper">
          <input v-model="form.name" type="text" placeholder="Имя" />
          <div v-if="errors.name" class="error-message">Заполните пожалуйста поле</div>
        </div>
      </div>
      <div class="register-row">
        <label>E-Mail</label>
        <div class="input-wrapper">
          <input v-model="form.email" type="email" placeholder="E-Mail" />
          <div v-if="errors.email" class="error-message">Заполните пожалуйста поле</div>
        </div>
      </div>
      <div class="register-row">
        <label>Телефон</label>
        <div class="input-wrapper">
          <input v-model="form.phone" type="tel" placeholder="Телефон" />
          <div v-if="errors.phone" class="error-message">Заполните пожалуйста поле</div>
        </div>
      </div>
      <div class="register-section-title" style="margin-top:40px">Ваш пароль</div>
      <div class="register-row">
        <label>Пароль</label>
        <div class="input-wrapper">
          <input v-model="form.password" type="password" placeholder="Пароль" />
          <div v-if="errors.password" class="error-message">Заполните пожалуйста поле</div>
        </div>
      </div>
      <div class="register-row">
        <label>Подтверждение пароля</label>
        <div class="input-wrapper">
          <input v-model="form.password2" type="password" placeholder="Подтверждение пароля" />
          <div v-if="errors.password2" class="error-message">Заполните пожалуйста поле</div>
        </div>
      </div>
      <div class="register-error" v-if="error">{{ error }}</div>
      <button class="register-btn" type="submit">Продолжить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  surname: '',
  name: '',
  email: '',
  phone: '',
  password: '',
  password2: ''
})

const error = ref('')
const errors = ref({
  surname: false,
  name: false,
  email: false,
  phone: false,
  password: false,
  password2: false
})

function onRegister() {
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

  if (form.value.password !== form.value.password2) {
    error.value = 'Пароли не совпадают'
    return
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]')
  if (users.some((u: any) => u.email === form.value.email)) {
    error.value = 'Пользователь с таким email уже существует'
    return
  }

  users.push({
    surname: form.value.surname,
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
    password: form.value.password
  })
  localStorage.setItem('users', JSON.stringify(users))
  router.push('/login')
}
</script>

<style scoped lang="scss">
.register-bg {
  background-color: rgba(233, 233, 233, 0.5);
  border-radius: 0;
  padding: 30px;  // Убрали верхний и нижний отступ
  margin: auto auto;
}

.register-title {
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
}

.register-sub {
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
}

.register-link {
  font-weight: 600;
  font-size: inherit;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
}

.register-section-title {
  font-size: 14px;
  color: #000;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
  padding-bottom: 6px;

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

.register-form {
  display: flex;
  flex-direction: column;
  gap: 16px;  // Уменьшил расстояние между элементами
}

.register-row {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.register-row label {
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
}

.input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.register-row input {
  font-size: 14px;  // Уменьшил размер шрифта для ввода
  padding: 8px 12px;  // Уменьшил внутренние отступы
  border: 2px solid #888;
  border-radius: 6px;  // Сделал скругление чуть меньше
  background: #fff;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #000;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
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

.register-btn {
  width: 100%;
  max-width: 200px;
  height: 42px;
  background: #000;
  color: #fff;
  font-size: 12px;
  border: none;
  border-radius: 0;
  margin-top: 24px;
  margin-left: auto;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  @media (min-width: 576px) {
    font-size: 14px;
    height: 48px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    height: 52px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
    height: 56px;
  }
}

.register-btn:hover {
  background: #fff;
  color: #000;
  border: 1px solid #000;
}

.register-error {
  color: #d00;
  font-size: 12px;

  @media (min-width: 576px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
}

.error-message {
  font-size: 12px;
  color: #d00;
  margin-top: 4px;

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