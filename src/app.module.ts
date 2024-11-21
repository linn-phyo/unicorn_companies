import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

// Database Module
import { PrismaModule } from './prisma/prisma.module';

// Auth Module
import { AuthModule } from './auth/auth.module';

// ERR Handling
import { GlobalExceptionFilter } from 'src/common/handlers/catch-exception';
import { TransformationInterceptor } from 'src/common/handlers/response-success';

// API Core Modules
import { UnicornCompaniesModule } from './unicorn_companies/unicorn_companies.module';


@Module({
  imports: [
    PrismaModule,

    // Auth Modules
    AuthModule,

    // APIs Modules
    UnicornCompaniesModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformationInterceptor,
    },
  ],
})
export class AppModule {}
