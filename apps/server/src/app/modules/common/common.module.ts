import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';

@Module({
  imports: [],
  controllers: [],
  providers: [EncryptionService],
  exports: [EncryptionService],
})
export class CommonModule {}
