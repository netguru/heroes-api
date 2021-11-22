import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TypeDto } from '../../types/dtos';

@ObjectType('Hero')
export class HeroDto {
  @ApiProperty()
  @Field(() => ID)
  id: string;

  @ApiProperty()
  @Field()
  full_name: string;

  @ApiProperty()
  @Field()
  avatar_url: string;

  @ApiProperty()
  @Field()
  description: string;

  @ApiProperty({ type: TypeDto })
  @Field(() => TypeDto)
  type: TypeDto;
}
