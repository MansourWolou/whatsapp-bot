import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/resgister-auth.dto';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  login(loginInput: Prisma.UserCreateInput) {
    throw new Error('Method not implemented.');
  }
  register(registerInput: Prisma.UserCreateInput) {
    throw new Error('Method not implemented.');
  }
}
