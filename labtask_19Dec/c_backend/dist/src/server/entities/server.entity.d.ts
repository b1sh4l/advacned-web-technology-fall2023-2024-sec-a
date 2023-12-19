import { ServerMembers } from 'src/server/entities/servermembers.entity';
export declare class Server {
    id: number;
    serverName: string;
    serverType: string;
    serverMembers: ServerMembers[];
}
