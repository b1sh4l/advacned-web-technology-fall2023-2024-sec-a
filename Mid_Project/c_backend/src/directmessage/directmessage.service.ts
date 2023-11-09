import { Injectable } from '@nestjs/common';
import { CreateDirectmessageDto } from './dto/create-directmessage.dto';
import { UpdateDirectmessageDto } from './dto/update-directmessage.dto';

@Injectable()
export class DirectmessageService {
  create(createDirectmessageDto: CreateDirectmessageDto) {
    return 'This action adds a new directmessage';
  }

  findAll() {
    return `This action returns all directmessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} directmessage`;
  }

  update(id: number, updateDirectmessageDto: UpdateDirectmessageDto) {
    return `This action updates a #${id} directmessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} directmessage`;
  }
}
