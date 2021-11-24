import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginateOptionsDto } from '../dtos';
import {
  CreateTypeDto,
  DeleteTypeDto,
  TypeDto,
  TypesPaginatedDto,
  UpdateTypeDto,
} from './dtos';
import { TypesService } from './types.service';

@Resolver(() => TypeDto)
export class TypesResolver {
  constructor(private readonly typesService: TypesService) {}

  @Query(() => TypesPaginatedDto)
  async types(@Args() options: PaginateOptionsDto): Promise<TypesPaginatedDto> {
    const [data, totalCount] = await Promise.all([
      this.typesService.types({ take: options.first, skip: options.skip }),
      this.typesService.count(),
    ]);
    return { data, totalCount };
  }

  @Query(() => TypeDto)
  type(@Args('id', { type: () => ID }) id: string): Promise<TypeDto[]> {
    return this.typesService.types({ where: { id } });
  }

  @Mutation(() => TypeDto)
  createType(@Args('input') input: CreateTypeDto): Promise<TypeDto> {
    return this.typesService.create(input);
  }

  @Mutation(() => TypeDto)
  updateType(@Args('input') input: UpdateTypeDto): Promise<TypeDto> {
    const { id, ...type } = input;
    return this.typesService.update({ id }, type);
  }

  @Mutation(() => TypeDto)
  deleteType(@Args('input') input: DeleteTypeDto): Promise<TypeDto> {
    return this.typesService.delete({ id: input.id });
  }
}
