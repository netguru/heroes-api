import { IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateAvatarDto {
  @IsString()
  @IsUrl()
  @ApiProperty()
  @Field()
  avatar_url: string;

  @IsString()
  @ApiProperty()
  @Field()
  alt: string;
}
