import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString, IsUrl } from 'class-validator';

@InputType('UpdateHeroInput')
export class UpdateHeroDto {
  @IsString()
  @ApiProperty()
  @Field(() => ID)
  readonly id: string;

  @IsString()
  @ApiProperty()
  @Field()
  fullName?: string;

  @IsString()
  @IsUrl()
  @ApiProperty()
  @Field()
  avatarUrl?: string;

  @IsString()
  @ApiProperty()
  @Field(() => ID)
  readonly typeId?: string;

  @IsString()
  @ApiProperty()
  @Field()
  description?: string;
}
