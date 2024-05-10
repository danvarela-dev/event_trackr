import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwt_secret } from '../../../config/jwt.config';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwt_secret,
      signOptions: {
        expiresIn: '7200s',
      },
    }),
  ],
})
export class AuthModule {}
