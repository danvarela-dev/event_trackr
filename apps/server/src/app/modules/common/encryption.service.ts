import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { createCipheriv, createDecipheriv } from 'crypto';
import * as config from '../../../../config/encryption.config';

@Injectable()
export class EncryptionService {
  private readonly saltRounds = 10;
  private readonly encryptionAlgorithm = 'aes-256-cbc';
  private readonly secretKey = Buffer.from(config.secretKey, 'hex');
  private readonly iv = Buffer.from(config.iv, 'hex');

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return bcrypt.hash(password, salt);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async encryptString(text: string): Promise<string> {
    try {
      const cipher = createCipheriv(
        this.encryptionAlgorithm,
        this.secretKey,
        this.iv,
      );
      let encrypted = cipher.update(text, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      return encrypted;
    } catch (error) {
      throw new Error('Failed to encrypt string');
    }
  }

  async decryptString(encryptedText: string): Promise<string> {
    try {
      const decipher = createDecipheriv(
        this.encryptionAlgorithm,
        this.secretKey,
        this.iv,
      );
      let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (error) {
      throw new Error('Failed to decrypt string');
    }
  }
}
