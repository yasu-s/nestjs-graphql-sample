import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AuthorsResolver } from './authors.resolver';

@Module({
  providers: [AuthorsResolver],
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/schema-first/src/graphql.ts'),
        outputAs: 'class',
      },
      playground: true,
      debug: true,
      tracing: true,
    }),
  ],
})
export class AppModule {}
