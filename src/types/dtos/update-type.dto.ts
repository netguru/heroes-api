import { ApiPropertyOptional } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('UpdateTypeInput')
export class UpdateTypeDto {
  @IsString()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  name?: string;
}
