import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@event-trackr/shared';
import { UsersService } from '../modules/users/users.service';
import { EncryptionService } from '../modules/common/encryption.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private encryptionService: EncryptionService,
  ) {}

  async login(user: string, pass: string): Promise<User | string> {
    const userFound = await this.userService.getUserByUsername(user);
    if (!userFound) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const isPasswordValid = await this.encryptionService.comparePassword(
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
