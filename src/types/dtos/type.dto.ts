import { ApiProperty } from '@nestjs/swagger';

export class TypeDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
