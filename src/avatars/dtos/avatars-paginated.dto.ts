import { ObjectType } from '@nestjs/graphql';
import { PaginatedDto } from '../../common';
import { AvatarDto } from './avatar.dto';

@ObjectType('AvatarsPaginated')
export class AvatarsPaginatedDto extends PaginatedDto(AvatarDto) {}
