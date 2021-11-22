import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsString, IsUrl } from 'class-validator';

@ArgsType()
export class UpdateHeroDto {
  @IsString()
  @ApiProperty()
  @Field()
  full_name?: string;

  @IsString()
  @IsUrl()
  @ApiProperty()
  @Field()
  avatar_url?: string;

  @IsString()
  @ApiProperty()
  @Field(() => ID)
  type_id?: string;

  @IsString()
  @ApiProperty()
  @Field()
  description?: string;
}
