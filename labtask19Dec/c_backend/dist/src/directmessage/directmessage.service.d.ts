import { Repository } from 'typeorm';
import { DirectMessage } from './entities/directmessage.entity';
import { CreateDirectmessageDto } from './dto/create-directmessage.dto';
export declare class DirectmessageService {
    private readonly directmessageRepository;
    constructor(directmessageRepository: Repository<DirectMessage>);
    create(createDirectmessageDto: CreateDirectmessageDto): Promise<DirectMessage>;
    findAll(): Promise<DirectMessage[]>;
    findOne(id: number): Promise<DirectMessage>;
    getMessagesBySenderId(senderId: number): Promise<DirectMessage[]>;
    getMessagesByReceiverId(receiverId: number): Promise<DirectMessage[]>;
    remove(id: number): Promise<string>;
}
