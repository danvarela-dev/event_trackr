import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesEntity } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private readonly categoriesEntityRepository: Repository<CategoriesEntity>,
  ) {}

  async getAllCategories(): Promise<CategoriesEntity[]> {
    return await this.categoriesEntityRepository.find();
  }

  async getCategoryById(id: number): Promise<CategoriesEntity | undefined> {
    return await this.categoriesEntityRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createCategory(event: CategoriesEntity): Promise<CategoriesEntity> {
    return await this.categoriesEntityRepository.save(event);
  }

  async updateCategory(
    id: number,
    updatedEvent: Partial<CategoriesEntity>,
  ): Promise<CategoriesEntity | undefined> {
    await this.categoriesEntityRepository.update({ id }, updatedEvent);
    return await this.categoriesEntityRepository.findOne({
      where: {
        id,
      },
    });
  }

  async deleteCategory(id: number): Promise<void> {
    await this.categoriesEntityRepository.delete(id);
  }
}
