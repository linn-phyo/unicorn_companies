import { Module } from '@nestjs/common';
import { UnicornCompaniesService } from './unicorn_companies.service';
import { UnicornCompaniesController } from './unicorn_companies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UnicornCompaniesController],
  providers: [UnicornCompaniesService],
})
export class UnicornCompaniesModule {}
