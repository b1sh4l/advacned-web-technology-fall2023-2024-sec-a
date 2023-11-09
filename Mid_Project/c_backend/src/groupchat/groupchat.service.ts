import { Injectable } from '@nestjs/common';
import { CreateGroupchatDto } from './dto/create-groupchat.dto';
import { UpdateGroupchatDto } from './dto/update-groupchat.dto';

@Injectable()
export class GroupchatService {
  create(createGroupchatDto: CreateGroupchatDto) {
    return 'This action adds a new groupchat';
  }

  findAll() {
    return `This action returns all groupchat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupchat`;
  }

  update(id: number, updateGroupchatDto: UpdateGroupchatDto) {
    return `This action updates a #${id} groupchat`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupchat`;
  }
}
