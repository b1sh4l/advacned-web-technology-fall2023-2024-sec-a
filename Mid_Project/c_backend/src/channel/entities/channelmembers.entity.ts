import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Channel } from './channel.entity';
import { Member } from 'src/manage-user/entities/manage-user.entity';

@Entity()
export class ChannelMembers {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Channel, channel => channel.channelMembers)
    @JoinColumn({ name: 'channel_id' })
    channel: Channel;
  
    // @ManyToOne(() => Member, member => member.channelMembers)
    // @JoinColumn({ name: 'member_id' })
    // member: Member;
}