import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Server } from 'src/server/entities/server.entity'; 
import { ChannelMembers } from 'src/channel/entities/channelmembers.entity'; 

@Entity()
export class Channel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, name: 'channel_name' })
    channelName: string;

    @Column({ type: 'varchar', length: 50, name: 'channel_type' })
    channelType: string;

    @ManyToOne(() => Server, server => server.channels)
    server: Server;

    // @OneToMany(() => ChannelMembers, channelMembers => channelMembers.channel)
    // channelMembers: ChannelMembers[];
}
