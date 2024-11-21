import * as crypto from 'crypto';
import { aesConstants } from 'src/auth/constants';

const algorithm = aesConstants.hashAlgorithm;
const secretKey = aesConstants.hashSecretKey;

export class AES256 {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public static encryption(decryptedData: any) {
    const data = JSON.stringify(decryptedData);
    const cipher = crypto.createCipheriv(algorithm, secretKey, Buffer.alloc(0));
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    return encrypted;
  }

  public static decryption(encryptedData: any) {
    const decipher = crypto.createDecipheriv(
      algorithm,
      secretKey,
      Buffer.alloc(0),
    );
    let decrypted = decipher.update(encryptedData, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
  }
}
