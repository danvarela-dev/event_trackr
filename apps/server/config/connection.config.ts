import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const baseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'vps-96efac4c.vps.ovh.ca',
  port: 3306,
  username: 'kevin.estrada',
  password: 'Emco2023**',
  database: 'event_trackr_dev',
  synchronize: false,
  autoLoadEntities: true,
};
