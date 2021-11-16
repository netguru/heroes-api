import { PartialType } from '@nestjs/swagger';
import { CreateTagDto } from './CreateTag.dto';

export class UpdateTagDto extends PartialType(CreateTagDto) {}
