import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/resgister-auth.dto';

@Injectable()
export class AuthService {
  login(loginAuthDto: LoginAuthDto) {
    throw new Error('Method not implemented.');
  }
  register(registerAuthDto: RegisterAuthDto) {
    throw new Error('Method not implemented.');
  }
}
