import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString, IsUrl } from 'class-validator';

@InputType('UpdateAvatarInput')
export class UpdateAvatarDto {
  @IsString()
  @ApiProperty()
  @Field(() => ID)
  readonly id: string;

  @IsString()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  alt?: string;

  @IsString()
  @IsUrl()
  @ApiPropertyOptional()
  @Field({ nullable: true })
  url?: string;
}
