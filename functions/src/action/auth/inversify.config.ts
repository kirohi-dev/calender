// configで初めて実態がimportされる
import { Container } from 'inversify';
import TYPE from './inversify.types';

import IAdapter from '@/adapter/auth/Adapter';
import IAuthService from '@/domain/auth/authService';
import IResponder from '@/interfaces/Responder';
import IAction from '@/interfaces/Action';

import { Adapter } from '@/adapter/auth/Adapter';
import { AuthService } from '@/domain/auth/authService';
import { AuthResponder } from '@/responder/auth/AuthResponder';
import { SignupAction } from '@/action/auth/SignupAction';
import { LoginAction } from '@/action/auth/LoginAction';
import { VerifyAction } from '@/action/auth/VerifyAction';

import TYPES from './inversify.types';

const authContainer = new Container();
authContainer.bind<IResponder>(TYPES.Responder).to(AuthResponder);
authContainer.bind<IAdapter>(TYPE.Adapter).to(Adapter);
authContainer.bind<IAuthService>(TYPE.AuthService).to(AuthService);
authContainer.bind<IAction>(TYPE.SignUpAction).to(SignupAction);
authContainer.bind<IAction>(TYPES.LoginAction).to(LoginAction);
authContainer.bind<IAction>(TYPES.VerifyAction).to(VerifyAction);

export { authContainer };
