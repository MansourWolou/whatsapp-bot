import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
export class LoginUserDto {
  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  readonly password: string;
}
