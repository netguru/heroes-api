import { ApiProperty } from '@nestjs/swagger';
import { TypeDto } from '../../types/dtos';

export class HeroDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  avatar_url: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ type: TypeDto })
  type: TypeDto;
}
