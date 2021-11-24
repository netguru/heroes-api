import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType('CreateHeroInput')
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
