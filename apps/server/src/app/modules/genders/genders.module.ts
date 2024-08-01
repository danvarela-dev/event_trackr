import { Module } from '@nestjs/common';
import { GendersController } from './genders.controller';
import { GendersService } from './genders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GendersEntity } from '../../entities/genders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GendersEntity])],
  controllers: [GendersController],
  providers: [GendersService],
  exports: [],
})
export class GendersModule {}
