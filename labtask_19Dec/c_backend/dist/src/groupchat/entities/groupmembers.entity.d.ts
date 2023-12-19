import { GroupChat } from "src/groupchat/entities/groupchat.entity";
import { Member } from "src/manage-user/entities/manage-user.entity";
export declare class GroupMembers {
    id: number;
    groupChat: GroupChat;
    member: Member;
}
