import { ApiPropertyOptional } from '@nestjs/swagger';
import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, IsUrl } from 'class-validator';

@ArgsType()
export class UpdateAvatarDto {
  @IsString()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  alt?: string;

  @IsString()
  @IsUrl()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  avatar_url?: string;
}
