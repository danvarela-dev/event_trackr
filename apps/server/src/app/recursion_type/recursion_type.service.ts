import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecursionType } from './recursion_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecursionTypeService {
  constructor(
    @InjectRepository(RecursionType)
    private readonly recursionRepo: Repository<RecursionType>,
  ) {}

  async getRecursionTypes(): Promise<RecursionType[]> {
    return await this.recursionRepo.find();
  }
}
