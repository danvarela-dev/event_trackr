import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersEntity } from '../src/app/users/users.entity';
import { CategoriesEntity } from '../src/app/categories/categories.entity';
import { PeopleEntity } from '../src/app/people/people.entity';
import { EventsEntity } from '../src/app/events/events.entity';

export const baseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'event_trackr',
  entities : [UsersEntity, CategoriesEntity, PeopleEntity, EventsEntity],
  synchronize: false,
};

