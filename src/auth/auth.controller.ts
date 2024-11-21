import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseMessage } from 'src/common/handlers/response-message';

import { GuardUserSignInDto } from './dto/auth/guard-user-signin.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Guard
  @Post('guard-user-signin')
  @ResponseMessage('success')
  guardSignIn(@Body() guardUser: GuardUserSignInDto) {
    return this.authService.guardUserSignIn(guardUser);
  }
}
