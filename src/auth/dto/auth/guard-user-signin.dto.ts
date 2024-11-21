import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GuardUserSignInDto {
  @IsNotEmpty()
  @IsString()
  @Length(24)
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(32)
  @ApiProperty()
  password: string;
}
