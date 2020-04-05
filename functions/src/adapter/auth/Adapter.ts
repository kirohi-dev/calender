import { Request } from 'express';
import { injectable } from 'inversify';
import { SignupRequest } from '@/type/adapter';

export default interface IAdapter {
  emailPasswordRequest(request: Request): SignupRequest;
}

@injectable()
export class Adapter {
  emailPasswordRequest(request: Request): SignupRequest {
    if (!(request.body.email && request.body.password)) {
      return {
        collect: false,
      };
    }
    return {
      collect: true,
      value: {
        email: request.body.email,
        password: request.body.password,
      },
    };
  }
}
