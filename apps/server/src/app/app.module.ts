// eslint-disable-next-line @nx/enforce-module-boundaries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { baseConfig } from '../../config/connection.config';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { PeopleModule } from './people/people.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
@Module({
  imports: [
    TypeOrmModule.forRoot({ ...baseConfig }),
    CategoriesModule,
    EventsModule,
    PeopleModule,
    UsersModule,
    AuthModule,
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
