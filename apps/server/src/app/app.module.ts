// eslint-disable-next-line @nx/enforce-module-boundaries
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { baseConfig } from '../../config/connection.config';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { AuthGuard } from './guards/auth.guard';
import { PeopleModule } from './modules/people/people.module';
import { UsersModule } from './modules/users/users.module';
import { GendersModule } from './modules/genders/genders.module';
import { EventsModule } from './modules/events/events.module';
import { VaultModule } from './modules/vault/vault.module';
import { FileUploadModule } from './modules/file-upload/file-upload.module';
import { GoogleModule } from './modules/google/google.module';
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
    VaultModule,
    FileUploadModule,
    GoogleModule,
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
