import 'reflect-metadata';
import { auth } from './auth';

import { IRouter } from '@/type/router';

const baseArray: IRouter[] = [];

export const routers = baseArray.concat(auth);
