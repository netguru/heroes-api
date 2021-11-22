import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AvatarDto, CreateAvatarDto, UpdateAvatarDto } from './dtos';
import { AvatarsService } from './avatars.service';

@Resolver(() => AvatarDto)
export class AvatarsResolver {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Query(() => AvatarDto)
  // FIXME: This query should be changed to `avatar`
  // left as `avatars` for backward compatibility
  avatars(@Args('id', { type: () => ID }) id: string): Promise<AvatarDto> {
    return this.avatarsService.avatar({ where: { id } });
  }

  @Mutation(() => AvatarDto)
  createNewAvatar(@Args() newAvatarDto: CreateAvatarDto): Promise<AvatarDto> {
    return this.avatarsService.create(newAvatarDto);
  }

  @Mutation(() => AvatarDto)
  updateAvatar(
    @Args() updateAvatarDto: UpdateAvatarDto,
    @Args('id', { type: () => ID }) id: string,
  ): Promise<AvatarDto> {
    return this.avatarsService.update({ id }, updateAvatarDto);
  }

  @Mutation(() => AvatarDto)
  deleteAvatar(@Args('id', { type: () => ID }) id: string): Promise<AvatarDto> {
    return this.avatarsService.delete({ id });
  }
}
