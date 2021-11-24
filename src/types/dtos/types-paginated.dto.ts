import { ObjectType } from '@nestjs/graphql';
import { PaginatedDto } from '../../common';
import { TypeDto } from './type.dto';

@ObjectType('TypesPaginated')
export class TypesPaginatedDto extends PaginatedDto(TypeDto) {}
