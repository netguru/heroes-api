import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTypeInput')
export class CreateTypeDto {
  @IsString()
  @ApiProperty()
  @Field()
  name: string;
}
