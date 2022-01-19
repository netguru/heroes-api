import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('DeleteTypeInput')
export class DeleteTypeDto {
  @IsString()
  @ApiProperty()
  @Field(() => ID)
  readonly id: string;
}
