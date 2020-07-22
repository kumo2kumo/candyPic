<template>
  <div class="container--small">
    <ul class="tab">
      <li class="tab__item" :class="{'tab__item--active' : tab===1}" @click="tab=1">
        Login
      </li>
      <li class="tab__item" :class="{'tab__item--active' : tab===2}" @click="tab=2">
        retgister
      </li>
    </ul>
      <!-- ログインフォーム -->
    <div class="card" v-show="tab===1">
      <form class="form" @submit.prevent="login">
        <label for="login-email">Email</label>
        <input type="text" class="form__item" id="login-email" v-model="loginForm.email">
        <label for="login-password">password</label>
        <input type="password" id="login-password" class="form__item" v-model="loginForm.password">
        <div class="form_button">
          <button type="submit" class="button button--inverse">Login</button>
        </div>
      </form>
    </div>
  <!-- 会員登録フォーム -->
    <div class="card" v-show="tab===2">
      <form class="form" @submit.prevent="register">
        <label for="username">name</label>
        <input type="text" class="form__item" id="username" v-model="registerForm.name">
        <label for="login-email">Email</label>
        <input type="text" class="form__item" id="login-email" v-model="registerForm.email">
        <label for="login-password">password</label>
        <input type="password" id="login-password" class="form__item" v-model="registerForm.password">
        <label for="password-confirmation">password(confirm)</label>
        <input type="password" class="form__item" id="password-confirmation" v-model="registerForm.password_cofirmation">
        <div class="form_button">
          <button type="submit" class="button button--inverse">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tab: 1,
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
        password_cofirmation: ''
      },
    }
  },

  methods: {
    async login(){
      await this.$store.dispatch('auth/login', this.loginForm)
      this.$router.push('/')
    },
    async register(){
      await this.$store.dispatch('auth/register', this.registerForm)
      // back to topPage
      this.$router.push('/')
    }
  }
}
</script>