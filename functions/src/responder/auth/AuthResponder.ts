import { Response } from 'express';
import { injectable } from 'inversify';

import IResponder from '@/interfaces/Responder';
import { AppError, ErrorCode } from '@/domain/Error.service';

@injectable()
export class AuthResponder implements IResponder {
  async response(result: Promise<void>, response: Response) {
    await result.catch((error) => {
      console.error(error);
      throw new AppError(ErrorCode.ERR_UNKNOWN);
    });
    response.send({ success: true });
  }
}
