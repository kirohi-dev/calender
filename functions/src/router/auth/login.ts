import { Router, Request, Response } from 'express';

import { IRouter } from '@/type/router';
import { Translator } from '@/domain/router/Translator';

const router = Router();
const translator = new Translator();

router.post('/', (_: Request, res: Response) => {});

export const login: IRouter = {
  path: translator.makePath(__filename),
  router,
};
