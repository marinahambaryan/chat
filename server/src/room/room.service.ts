import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { UsersService } from '../users/users.service';
import { User } from '../users/dto/user.dto';
import { Message } from '../chat/dto/message.dto';

@Injectable()
export class RoomService {
  constructor(private userService: UsersService) {
    this.room = [];
    this.messageHistory = [];
  }
  private room: User[];
  private messageHistory: Message[];

  getRoom(): User[] {
    return this.room;
  }

  addUserToRoom(user: User) {
    this.room.push(user);
    return;
  }

  getMessageHistory(): Message[] {
    let messages = this.messageHistory;
    const users = this.userService.getUsersDictionary();
    messages = messages.map((message) => {
      const user = users[message.userId];
      return {
        ...user,
        ...message,
      };
    });
    return messages;
  }

  addMessage(data: { userId: string; message: string }) {
    const newMessage = {
      id: uuidv4(),
      ...data,
      timestamp: new Date().toISOString(),
    };
    this.messageHistory.push(newMessage);
    return newMessage;
  }
}
