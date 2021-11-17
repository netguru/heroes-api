import { PartialType } from '@nestjs/swagger';
import { CreateHeroDto } from './CreateHero.dto';

export class UpdateHeroDto extends PartialType(CreateHeroDto) {}
