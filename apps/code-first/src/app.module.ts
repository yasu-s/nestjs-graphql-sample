import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthorResolver } from './authors.resolver';

@Module({
  providers: [AuthorResolver],
  imports: [GraphQLModule.forRoot({ autoSchemaFile: true, playground: true, debug: true, tracing: true })],
})
export class AppModule {}
