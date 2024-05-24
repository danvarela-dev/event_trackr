import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RecursionTypeService } from './recursion_type.service';
import { RecursionType } from './recursion_type.entity';

@ApiTags('Recursion')
@Controller('recursion')
export class RecursionTypeController {
  constructor(private recursionService: RecursionTypeService) {}

  @Get()
  async getRecursionTypes(): Promise<RecursionType[]> {
    return await this.recursionService.getRecursionTypes();
  }
}
