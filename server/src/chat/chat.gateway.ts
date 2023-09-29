import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { RoomService } from '../room/room.service';
import { UsersService } from '../users/users.service';
import { configProps } from 'config';

@WebSocketGateway({
  cors: {
    origin: [configProps.CLIENT_URL],
  },
})
export class MyGateway {
  @WebSocketServer() server: Server;
  private clientState = [];
  constructor(
    private readonly roomService: RoomService,
    private readonly usersService: UsersService,
  ) {}

  onModuleInit() {
    this.server.on('connection', (socket) => {
      this.clientState.push(socket.id);
    });
  }

  @SubscribeMessage('sendMessage')
  onSendMessage(@MessageBody() data: { userId: string; message: string }) {
    const newMessage = this.roomService.addMessage(data);
    const user = this.usersService.getUserById(data.userId);
    newMessage['username'] = user.username;
    this.server.to(this.clientState).emit('recieveMessage', { newMessage });

    return newMessage;
  }
}
