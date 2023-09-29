import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { RoomService } from 'src/room/room.service';
import { UsersService } from 'src/users/users.service';

const CLIENT_URI = 'http://localhost:3000';

@WebSocketGateway({
  cors: {
    origin: [CLIENT_URI],
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
