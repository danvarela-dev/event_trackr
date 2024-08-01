import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesEntity } from '../../entities/roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RolesEntity)
    private readonly rolesRepository: Repository<RolesEntity>,
  ) {}

  async getAllRoles(): Promise<RolesEntity[]> {
    return await this.rolesRepository.find();
  }

  async getRoleById(id: number): Promise<RolesEntity | undefined> {
    return await this.rolesRepository.findOne({
      where: {
        id,
      },
    });
  }
}
