import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

@ArgsType()
export class PaginateOptionsDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => Number)
  @Field(() => Int, { nullable: true })
  skip: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => Number)
  @Field(() => Int, { nullable: true })
  first: number;
}
