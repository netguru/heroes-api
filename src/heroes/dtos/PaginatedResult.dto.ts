import { IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResultDto<T> {
  @IsArray()
  @ApiProperty()
  data: T[];

  @IsNumber()
  @ApiProperty()
  totalCount: number;
}
