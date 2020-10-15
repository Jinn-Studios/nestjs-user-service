import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GqlAuthGuard } from './gql.strategy';
import { JwtStrategy } from './jwt.strategy';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: true,
    }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [UserService, UserResolver, GqlAuthGuard, JwtStrategy],
})
export class UserModule {}
