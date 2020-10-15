import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(newUser: User): Promise<User> {
    return await this.userRepository.save(newUser);
  }

  async updateUser(updatedUser: User): Promise<boolean> {
    let result = false;

    let existingUser = await this.userRepository.findOne({
      where: { id: updatedUser.id },
    });

    if (existingUser) {
      result = (await this.userRepository.save(updatedUser)) !== null;
    }

    return result;
  }

  async getUserById(userId: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  async validateUser(emailAddress: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { email: emailAddress },
    });

    // prod wont store a password in plain text
    if (user && user.password === pass) {
      return user;
    }

    return null;
  }

  public createJwtToken(user: any): User {
    const payload = { email: user.email, id: user.id };

    const token = this.jwtService.sign(payload);

    user.Token = token;
    return user;
  }
}
