import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { RolesEntity } from './roles.entity';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  async getAllRoles(): Promise<RolesEntity[]> {
    return await this.rolesService.getAllRoles();
  }

  @Get(':id')
  async getRoleById(id: number): Promise<RolesEntity | undefined> {
    return await this.rolesService.getRoleById(id);
  }
}
