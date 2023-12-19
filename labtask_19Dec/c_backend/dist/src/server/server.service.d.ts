import { Repository } from 'typeorm';
import { Server } from './entities/server.entity';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Member } from 'src/manage-user/entities/manage-user.entity';
import { ServerMembers } from './entities/servermembers.entity';
export declare class ServerService {
    private readonly serverRepo;
    private readonly memberRepository;
    private readonly serverMemberRepository;
    constructor(serverRepo: Repository<Server>, memberRepository: Repository<Member>, serverMemberRepository: Repository<ServerMembers>);
    create(createServerDto: CreateServerDto): Promise<Server>;
    findAll(): Promise<Server[]>;
    findOne(id: number): Promise<Server>;
    update(id: number, updateServerDto: UpdateServerDto): Promise<void>;
    updateServerName(id: number, newServerName: string): Promise<Server>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    inviteMember(serverId: number, memberId: number, role: string): Promise<ServerMembers>;
}
