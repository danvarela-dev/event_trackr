import { Module } from '@nestjs/common';
import { VaultController } from './vault.controller';
import { VaultService } from './vault.service';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaultEntity } from '../../entities/vault.entity';
import { VaultCategoryEntity } from '../../entities/vault-category.entity';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([VaultEntity, VaultCategoryEntity]),
  ],
  controllers: [VaultController],
  providers: [VaultService],
  exports: [],
})
export class VaultModule {}
