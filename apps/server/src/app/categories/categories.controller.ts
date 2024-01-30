import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from './categories.entity';
import { Repository } from 'typeorm';

@Controller('categories')
export class CategoriesController {


}
