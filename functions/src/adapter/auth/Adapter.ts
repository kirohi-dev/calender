import { Request } from 'express';
import { SignupRequest } from '@/type/adapter';

export class Adapter {
  signupRequest(request: Request): SignupRequest {
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
