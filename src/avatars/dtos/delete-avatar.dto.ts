import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType('DeleteAvatarInput')
export class DeleteAvatarDto {
  @IsString()
  @ApiProperty()
  @Field(() => ID)
  id: string;
}
