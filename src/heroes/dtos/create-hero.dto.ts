import { IsNumber, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from '../../types';

export class CreateHeroDto {
  @IsString()
  @IsUrl()
  @ApiProperty()
  avatar_url: string;

  @IsString()
  @ApiProperty()
  full_name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsNumber()
  @ApiProperty({ type: String })
  type: Type['id'];
}
