import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GendersEntity } from './genders.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GendersService {
  constructor(
    @InjectRepository(GendersEntity)
    private genderRepository: Repository<GendersEntity>,
  ) {}

  @Get('genders')
  async findAll(): Promise<GendersEntity[]> {
    return await this.genderRepository.find();
  }
}
