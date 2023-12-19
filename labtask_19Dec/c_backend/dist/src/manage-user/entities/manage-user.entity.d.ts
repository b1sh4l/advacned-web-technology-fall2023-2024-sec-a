import { DirectMessage } from 'src/directmessage/entities/directmessage.entity';
import { GroupMembers } from 'src/groupchat/entities/groupmembers.entity';
import { ServerMembers } from 'src/server/entities/servermembers.entity';
export declare class Member {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    mobileno: string;
    password: string;
    profile_picture: string;
    member_since: Date;
    role: string;
    is_banned: boolean;
    sentMessages: DirectMessage[];
    receivedMessages: DirectMessage[];
    groupMembers: GroupMembers[];
    serverMembers: ServerMembers[];
}
