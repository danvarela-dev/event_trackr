// eslint-disable-next-line @nx/enforce-module-boundaries
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { baseConfig } from '../../config/connection.config';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { EventsModule } from './events/events.module';
import { GendersModule } from './genders/genders.module';
import { AuthGuard } from './guards/auth.guard';
import { PeopleModule } from './people/people.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GendersModule,
    TypeOrmModule.forRoot({ ...baseConfig }),
    CategoriesModule,
    EventsModule,
    PeopleModule,
    UsersModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
