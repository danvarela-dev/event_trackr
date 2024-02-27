import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
}
