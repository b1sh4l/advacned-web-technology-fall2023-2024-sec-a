import { ServerService } from './server.service';
import { CreateServerDto } from './dto/create-server.dto';
export declare class ServerController {
    private readonly serverService;
    constructor(serverService: ServerService);
    create(createServerDto: CreateServerDto): Promise<import("./entities/server.entity").Server>;
    findAll(): Promise<import("./entities/server.entity").Server[]>;
    findOne(id: string): Promise<import("./entities/server.entity").Server>;
    updateServerName(id: string, newServerName: string): Promise<import("./entities/server.entity").Server>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    inviteMember(serverId: number, memberId: number, role: string): Promise<import("./entities/servermembers.entity").ServerMembers>;
}
