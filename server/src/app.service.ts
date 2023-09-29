import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getMessages() {
    console.log('get messages');
    return;
  }

  async createMessage(data) {
    console.log({ data });
    return;
  }
}
