import { Server } from "src/server/entities/server.entity";
import { Member } from "src/manage-user/entities/manage-user.entity";
export declare class ServerMembers {
    id: number;
    server: Server;
    member: Member;
    memberRole: string;
}
