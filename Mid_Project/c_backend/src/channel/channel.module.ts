import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { Channel } from 'src/channel/entities/channel.entity';
import { ChannelMembers } from 'src/channel/entities/channelmembers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Channel, ChannelMembers])],
  controllers: [ChannelController],
  providers: [ChannelService],
})
export class ChannelModule {}
