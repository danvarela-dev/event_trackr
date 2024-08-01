import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { PeopleEntity } from '../../entities/people.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleEntity])],
  providers: [PeopleService],
  controllers: [PeopleController],
})
export class PeopleModule {}
