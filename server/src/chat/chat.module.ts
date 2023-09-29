import { Module } from '@nestjs/common';
import { MyGateway } from './chat.gateway';
import { RoomModule } from '../room/room.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [RoomModule, UsersModule],
  providers: [MyGateway],
  exports: [MyGateway],
})
export class GatewayModule {}
