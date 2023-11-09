import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ServerMembers } from 'src/server/entities/servermembers.entity';
import { Channel } from "src/Channel/entities/channel.entity";

@Entity()
export class Server {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, name: 'server_name' })
    serverName: string;

    @Column({ type: 'varchar', length: 50, name: 'server_type' })
    serverType: string;

    @OneToMany(() => ServerMembers, serverMember => serverMember.server)
    serverMembers: ServerMembers[];

    @OneToMany(() => Channel, channel => channel.server)
    channels: Channel[];
}
