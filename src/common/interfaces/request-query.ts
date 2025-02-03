import { ApiProperty } from '@nestjs/swagger';

export class PaginationQuery {
  @ApiProperty({ example: 0 })
  [`page[pageno]`]: number;

  @ApiProperty({ example: 10 })
  [`page[take]`]: number;

  @ApiProperty({ example: 'Alice' })
  [`search[name]`]: string;

  @ApiProperty({ example: 'desc' })
  [`sort[created_at]`]: string;
}
