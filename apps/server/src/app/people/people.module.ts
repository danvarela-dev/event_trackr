import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleEntity } from './people.entity';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleEntity])],
  providers: [PeopleService],
  controllers: [PeopleController],
})
export class PeopleModule {}
