import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';
import { RolesEntity } from '../roles/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, RolesEntity])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
