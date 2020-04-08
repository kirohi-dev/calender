import { Request, Response } from 'express';

export default interface IActions {
  invoke(request: Request, response: Response): void;
}
