import { ServerMembers } from 'src/server/entities/servermembers.entity';
import { Channel } from "src/Channel/entities/channel.entity";
export declare class Server {
    id: number;
    serverName: string;
    serverType: string;
    serverMembers: ServerMembers[];
    channels: Channel[];
}
