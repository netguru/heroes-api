import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginateOptionsDto } from '../common';
import {
  AvatarDto,
  AvatarsPaginatedDto,
  CreateAvatarDto,
  DeleteAvatarDto,
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
  updateAvatar(@Args('input') input: UpdateAvatarDto): Promise<AvatarDto> {
    const { id, ...avatar } = input;
    return this.avatarsService.update({ id }, avatar);
  }

  @Mutation(() => AvatarDto)
  deleteAvatar(@Args('input') input: DeleteAvatarDto): Promise<AvatarDto> {
    return this.avatarsService.delete({ id: input.id });
  }
}
