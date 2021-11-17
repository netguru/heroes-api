import { IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginatedDto<TData> {
  @IsArray()
  data: TData[];

  @IsNumber()
  @ApiProperty()
  totalCount: number;
}
