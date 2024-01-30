import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const baseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'event_trackr',
  entities : [],
  synchronize: false,
};

