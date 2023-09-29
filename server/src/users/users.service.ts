import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users;
  constructor() {
    this.users = {
      '1': {
        id: '1',
        username: 'john',
      },
      '2': {
        id: '2',
        username: 'maria',
      },
    };
  }

  findOne(username: string): User {
    let user = Object.values(this.users).find(
      (user: User) => user.username === username,
    ) as User;
    if (!user) {
      const id = uuidv4();
      user = {
        id,
        username,
      };
      this.users[id] = user;
    }
    return user;
  }

  getUsers(): User[] {
    return Object.values(this.users);
  }

  getUsersDictionary(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    return this.users[id];
  }
}
