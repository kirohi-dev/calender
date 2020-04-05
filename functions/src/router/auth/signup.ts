import { Router, Request, Response } from 'express';

import { IRouter } from '@/type/router';
import { Translator } from '@/domain/router/Translator';

import { Signup } from '@/action/auth/SignupAction';
import { authContainer } from '@/action/auth/inversify.config';
import TYPE from '@/action/auth/inversify.types';

const router = Router();
const translator = new Translator();

const signupAction = authContainer.get<Signup>(TYPE.SignUp);

router.post('/', (req: Request, res: Response) => {
  signupAction.invoke(req, res);
});

export const signup: IRouter = {
  path: translator.makePath(__filename),
  router,
};
