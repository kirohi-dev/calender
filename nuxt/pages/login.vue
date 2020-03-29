<template>
  <div class="login">
    <auth-header auth-type="login" />
    <div class="login__form">
      <auth-form
        auth-type="login"
        :email-val.sync="email"
        :password-val.sync="password"
        @submit="submit"
      />
    </div>
    <div>{{ email }}</div>
    <div>{{ password }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import AuthHeader from '@/components/header/AuthHeader.vue';
import AuthForm from '@/components/AuthForm.vue';

@Component({
  components: {
    AuthHeader,
    AuthForm
  }
})
export default class Login extends Vue {
  email: string = '';
  password: string = '';

  submit() {
    this.$auth.loginUser(this.email, this.password);
  }
}
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 64px);
  }
}
</style>
