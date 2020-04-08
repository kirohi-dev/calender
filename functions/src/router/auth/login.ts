import { Router, Request, Response, NextFunction } from 'express';

import { IRouter } from '@/type/router';
import { Translator } from '@/domain/router/Translator';

import { authContainer } from '@/action/auth/inversify.config';
import TYPE from '@/action/auth/inversify.types';
import IAction from '@/interfaces/Action';

const router = Router();
const translator = new Translator();
const loginAction = authContainer.get<IAction>(TYPE.LoginAction);

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await loginAction.invoke(req, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export const login: IRouter = {
  path: translator.makePath(__filename),
  router,
};
