import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  Token: string;

  @Field({ nullable: true })
  FirstName: string;

  @Field()
  Email: string;

  @Field({ nullable: true })
  LastName: string;

  @Field()
  Password: string;

  @Field(() => Int, { nullable: true })
  Type: number;

  @Field(() => Boolean, { nullable: true })
  Active: boolean;

  @Field(() => Date, { nullable: true })
  LastLogin: Date;
}
