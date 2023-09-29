import { Module } from '@nestjs/common';
import { MyGateway } from './chat.gateway';
import { RoomModule } from 'src/room/room.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [RoomModule, UsersModule],
  providers: [MyGateway],
  exports: [MyGateway],
})
export class GatewayModule {}
