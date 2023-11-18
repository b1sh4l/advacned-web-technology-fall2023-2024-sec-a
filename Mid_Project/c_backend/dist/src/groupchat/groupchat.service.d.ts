import { Repository } from 'typeorm';
import { GroupChat } from './entities/groupchat.entity';
import { CreateGroupchatDto } from './dto/create-groupchat.dto';
import { UpdateGroupchatDto } from './dto/update-groupchat.dto';
import { GroupMembers } from './entities/groupmembers.entity';
import { CreateGroupMembersDto } from './dto/create-groupmembers.dto';
export declare class GroupchatService {
    private readonly groupchatRepository;
    private readonly groupMembersRepository;
    constructor(groupchatRepository: Repository<GroupChat>, groupMembersRepository: Repository<GroupMembers>);
    create(createGroupchatDto: CreateGroupchatDto): Promise<GroupChat>;
    invite(groupId: number, createGroupMembersDto: CreateGroupMembersDto): Promise<void>;
    findAll(): Promise<GroupChat[]>;
    findOne(id: number): Promise<GroupChat>;
    update(id: number, updateGroupchatDto: UpdateGroupchatDto): Promise<GroupChat>;
    remove(id: number): Promise<string>;
    getGroupMembers(groupId: number): Promise<number[]>;
}
