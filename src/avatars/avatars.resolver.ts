import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginateOptionsDto } from '../dtos';
import {
  AvatarDto,
  AvatarsPaginatedDto,
  CreateAvatarDto,
  UpdateAvatarDto,
} from './dtos';
import { AvatarsService } from './avatars.service';

@Resolver(() => AvatarDto)
export class AvatarsResolver {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Query(() => AvatarsPaginatedDto)
  async avatars(
    @Args()
    options: PaginateOptionsDto,
  ): Promise<AvatarsPaginatedDto> {
    const [data, totalCount] = await Promise.all([
      this.avatarsService.avatars({
        skip: options.skip,
        take: options.first,
      }),
      this.avatarsService.count(),
    ]);

    return { data, totalCount };
  }

  @Query(() => AvatarDto)
  avatar(@Args('id', { type: () => ID }) id: string): Promise<AvatarDto> {
    return this.avatarsService.avatar({ where: { id } });
  }

  @Mutation(() => AvatarDto)
  createAvatar(@Args('input') input: CreateAvatarDto): Promise<AvatarDto> {
    return this.avatarsService.create(input);
  }

  @Mutation(() => AvatarDto)
  updateAvatar(
    @Args('input') input: UpdateAvatarDto,
    @Args('id', { type: () => ID }) id: string,
  ): Promise<AvatarDto> {
    return this.avatarsService.update({ id }, input);
  }

  @Mutation(() => AvatarDto)
  deleteAvatar(@Args('id', { type: () => ID }) id: string): Promise<AvatarDto> {
    return this.avatarsService.delete({ id });
  }
}
