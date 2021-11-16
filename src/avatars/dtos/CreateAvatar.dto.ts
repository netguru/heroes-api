import { IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAvatarDto {
  @IsString()
  @ApiProperty()
  alt: string;

  @IsString()
  @IsUrl()
  @ApiProperty()
  avatar_url: string;
}
