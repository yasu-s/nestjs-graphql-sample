import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { Author } from './author.model';

@Resolver(() => Author)
export class AuthorResolver {
  readonly authorMaps = new Map<number, Author>([
    [1, { id: 1, firstName: 'hige', lastName: 'hoge' }],
    [2, { id: 2, firstName: 'sample', lastName: 'user' }],
    [3, { id: 3, firstName: 'sample', lastName: 'hoge' }],
  ]);

  @Query(() => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorMaps.get(id);
  }
}
