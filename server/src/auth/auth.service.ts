import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RoomService } from '../room/room.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly roomService: RoomService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
    this.usersService = usersService;
    this.roomService = roomService;
    this.jwtService = jwtService;
  }

  async signIn(username: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const payload = { id: user.id, username: user.username };
    this.roomService.addUserToRoom(user);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
