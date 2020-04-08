import { Response } from 'express';

export const ErrorCode = {
  ERR_INVALID_INPUT: 'ERR_INVALID_INPUT',
  ERR_NOT_FOUND: 'ERR_NOT_FOUND',
  ERR_UNKNOWN: 'ERR_UNKNOWN',
  ERR_UNKNOWN_ROUTE: 'ERR_UNKNOWN_ROUTE',
};

export class AppError extends Error {
  constructor(name?: string) {
    super(name);
  }
}

export function errorHandling(err: Error, response: Response) {
  const defaultError = { name: ErrorCode.ERR_UNKNOWN, code: 500 };

  const currentError =
    [
      { name: ErrorCode.ERR_INVALID_INPUT, code: 400 },
      { name: ErrorCode.ERR_NOT_FOUND, code: 404 },
      { name: ErrorCode.ERR_UNKNOWN, code: 500 },
      { name: ErrorCode.ERR_UNKNOWN_ROUTE, code: 404 },
    ].find((item) => item.name === err.message) ?? defaultError;

  response.status(currentError.code).send({
    error: {
      message: currentError.code,
      details: err.message,
    },
  });
}
