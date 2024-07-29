import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@event-trackr/shared';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: string, pass: string): Promise<User | string> {
    console.log(user);
    const userFound = await this.userService.getUserByUsername(user);

    if (!userFound) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const isPasswordValid = await this.userService.comparePassword(
      pass,
      userFound.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = { sub: userFound.id, username: userFound.username };
    const token = await this.jwtService.signAsync(payload);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = userFound;

    return { ...result, token };
  }
}
