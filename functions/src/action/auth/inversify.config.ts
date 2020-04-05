// configで初めて実態がimportされる
import { Container } from 'inversify';
import TYPE from './inversify.types';

import IAdapter from '@/adapter/auth/Adapter';
import IAuthService from '@/domain/auth/authService';
import IResponder from '@/interfaces/Responder';

import { Adapter } from '@/adapter/auth/Adapter';
import { AuthService } from '@/domain/auth/authService';
import { SignupResponder } from '@/responder/auth/SignupResponder';
import { Signup } from '@/action/auth/SignupAction';

import TYPES from './inversify.types';

const authContainer = new Container();
authContainer.bind<IResponder>(TYPES.IResponder).to(SignupResponder);
authContainer.bind<IAdapter>(TYPE.IAdapter).to(Adapter);
authContainer.bind<IAuthService>(TYPE.IAuthService).to(AuthService);
authContainer.bind<Signup>(TYPE.SignUp).to(Signup);

export { authContainer };
