import { Response, Request } from 'express';
import { injectable, inject } from 'inversify';

import IAdapter from '@/adapter/auth/Adapter';
import IAuthService from '@/domain/auth/authService';
import IResponder from '@/interfaces/Responder';
import IAction from '@/interfaces/Action';

import TYPE from './inversify.types';

@injectable()
export class SignupAction implements IAction {
  private responder: IResponder;
  private adapter: IAdapter;
  private service: IAuthService;

  constructor(
    @inject(TYPE.Responder) responder: IResponder,
    @inject(TYPE.Adapter) adapter: IAdapter,
    @inject(TYPE.AuthService) service: IAuthService
  ) {
    this.responder = responder;
    this.adapter = adapter;
    this.service = service;
  }

  invoke(request: Request, response: Response) {
    return this.responder.response(
      this.service.registerUser(this.adapter.emailPasswordRequest(request)),
      response
    );
  }
}
