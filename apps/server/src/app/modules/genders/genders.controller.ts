import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GendersService } from './genders.service';

@Controller('genderss')
export class GendersController {
  constructor(private readonly gendersService: GendersService) {}

  @Get()
  async findAll() {
    return await this.gendersService.findAll();
  }
}
