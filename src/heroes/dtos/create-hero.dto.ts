import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class CreateHeroDto {
  @IsString()
  @ApiProperty()
  @Field()
  fullName: string;

  @IsString()
  @ApiProperty()
  @Field(() => ID)
  typeId: string;

  @IsString()
  @ApiProperty()
  @Field(() => ID)
  avatarId: string;

  @IsString()
  @ApiProperty()
  @Field()
  description: string;
}
