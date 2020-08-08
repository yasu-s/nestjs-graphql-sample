import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver('Author')
export class AuthorsResolver {
  readonly authorMaps = new Map<number, any>([
    [1, { id: 1, firstName: 'hige', lastName: 'hoge' }],
    [2, { id: 2, firstName: 'sample', lastName: 'user' }],
    [3, { id: 3, firstName: 'sample', lastName: 'hoge' }],
  ]);

  @Query()
  async author(@Args('id') id: number) {
    return this.authorMaps.get(id);
  }
}
