import { CreateAvatarDto } from './CreateAvatar.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateAvatarDto extends PartialType(CreateAvatarDto) {}
