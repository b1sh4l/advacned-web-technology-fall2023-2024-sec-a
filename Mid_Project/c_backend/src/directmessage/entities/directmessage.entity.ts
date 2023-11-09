import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Member } from 'src/manage-user/entities/manage-user.entity'; 

@Entity()
export class DirectMessage {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Member, member => member.sentMessages)
    sender: Member;

    @ManyToOne(() => Member, member => member.receivedMessages)
    receiver: Member;

    @Column({ type: 'text', name: 'message_content' })
    messageContent: string;

    @Column({ type: 'timestamp' })
    timestamp: Date;
}
