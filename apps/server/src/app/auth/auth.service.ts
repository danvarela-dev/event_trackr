import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
// import { JwtService } from "@nestjs/jwt";
// import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async login(user: string, password: string) {
    const userFound = await this.userService.getUserByUsername(user);
    if (userFound && userFound.password === password) {
      return userFound;
    } else {
      return null;
    }
  }

  // async hashPassword(password: string) {
  //   const saltRounds = 10;
  //   const salt = bcrypt.genSaltSync(saltRounds);
  //
  //   return bcrypt.hash(password, salt);
  // }
  //
  // async comparePasswords(plainTextPassword: string, passwordHash: string) {
  //   return bcrypt.compare(plainTextPassword, passwordHash);
  // }
}
