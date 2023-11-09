import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Server } from "src/server/entities/server.entity";
import { Member } from "src/manage-user/entities/manage-user.entity";

@Entity()
export class ServerMembers {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Server, server => server.serverMembers)
    server: Server;

    @ManyToOne(() => Member, member => member.serverMembers)
    member: Member;

    @Column({ type: 'varchar', length: 50, name: 'member_role' })
    memberRole: string;
}
