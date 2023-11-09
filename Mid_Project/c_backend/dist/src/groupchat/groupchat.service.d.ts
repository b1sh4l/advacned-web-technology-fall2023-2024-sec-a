import { CreateGroupchatDto } from './dto/create-groupchat.dto';
import { UpdateGroupchatDto } from './dto/update-groupchat.dto';
export declare class GroupchatService {
    create(createGroupchatDto: CreateGroupchatDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGroupchatDto: UpdateGroupchatDto): string;
    remove(id: number): string;
}
