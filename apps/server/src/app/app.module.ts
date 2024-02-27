import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { baseConfig } from '../../config/connection.config';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from "./events/events.module";
import { PeopleModule } from "./people/people.module";
import { AuthModule } from "./auth/auth.module";
@Module({
  imports: [
    TypeOrmModule.forRoot({ ...baseConfig }),
    CategoriesModule,
    EventsModule,
    PeopleModule,
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
