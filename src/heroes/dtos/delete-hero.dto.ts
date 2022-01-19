import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('DeleteHeroInput')
export class DeleteHeroDto {
  @IsString()
  @ApiProperty()
  @Field(() => ID)
  readonly id: string;
}
