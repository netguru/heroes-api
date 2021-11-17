import { ApiProperty } from '@nestjs/swagger';

export class AvatarDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  alt: string;

  @ApiProperty()
  avatar_url: string;
}
