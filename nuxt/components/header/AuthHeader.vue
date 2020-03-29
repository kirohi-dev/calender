<template>
  <div class="auth-header">
    <div class="auth-header__title">カレンダー</div>
    <div class="auth-header__auth" @click="jump">{{ buttonInnerText }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AuthHeader extends Vue {
  @Prop({ type: String, required: true, default: 'login' })
  authType?: 'login' | 'signin';

  get buttonInnerText() {
    if (this.authType === 'login') return '新規登録';
    return 'ログイン';
  }

  jump() {
    if (this.authType === 'login') {
      this.$router.push('/signin/');
      return;
    }
    this.$router.push('/login/');
  }
}
</script>

<style lang="scss" scoped>
.auth-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding-right: 10px;
  padding-left: 20px;
  border-bottom: 1px solid $whitesmoke;

  &__title {
    font-size: 2.2rem;
    color: $dimgray;
  }

  &__auth {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 34px;
    font-size: 1.4rem;
    color: $lightgray;
    cursor: pointer;
    border: 1px solid $whitesmoke;
    border-radius: 5px;
  }
}
</style>
