import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.getUsers();
  }

  @Get('/:username')
  async getByUsername(@Param('username') username): Promise<User> {
    return this.usersService.findOne(username);
  }
}
