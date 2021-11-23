import { IsArray, IsNumber } from 'class-validator';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export interface ClassType<T = any> {
  new (...args: any[]): T;
}

export function PaginatedDto<TData>(TItemClass: ClassType<TData>) {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @IsArray()
    @Field(() => [TItemClass])
    data: TData[];

    @IsNumber()
    @Field(() => Int)
    totalCount: number;
  }
  return PaginatedResponseClass;
}
