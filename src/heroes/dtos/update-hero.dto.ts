import { PartialType } from '@nestjs/swagger';
import { CreateHeroDto } from './create-hero.dto';

export class UpdateHeroDto extends PartialType(CreateHeroDto) {}
