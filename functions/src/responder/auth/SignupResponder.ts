import { Response } from 'express';

export class SignupResponder {
  response(result: any, response: Response) {
    result.then((data: any) => {
      if (data === null) {
        return response.status(400).send({
          success: false,
          message: '送信した値が正しくありません',
        });
      }

      if (!data.success) {
        return response.status(400).send({
          success: false,
          message: data.errorCode,
        });
      }
      const result = data;
      return response.send({
        success: true,
        data: result,
      });
    });
  }
}
