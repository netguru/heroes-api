import { IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class CreateHeroDto {
  @IsString()
  @ApiProperty()
  @Field()
  full_name: string;

  @IsString()
  @ApiProperty()
  @Field(() => ID)
  type_id: string;

  @IsString()
  @IsUrl()
  @ApiProperty()
  @Field()
  avatar_url: string;

  @IsString()
  @ApiProperty()
  @Field()
  description: string;
}
