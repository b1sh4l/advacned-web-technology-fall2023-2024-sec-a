import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from './entities/user.entity';
import { ValidationPipe } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const newUser = new User(createUserDto.eName, createUserDto.contactNo, createUserDto.uName, createUserDto.password);
    this.users.push(newUser);
    return 'New User is Added!';
  }

  findAll() {
    return this.users;;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  updateUser(uName: string, updateUserDto: UpdateUserDto) {
    return `Updated user: ${uName}`;
  }

  deleteUser(uName: string) {
    return `Deleted user: ${uName}`;
  }

  searchByUsername(username: string) {
    return this.users.filter(user => user.uName === username);
  }
}
