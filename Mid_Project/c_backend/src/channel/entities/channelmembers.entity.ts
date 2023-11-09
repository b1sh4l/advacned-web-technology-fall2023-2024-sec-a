import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Channel } from './channel.entity'; 
import { Member } from 'src/manage-user/entities/manage-user.entity'; 

@Entity()
export class ChannelMembers {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => Channel, channel => channel.channelMembers)
    // channel: Channel;
    
    // @ManyToOne(() => Member, member => member.channelMembers)
    // member: Member;
}
