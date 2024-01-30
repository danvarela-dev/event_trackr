import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesEntity } from './categories.entity';

@Module({
  controllers: [CategoriesController],
  imports: [TypeOrmModule.forFeature([CategoriesEntity])]
})
export class CategoriesModule {}
