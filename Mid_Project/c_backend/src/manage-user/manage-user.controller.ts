import { Controller, Get, Put, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  @Put('edit-username/:id')
  editUsername(@Param('id') id: string, @Body('newUsername') newUsername: string) {
    return this.manageUserService.editUsername(+id, newUsername);
  }

  @Put('remove-profile-picture/:id')
  removeProfilePicture(@Param('id') id: string) {
    return this.manageUserService.removeProfilePicture(+id);
  }

  @Patch('assign-role/:id')
  assignRole(@Param('id') id: string, @Body('newRole') newRole: string) {
    return this.manageUserService.assignRole(+id, newRole);
  }



  @Put('limit-user-actions/:id')
  limitUserActions(@Param('id') id: string, @Body('restrictions') restrictions: string[]) {
    return this.manageUserService.limitUserActions(+id, restrictions);
  }

  @Put('ban-user/:id')
  banUser(@Param('id') id: string) {
    return this.manageUserService.banUser(+id);
  }
}
