import { Request } from 'express';
import { IResponseError, IResponseHash } from '../interfaces/response-format';
import { AES256 } from 'src/utilities/01100110';
import { aesConstants } from 'src/auth/constants';

export const GlobalResponseError: (
  statusCode: number,
  message: string,
  code: string,
  request: Request,
) => IResponseError | IResponseHash = (
  statusCode: number,
  message: string,
  code: string,
  request: Request,
): IResponseError | IResponseHash => {
  const error = {
    statusCode: statusCode,
    message: message || 'Uncatched error message!',
    timestamp: new Date().toISOString(),
    method: request.method,
  };

  return aesConstants.isEncrypted
    ? { result: AES256.encryption(error) }
    : error;
};
