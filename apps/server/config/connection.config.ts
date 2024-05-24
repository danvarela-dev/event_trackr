import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersEntity } from '../src/app/users/users.entity';
import { CategoriesEntity } from '../src/app/categories/categories.entity';
import { PeopleEntity } from '../src/app/people/people.entity';
import { EventsEntity } from '../src/app/events/events.entity';
import { RecursionType } from '../src/app/recursion_type/recursion_type.entity';

export const baseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'vps-96efac4c.vps.ovh.ca',
  port: 3306,
  username: 'kevin.estrada',
  password: 'Emco2023**',
  database: 'event_trackr',
  entities: [
    UsersEntity,
    CategoriesEntity,
    PeopleEntity,
    EventsEntity,
    RecursionType,
  ],
  synchronize: false,
};
