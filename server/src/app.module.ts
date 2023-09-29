import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [GatewayModule, AuthModule, UsersModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
