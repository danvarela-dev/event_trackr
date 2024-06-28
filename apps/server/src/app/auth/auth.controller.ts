import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from 'apps/server/config/jwt.config';
import { UsersService } from '../users/users.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Public()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          description: 'The username of the user',
        },
        password: {
          type: 'string',
          description: 'The password of the user',
        },
      },
    },
  })
  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    const { username, password } = credentials;
    return await this.authService.login(username, password);
  }

  @Get('profile')
  async getProfile(@Request() req) {
    const username = req.user.username;
    const user = await this.userService.getUserByUsername(username);
    const { password, ...result } = user;
    return result;
  }
}
