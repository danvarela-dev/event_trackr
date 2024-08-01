import { Injectable } from '@nestjs/common';
import { Vault } from '@event-trackr/shared';
import { InjectRepository } from '@nestjs/typeorm';
import { VaultEntity } from '../../entities/vault.entity';
import { Repository } from 'typeorm';
import { EncryptionService } from '../common/encryption.service';

@Injectable()
export class VaultService {
  constructor(
    @InjectRepository(VaultEntity)
    private readonly vaultRepository: Repository<VaultEntity>,
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
    });
  }

  async findById(id: number): Promise<VaultEntity> {
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
    });

    return {
      ...result,
      password: await this.encryptionService.decryptString(result.password),
    };
  }

  async updateVault(id: number, newVault: Vault): Promise<VaultEntity> {
    const vault = await this.vaultRepository.findOne({
      where: {
        id,
      },
    });

    const updatedVault = {
      ...vault,
      ...newVault,
    };

    await this.vaultRepository.update({ id }, updatedVault);

    return updatedVault;
  }

  async deleteVault(id: number) {
    return await this.vaultRepository.delete(id);
  }
}
