import { Plugin } from '@nuxt/types';
import { AuthService } from '@/domain/auth/authService';

const authPlugin: Plugin = (_, inject) => {
  inject('auth', new AuthService());
};

export default authPlugin;
