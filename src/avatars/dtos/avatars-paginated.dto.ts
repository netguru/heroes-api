import { ObjectType } from '@nestjs/graphql';
import { PaginatedDto } from '../../dtos';
import { AvatarDto } from './avatar.dto';

@ObjectType('AvatarsPaginated')
export class AvatarsPaginatedDto extends PaginatedDto(AvatarDto) {}
