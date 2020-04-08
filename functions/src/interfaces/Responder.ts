import { Response } from 'express';

export default interface IResponder {
  response(result: any, response: Response): Promise<void>;
}
