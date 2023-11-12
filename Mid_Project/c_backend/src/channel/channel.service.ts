import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Channel } from './entities/channel.entity';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { ChannelMembers } from './entities/channelmembers.entity';

@Injectable()
export class ChannelService {

  constructor(
    @InjectRepository(Channel) private readonly channelRepository: Repository<Channel>,
    @InjectRepository(ChannelMembers) private readonly channelMembersRepository: Repository<ChannelMembers>,
  ) {}
  
  create(createChannelDto: CreateChannelDto) {
    return 'This action adds a new channel';
  }

  findAll() {
    return `This action returns all channel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} channel`;
  }

  update(id: number, updateChannelDto: UpdateChannelDto) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
