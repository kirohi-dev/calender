import { Request } from 'express';
import { injectable } from 'inversify';
import { SignupRequest, VerifyRequest } from '@/type/adapter';
import { AppError, ErrorCode } from '@/domain/Error.service';

export default interface IAdapter {
  emailPasswordRequest(request: Request): SignupRequest;
  userRequest(request: Request): VerifyRequest;
}

@injectable()
export class Adapter {
  emailPasswordRequest(request: Request): SignupRequest {
    if (!(request.body.email && request.body.password)) {
      throw new AppError(ErrorCode.ERR_INVALID_INPUT);
    }
    return {
      collect: true,
      value: {
        email: request.body.email,
        password: request.body.password,
      },
    };
  }

  userRequest(request: Request): VerifyRequest {
    if (!request.body.user) throw new AppError(ErrorCode.ERR_INVALID_INPUT);
    return {
      collect: true,
      value: {
        user: request.body.user,
      },
    };
  }
}
