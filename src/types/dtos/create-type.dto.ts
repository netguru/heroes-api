import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateTypeDto {
  @IsString()
  @ApiProperty()
  @Field()
  name: string;
}
