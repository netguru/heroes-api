import { CreateAvatarDto } from './create-avatar.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateAvatarDto extends PartialType(CreateAvatarDto) {}
