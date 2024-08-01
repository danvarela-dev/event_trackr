import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { createCipheriv, createDecipheriv } from 'crypto';
import * as config from '../../../../config/encryption.config';

@Injectable()
export class EncryptionService {
  private readonly saltRounds = 10;
  private readonly encryptionAlgorithm = 'aes-256-cbc';
  private readonly secretKey = config.secretKey;
  private readonly iv = config.iv;

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return bcrypt.hash(password, salt);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async encryptString(text: string): Promise<string> {
    const cipher = createCipheriv(
      this.encryptionAlgorithm,
      this.secretKey,
      this.iv,
    );
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  async decryptString(text: string): Promise<string> {
    const decipher = createDecipheriv(
      this.encryptionAlgorithm,
      this.secretKey,
      this.iv,
    );
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
