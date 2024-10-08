import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from '../../entities/users.entity';
import { EncryptionService } from '../common/encryption.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    private readonly encryptionService: EncryptionService,
  ) {}

  async getAllUsers(): Promise<UsersEntity[]> {
    return await this.usersRepository.find();
  }

  async getUserByUsername(username: string): Promise<UsersEntity | undefined> {
    return await this.usersRepository.findOne({
      where: {
        username,
      },
      relations: ['role', 'gender'],
    });
  }

  async getUserById(id: number): Promise<UsersEntity | undefined> {
    return await this.usersRepository.findOne({
      where: {
        id,
      },
      relations: ['role', 'gender'],
    });
  }

  async createUser(user: UsersEntity): Promise<UsersEntity> {
    const userExists = await this.usersRepository.findOne({
      where: {
        username: user.username,
      },
    });

    if (userExists) {
      throw new Error('Este nombre de usuario ya existe.');
    }

    user = {
      ...user,
      photo: `https://avatar.iran.liara.run/public/${
        user.gender.id === 1 ? 'boy' : 'girl'
      }?username=[${user.username}]`,
      created_at: new Date(),
      updated_at: new Date(),
      password: await this.encryptionService.hashPassword(user.password),
    };

    return await this.usersRepository.save(user);
  }

  async updateUser(
    id: number,
    updatedUser: Partial<UsersEntity>,
  ): Promise<UsersEntity | undefined> {
    await this.usersRepository.update({ id }, updatedUser);
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
