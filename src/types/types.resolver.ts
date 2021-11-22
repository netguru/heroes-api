import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTypeDto, TypeDto, UpdateTypeDto } from './dtos';
import { TypesService } from './types.service';

@Resolver(() => TypeDto)
export class TypesResolver {
  constructor(private readonly typesService: TypesService) {}

  @Query(() => [TypeDto])
  types(): Promise<TypeDto[]> {
    return this.typesService.types();
  }

  @Mutation(() => TypeDto)
  createNewType(@Args() newType: CreateTypeDto): Promise<TypeDto> {
    return this.typesService.create(newType);
  }

  @Mutation(() => TypeDto)
  updateType(
    @Args() updateTypeDto: UpdateTypeDto,
    @Args('id', { type: () => ID }) id: string,
  ): Promise<TypeDto> {
    return this.typesService.update({ id }, updateTypeDto);
  }

  @Mutation(() => TypeDto)
  deleteType(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.typesService.delete({ id });
  }
}
