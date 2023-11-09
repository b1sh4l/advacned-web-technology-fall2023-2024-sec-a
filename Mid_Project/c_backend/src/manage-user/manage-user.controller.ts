import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManageUserService } from './manage-user.service';
import { CreateManageUserDto } from './dto/create-manage-user.dto';
import { UpdateManageUserDto } from './dto/update-manage-user.dto';

@Controller('manage-user')
export class ManageUserController {
  constructor(private readonly manageUserService: ManageUserService) {}

  @Post('create')
  create(@Body() createManageUserDto: CreateManageUserDto) {
    return this.manageUserService.create(createManageUserDto);
  }


  @Get()
  findAll() {
    return this.manageUserService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.manageUserService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateManageUserDto: UpdateManageUserDto) {
    return this.manageUserService.update(+id, updateManageUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.manageUserService.remove(+id);
  }
}
