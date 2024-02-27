import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CategoriesEntity } from './categories.entity';
import { CategoriesService } from "./categories.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {

  constructor(
    private categoriesService: CategoriesService
  ) {
  }

  @Get()
  async getAllCategories(): Promise<CategoriesEntity[]> {
    return await this.categoriesService.getAllCategories();
  }

  @Get(':id')
  async getCategoryById(id: number): Promise<CategoriesEntity | undefined> {
    return await this.categoriesService.getCategoryById(id);
  }

  @Post()
  async createCategory(event: CategoriesEntity): Promise<CategoriesEntity> {
    return await this.categoriesService.createCategory(event);
  }

  @Put(':id')
  async updateCategory(id: number, updatedEvent: Partial<CategoriesEntity>): Promise<CategoriesEntity | undefined> {
   return await this.categoriesService.updateCategory(id, updatedEvent);
  }

  @Delete(':id')
  async deleteCategory(id: number): Promise<void> {
    await this.categoriesService.deleteCategory(id);
  }
}
