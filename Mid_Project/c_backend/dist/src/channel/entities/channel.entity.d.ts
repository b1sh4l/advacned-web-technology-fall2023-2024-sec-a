import { Server } from 'src/server/entities/server.entity';
export declare class Channel {
    id: number;
    channelName: string;
    channelType: string;
    server: Server;
}
