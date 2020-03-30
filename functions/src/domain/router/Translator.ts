export class Translator {
  makePath(filename: string) {
    const routerIndex = filename
      .split('/')
      .findIndex((item) => item === 'router');
    const target = filename
      .split('/')
      .slice(routerIndex + 1)
      .join('/');
    return `/${target}`.slice(0, -3);
  }
}
