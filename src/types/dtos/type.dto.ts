import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Type')
export class TypeDto {
  @ApiProperty()
  @Field(() => ID)
  id: string;

  @ApiProperty()
  @Field()
  name: string;
}
