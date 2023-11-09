import { GroupchatService } from './groupchat.service';
import { CreateGroupchatDto } from './dto/create-groupchat.dto';
import { UpdateGroupchatDto } from './dto/update-groupchat.dto';
export declare class GroupchatController {
    private readonly groupchatService;
    constructor(groupchatService: GroupchatService);
    create(createGroupchatDto: CreateGroupchatDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGroupchatDto: UpdateGroupchatDto): string;
    remove(id: string): string;
}
