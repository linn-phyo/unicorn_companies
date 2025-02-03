import { Injectable } from "@nestjs/common";
import { CreateUnicornCompanyDto } from "./dto/create-unicorn-company.dto";
import { UpdateUnicornCompanyDto } from "./dto/update-unicorn-company.dto";
import { PrismaService } from 'src/prisma/prisma.service';
import { UnicornCompanies } from '@prisma/client';
import { Helpers } from 'src/utilities/helpers';

@Injectable()
export class UnicornCompaniesService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllByFilter(query: any): Promise<UnicornCompanies[]> {
      return await this.prisma.unicornCompanies.findMany({
        where: query,
        take: 10
      });
    }

    async getByPagination(query: any): Promise<any> {
      const { filterObj, searchKey, searchVal, pageNo, take, sortKey, sortVal } =
        Helpers.queryOption(query, { searchKey: 'company', sortKey: 'date_joined' });
  
      const result = await this.prisma.unicornCompanies.findMany({
        where: { [searchKey]: { contains: searchVal }, ...filterObj },
        orderBy: { [sortKey]: sortVal },
        skip: pageNo * take,
        take: take,
      });
  
      const total = await this.prisma.unicornCompanies.count();
  
      return {
        data: result,
        pageInfo: {
          page: pageNo,
          pageSize: take,
          totalRowCount: total,
        },
      };
    }

    async create(data: CreateUnicornCompanyDto): Promise<UnicornCompanies> {
      return await this.prisma.unicornCompanies.create({
        data: data,
      });
    }
  
    async update(id: string, data: UpdateUnicornCompanyDto): Promise<UnicornCompanies> {
      return await this.prisma.unicornCompanies.update({
        where: { id: id },
        data: data,
      });
    }
  
    async delete(id: string): Promise<UpdateUnicornCompanyDto> {
      return await this.prisma.unicornCompanies.delete({
        where: { id: id },
      });
    }
}