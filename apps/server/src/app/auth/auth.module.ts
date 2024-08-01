import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwt_secret } from '../../../config/jwt.config';
import { UsersModule } from '../modules/users/users.module';
import { CommonModule } from '../modules/common/common.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    CommonModule,
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
