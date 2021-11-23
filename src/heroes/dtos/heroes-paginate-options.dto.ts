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
  typeId: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => String)
  @Field({ nullable: true })
  fullName: string;

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
