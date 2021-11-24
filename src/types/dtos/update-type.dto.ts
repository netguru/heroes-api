import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('UpdateTypeInput')
export class UpdateTypeDto {
  @IsString()
  @ApiProperty()
  @Field(() => ID)
  id: string;

  @IsString()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  name?: string;
}
