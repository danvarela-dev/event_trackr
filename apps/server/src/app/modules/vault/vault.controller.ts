import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VaultService } from './vault.service';
import { Vault } from '@event-trackr/shared';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Vault')
@Controller('vault')
export class VaultController {
  constructor(private readonly vaultService: VaultService) {}

  @Post()
  async create(@Body() vault: Vault) {
    return await this.vaultService.createVault(vault);
  }

  @Get()
  async findAll() {
    return await this.vaultService.getAllVault();
  }

  @Get('categories')
  async findAllCategories() {
    return await this.vaultService.getAllVaultCategories();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.vaultService.findById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() vault: Vault) {
    return await this.vaultService.updateVault(+id, vault);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.vaultService.deleteVault(+id);
  }
}
