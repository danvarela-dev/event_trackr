import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UsersEntity } from '../../entities/users.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UsersEntity[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UsersEntity | undefined> {
    return await this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: UsersEntity): Promise<UsersEntity> {
    return await this.usersService.createUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updatedUser: Partial<UsersEntity>,
  ): Promise<UsersEntity | undefined> {
    return await this.usersService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}
