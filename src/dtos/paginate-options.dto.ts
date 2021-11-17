import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PaginateOptionsDto {
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  first: number;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  skip: number;
}
