import { Router, Request, Response, NextFunction } from 'express';

import { IRouter } from '@/type/router';
import { Translator } from '@/domain/router/Translator';

import { authContainer } from '@/action/auth/inversify.config';
import TYPE from '@/action/auth/inversify.types';
import IAction from '@/interfaces/Action';

const router = Router();
const translator = new Translator();

const signupAction = authContainer.get<IAction>(TYPE.SignUpAction);

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signupAction.invoke(req, res);
  } catch (error) {
    next(error);
  }
});

export const signup: IRouter = {
  path: translator.makePath(__filename),
  router,
};
