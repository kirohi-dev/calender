import { injectable } from 'inversify';
import ITranslator from '@/interfaces/Translator';

@injectable()
export class Translator implements ITranslator {
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
