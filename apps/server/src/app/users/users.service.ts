import { Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UsersEntity)
              private readonly usersRepository: Repository<UsersEntity>) {
  }

  async getAllUsers(): Promise<UsersEntity[]> {
    return await this.usersRepository.find();
  }

  async getUserByUsername(username: string): Promise<UsersEntity | undefined> {
    return await this.usersRepository.findOne({
      where: {
        username
      }
    });
  }

  async getUserById(id: number): Promise<UsersEntity | undefined> {
    return await this.usersRepository.findOne({
      where: {
        id
      }
    });
  }

  async createUser(user: UsersEntity): Promise<UsersEntity> {
    return await this.usersRepository.save(user);
  }

  async updateUser(id: number, updatedUser: Partial<UsersEntity>): Promise<UsersEntity | undefined> {
    await this.usersRepository.update({ id }, updatedUser);
    return this.usersRepository.findOne({
      where: {
        id
      }
    });
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
