import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ length: 500, nullable: true })
  firstName: string;

  @Field({ nullable: true })
  @Column({ length: 500, nullable: true })
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column({ length: 500 })
  password: string;

  @Field({ nullable: true })
  @CreateDateColumn()
  dateCreated: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  lastUpdated: Date;

  @Field({ nullable: true })
  lastLogin: Date;

  @Field({ nullable: true })
  Token: string;
}
