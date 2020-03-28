import { Plugin } from '@nuxt/types';

import { AuthService } from '@/domain/auth/authService';

declare module '@nuxt/types' {
  interface Context {
    $auth: AuthService;
  }
}

const authService = new AuthService();

const auth: Plugin = (context) => {
  context.$auth = authService;
};

export default auth;
