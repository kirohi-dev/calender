<template>
  <div class="auth-form">
    <h1 class="auth-form__title">{{ title }}</h1>
    <div class="auth-form__subtitle">メールアドレス</div>
    <input v-model="email" type="email" class="auth-form__field" />
    <div class="auth-form__subtitle">パスワード</div>
    <input v-model="password" type="password" class="auth-form__field" />
    <div class="auth-form__button" @click="submit">{{ buttonText }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Emit } from 'vue-property-decorator';

@Component
export default class AuthForm extends Vue {
  @Prop({
    type: String,
    required: true,
    default: 'Log in'
  })
  title?: string;

  @Prop({
    type: String,
    required: true,
    default: 'Log in'
  })
  buttonText?: string;

  @PropSync('emailVal', { type: String })
  email?: string;

  @PropSync('passwordVal', { type: String })
  password?: string;

  @Emit()
  submit() {}
}
</script>

<style lang="scss" scoped>
.auth-form {
  width: 100%;
  max-width: 250px;

  &__title {
    margin-bottom: 40px;
    font-size: 2.5rem;
    font-weight: 300;
    color: $darkgray;
    text-align: center;
  }

  &__subtitle {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: $dimgray;
  }

  &__field {
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
    border: 1px solid $whitesmoke;
    border-radius: 3px;
    outline: none;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-size: 1.5rem;
    color: white;
    background-color: #ff7e25;

    &:hover {
      background-color: darken(#ff7e25, 10%);
    }
  }
}
</style>
