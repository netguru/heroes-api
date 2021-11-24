import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

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
  @ApiProperty()
  @Field(() => ID)
  readonly avatarId?: string;

  @IsString()
  @ApiProperty()
  @Field(() => ID)
  readonly typeId?: string;

  @IsString()
  @ApiProperty()
  @Field()
  description?: string;
}
