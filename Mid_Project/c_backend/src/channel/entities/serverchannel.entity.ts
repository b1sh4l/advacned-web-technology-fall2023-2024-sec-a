import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { Server } from 'src/server/entities/server.entity';

@Entity({ name: 'ServerChannel' })
@Unique(['channelName', 'server']) 
export class ServerChannel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, name: 'channel_name' })
    channelName: string;

    @Column({ type: 'varchar', length: 50, name: 'channel_type' })
    channelType: string;

    @ManyToOne(() => Server, server => server.channels)
    server: Server;
}
