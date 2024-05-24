import { Module } from '@nestjs/common';
import { RecursionTypeController } from './recursion_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecursionTypeService } from './recursion_type.service';
import { RecursionType } from './recursion_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecursionType])],
  controllers: [RecursionTypeController],
  providers: [RecursionTypeService],
})
export class RecursionTypeModule {}
