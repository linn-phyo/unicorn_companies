import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    UsePipes,
    Query,
    ValidationPipe,
  } from '@nestjs/common';
import { UnicornCompaniesService } from './unicorn_companies.service';
import { CreateUnicornCompanyDto } from './dto/create-unicorn-company.dto';
import { UpdateUnicornCompanyDto } from './dto/update-unicorn-company.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { ResponseMessage } from 'src/common/handlers/response-message';

import { PaginationQuery } from 'src/common/interfaces/request-query';

@Controller('unicorncompanies')
export class UnicornCompaniesController {
    constructor(private readonly unicorncompaniesService: UnicornCompaniesService) {}
    
    @Get()
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ResponseMessage('success')
    async GetAllByFilter(@Query() query: any) {
        console.log("Load: ", 'company list')
        return this.unicorncompaniesService.getAllByFilter(query);
    }

    @Get('/pages')
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    @ResponseMessage('success')
    async GetByPagination(@Query() query: PaginationQuery) {
        return this.unicorncompaniesService.getByPagination(query);
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    async create(@Body() data: CreateUnicornCompanyDto) {
        return this.unicorncompaniesService.create(data);
    }

    @Patch(':id')
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    async update(@Param('id') id: string, @Body() data: UpdateUnicornCompanyDto) {
        return this.unicorncompaniesService.update(id, data);
    }

    @Delete(':id')
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @ApiBearerAuth('JWT-auth')
    async delete(@Param('id') id: string) {
        return this.unicorncompaniesService.delete(id);
    }
}