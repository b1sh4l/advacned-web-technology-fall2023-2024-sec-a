import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    
    return this.usersService.create(createUserDto);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('search')
  searchUsers(@Query('username') username: string) {
    return this.usersService.searchByUsername(username);
  }


  @Patch(':uName')
  updateUser(@Param('uName') uName: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(uName, updateUserDto);
  }

  @Delete(':uName')
  deleteUser(@Param('uName') uName: string) {
    return this.usersService.deleteUser(uName);
  }
}
