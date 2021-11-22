import { ApiPropertyOptional } from '@nestjs/swagger';
import { ArgsType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class UpdateTypeDto {
  @IsString()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  name?: string;
}
