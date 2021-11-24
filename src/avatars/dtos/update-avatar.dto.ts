import { ApiPropertyOptional } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsUrl } from 'class-validator';

@InputType('UpdateAvatarInput')
export class UpdateAvatarDto {
  @IsString()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  alt?: string;

  @IsString()
  @IsUrl()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  avatarUrl?: string;
}
