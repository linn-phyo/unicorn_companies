import { ApiProperty } from '@nestjs/swagger'
import {
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    Length,
  } from 'class-validator';


export class CreateUnicornCompanyDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(1, 225)
    company: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(1, 10)
    valuation: string;
  
    @ApiProperty()
    @IsOptional()
    date_joined?: Date;

    @ApiProperty()
    @IsOptional()
    @IsUrl()
    @Length(1, 125)
    industry?: string;

    @ApiProperty()
    @IsOptional()
    @IsUrl()
    @Length(1, 50)
    city?: string;

    @ApiProperty()
    @IsOptional()
    @IsUrl()
    @Length(1, 50)
    country?: string;

    @ApiProperty()
    @IsOptional()
    @IsUrl()
    @Length(1, 100)
    continent?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    year_founded?: number;

    @ApiProperty()
    @IsOptional()
    @Length(1, 10)
    funding?: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 225)
    select_investors?: string;
  
  }