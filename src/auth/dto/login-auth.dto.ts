import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @Length(3, 25, {
    message: 'Password has to be at between 3 and 25 characters',
  })
  readonly password: string;
}
