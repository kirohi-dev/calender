import Router from 'vue-router';
import IAuthService from '~/domain/auth/authService';

declare module 'vue/types/vue' {
  interface Vue {
    $router: Router;
    $auth: IAuthService;
  }
}
