import { User } from 'src/user/user.entity';
import { UserInput } from 'src/user/user.input';

export class UserUtils {
  static ToEntity(userInput: UserInput): User {
    let entity = {} as User;
    entity.id = userInput.id === null ? -1 : userInput.id;
    entity.email = userInput.Email;
    entity.firstName = userInput.FirstName;
    entity.lastName = userInput.LastName;
    entity.password = userInput.Password;

    return entity;
  }

  static ToModel(userEntity: User): UserInput {
    let model = {} as UserInput;
    model.id = userEntity.id;
    model.Password = userEntity.password;
    model.Email = userEntity.email;
    model.FirstName = userEntity.firstName;
    model.LastName = userEntity.lastName;
    model.LastLogin = userEntity.lastLogin;

    return model;
  }
}
