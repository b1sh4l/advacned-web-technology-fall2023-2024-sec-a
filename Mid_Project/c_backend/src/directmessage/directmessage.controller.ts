import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DirectmessageService } from './directmessage.service';
import { CreateDirectmessageDto } from './dto/create-directmessage.dto';
import { UpdateDirectmessageDto } from './dto/update-directmessage.dto';

@Controller('directmessage')
export class DirectmessageController {
  constructor(private readonly directmessageService: DirectmessageService) {}

  @Post()
  create(@Body() createDirectmessageDto: CreateDirectmessageDto) {
    return this.directmessageService.create(createDirectmessageDto);
  }

  @Get()
  findAll() {
    return this.directmessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directmessageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirectmessageDto: UpdateDirectmessageDto) {
    return this.directmessageService.update(+id, updateDirectmessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directmessageService.remove(+id);
  }
}
