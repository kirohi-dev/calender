import { Middleware } from '@nuxt/types';

const redirectTrailingSlash: Middleware = (context) => {
  if (context.route.path.slice(-1) !== '/') {
    context.redirect(301, context.route.path + '/');
  }
};

export default redirectTrailingSlash;
