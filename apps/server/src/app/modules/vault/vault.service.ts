import { Injectable } from '@nestjs/common';
import { Vault } from '@event-trackr/shared';
import { InjectRepository } from '@nestjs/typeorm';
import { VaultEntity } from '../../entities/vault.entity';
import { Repository } from 'typeorm';
import { EncryptionService } from '../common/encryption.service';
import { VaultCategoryEntity } from '../../entities/vault-category.entity';

@Injectable()
export class VaultService {
  constructor(
    @InjectRepository(VaultEntity)
    private readonly vaultRepository: Repository<VaultEntity>,
    @InjectRepository(VaultCategoryEntity)
    private readonly vaultCategoryRepository: Repository<VaultCategoryEntity>,
    private readonly encryptionService: EncryptionService,
  ) {}

  async createVault(vault: Vault): Promise<VaultEntity> {
    const newVault = {
      ...vault,
      password: await this.encryptionService.encryptString(vault.password),
    };

    return await this.vaultRepository.save(newVault);
  }

  async getAllVault(): Promise<VaultEntity[]> {
    return await this.vaultRepository.find({
      select: [
        'id',
        'name',
        'username',
        'email',
        'description',
        'uri',
        'created_at',
        'updated_at',
      ],
      relations: ['vaultCategory'],
    });
  }

  async getAllVaultCategories(): Promise<VaultCategoryEntity[]> {
    return await this.vaultCategoryRepository.find();
  }

  async findById(id: number): Promise<VaultEntity | null> {
    const result = await this.vaultRepository.findOne({
      where: {
        id,
      },
      select: [
        'id',
        'name',
        'username',
        'email',
        'description',
        'password',
        'uri',
        'created_at',
        'updated_at',
      ],
      relations: ['vaultCategory'],
    });

    return result
      ? {
          ...result,
          password: await this.encryptionService.decryptString(result.password),
        }
      : null;
  }

  async updateVault(id: number, newVault: Vault): Promise<VaultEntity> {
    const vault = await this.vaultRepository.findOne({
      where: {
        id,
      },
      relations: ['vaultCategory'],
    });

    const updatedVault = {
      ...vault,
      ...newVault,
    } as VaultEntity;

    await this.vaultRepository.update({ id }, updatedVault);

    return updatedVault;
  }

  async deleteVault(id: number) {
    await this.vaultRepository.delete(id);
    return this.vaultRepository.find();
  }
}
