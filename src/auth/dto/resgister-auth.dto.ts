import { IntersectionType } from '@nestjs/mapped-types';

import { IsNotEmpty, IsString } from 'class-validator';
import { LoginUserDto } from './login-auth.dto';

export class RegisterUserDto extends IntersectionType(LoginUserDto) {
  @IsNotEmpty()
  @IsString()
  readonly username: string;
}
