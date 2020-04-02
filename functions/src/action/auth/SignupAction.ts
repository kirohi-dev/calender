import { Response, Request } from 'express';
import { SignupResponder } from '@/responder/auth/SignupResponder';

import { Adapter } from '@/adapter/auth/Adapter';
import { AuthService } from '@/domain/auth/authService';

export default class Signup {
  private responder: SignupResponder;
  private adapter: Adapter;
  private service: AuthService;

  constructor() {
    this.responder = new SignupResponder();
    this.adapter = new Adapter();
    this.service = new AuthService();
  }

  invoke(request: Request, response: Response) {
    return this.responder.response(
      this.service.registerUser(this.adapter.signupRequest(request)),
      response
    );
  }
}
