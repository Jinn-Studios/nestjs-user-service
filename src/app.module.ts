import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { GqlAuthGuard } from './user/gql.strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
    }),
    TypeOrmModule.forRoot(),
    UserModule,
  ],
  providers: [AppService, GqlAuthGuard],
})
export class AppModule {}
