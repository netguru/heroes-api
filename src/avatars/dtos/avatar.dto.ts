import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Avatar')
export class AvatarDto {
  @ApiProperty()
  @Field(() => ID)
  id: string;

  @ApiProperty()
  @Field()
  alt: string;

  @ApiProperty()
  @Field()
  avatarUrl: string;
}
