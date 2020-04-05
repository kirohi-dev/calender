import { Response, Request } from 'express';

export default class Login {
  invoke(response: Response, request: Request) {
    return response.send(request);
  }
}
