import { Router, Request, Response } from 'express';

import { IRouter } from '@/type/router';
import { Translator } from '@/domain/router/Translator';
import SignupAction from '@/action/auth/SignupAction';

const router = Router();
const translator = new Translator();
const signupAction = new SignupAction();

router.post('/', (req: Request, res: Response) => {
  signupAction.invoke(req, res);
});

export const signup: IRouter = {
  path: translator.makePath(__filename),
  router,
};
