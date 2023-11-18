import { DirectmessageService } from './directmessage.service';
import { CreateDirectmessageDto } from './dto/create-directmessage.dto';
export declare class DirectmessageController {
    private readonly directmessageService;
    constructor(directmessageService: DirectmessageService);
    create(createDirectmessageDto: CreateDirectmessageDto): Promise<import("./entities/directmessage.entity").DirectMessage>;
    findAll(): Promise<import("./entities/directmessage.entity").DirectMessage[]>;
    findOne(id: string): Promise<import("./entities/directmessage.entity").DirectMessage>;
    getMessagesBySenderId(senderId: string): Promise<import("./entities/directmessage.entity").DirectMessage[]>;
    getMessagesByReceiverId(receiverId: string): Promise<import("./entities/directmessage.entity").DirectMessage[]>;
    remove(id: string): Promise<string>;
}
