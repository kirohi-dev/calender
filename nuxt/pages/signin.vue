<template>
  <div class="sign">
    <auth-header auth-type="signin" />
    <div class="sign__form">
      <auth-form
        auth-type="signin"
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
export default class Signin extends Vue {
  email: string = '';
  password: string = '';

  async submit() {
    const response = await this.$auth.registerUser(this.email, this.password);
    console.log(response.user);
    if (response.user) {
      await this.$auth.sendEmailVerification(response.user);
    }
  }
}
</script>

<style lang="scss" scoped>
.sign {
  &__form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 64px);
  }
}
</style>
