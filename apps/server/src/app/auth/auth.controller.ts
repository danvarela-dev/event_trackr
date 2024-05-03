import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { Public } from 'apps/server/config/jwt.config';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
  getProfile(@Request() req) {
    return req.user;
  }
}
