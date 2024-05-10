import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: string, pass: string) {
    const userFound = await this.userService.getUserByUsername(user);

    if (userFound && userFound.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: userFound.id, username: userFound.username };

    const { password, ...result } = userFound;

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
