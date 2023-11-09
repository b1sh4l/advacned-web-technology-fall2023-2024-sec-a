import { GroupMembers } from 'src/groupchat/entities/groupmembers.entity';
export declare class GroupChat {
    id: number;
    groupName: string;
    groupType: string;
    groupMembers: GroupMembers[];
}
