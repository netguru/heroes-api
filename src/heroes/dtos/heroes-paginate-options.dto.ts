import { ArgsType, Field, ID, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

@ArgsType()
export class HeroesPaginateOptionsDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => String)
  @Field(() => ID, { nullable: true })
  type_id: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => String)
  @Field({ nullable: true })
  name_query: string;

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
