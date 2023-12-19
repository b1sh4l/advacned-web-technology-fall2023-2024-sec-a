import { Member } from 'src/manage-user/entities/manage-user.entity';
export declare class DirectMessage {
    id: number;
    sender: Member;
    receiver: Member;
    messageContent: string;
    timestamp: Date;
}
