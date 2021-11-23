import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TypeDto } from '../../types/dtos';
import { AvatarDto } from '../../avatars/dtos';

@ObjectType('Hero')
export class HeroDto {
  @ApiProperty()
  @Field(() => ID)
  id: string;

  @ApiProperty()
  @Field()
  fullName: string;

  @ApiProperty({ type: AvatarDto })
  @Field(() => AvatarDto)
  avatar: AvatarDto;

  @ApiProperty()
  @Field()
  description: string;

  @ApiProperty({ type: TypeDto })
  @Field(() => TypeDto)
  type: TypeDto;
}
