import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TypeDto } from '../../types/dtos';

@ObjectType('Hero')
export class HeroDto {
  @ApiProperty()
  @Field(() => ID)
  readonly id: string;

  @ApiProperty()
  @Field()
  fullName: string;

  @ApiProperty()
  @Field()
  avatarUrl: string;

  @ApiProperty()
  @Field()
  description: string;

  @ApiProperty({ type: TypeDto })
  @Field(() => TypeDto)
  type: TypeDto;
}
