import { IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateAvatarInput')
export class CreateAvatarDto {
  @IsString()
  @ApiProperty()
  @Field()
  alt: string;

  @IsString()
  @IsUrl()
  @ApiProperty()
  @Field()
  avatarUrl: string;
}
