import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ArgsType()
export class UpdateHeroDto {
  @IsString()
  @ApiProperty()
  @Field()
  fullName?: string;

  @IsString()
  @ApiProperty()
  @Field(() => ID)
  avatarId?: string;

  @IsString()
  @ApiProperty()
  @Field(() => ID)
  typeId?: string;

  @IsString()
  @ApiProperty()
  @Field()
  description?: string;
}
