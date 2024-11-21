import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { jwtConstants } from './constants';

import { GuardUserSignInDto } from './dto/auth/guard-user-signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  // Guard User
  async guardUserSignIn(guardUser: GuardUserSignInDto) {
    const { username, password } = guardUser;
    if (username && password) {
      const guardUsername = jwtConstants.guardUsername;
      const guardPassword = jwtConstants.guardPassword;

      if (username !== guardUsername || password !== guardPassword) {
        throw new UnauthorizedException('Credential not found');
      }

      const currentTime = Math.floor(Date.now() / 1000);
      const payload = this.createPayload(guardUser, currentTime);

      return {
        userInfo: { id: null, username: username },
        issuedAt: currentTime,
        expiresIn: this.getExpiredTime(payload.exp),
        accessToken: await this.jwtService.signAsync(payload),
      };
    }
  }

  // Common
  private createPayload(user: any, currentTime: number): any {
    return {
      sub: user.id || 1,
      username: user.username,
      iat: currentTime,
      exp: currentTime + jwtConstants.expiresInSecond,
    };
  }

  private getExpiredTime(expirationTime: number): number {
    const currentTime = Math.floor(Date.now() / 1000);
    return expirationTime - currentTime;
  }
}
