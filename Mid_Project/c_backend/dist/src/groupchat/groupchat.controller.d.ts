import { GroupchatService } from './groupchat.service';
import { CreateGroupchatDto } from './dto/create-groupchat.dto';
import { CreateGroupMembersDto } from './dto/create-groupmembers.dto';
import { UpdateGroupchatDto } from './dto/update-groupchat.dto';
export declare class GroupchatController {
    private readonly groupchatService;
    constructor(groupchatService: GroupchatService);
    create(createGroupchatDto: CreateGroupchatDto): Promise<{
        message: string;
        group: import("./entities/groupchat.entity").GroupChat;
        error?: undefined;
    } | {
        message: string;
        error: any;
        group?: undefined;
    }>;
    findAll(): Promise<{
        groups: import("./entities/groupchat.entity").GroupChat[];
        message?: undefined;
        error?: undefined;
    } | {
        message: string;
        error: any;
        groups?: undefined;
    }>;
    findOne(id: string): Promise<{
        group: import("./entities/groupchat.entity").GroupChat;
        message?: undefined;
        error?: undefined;
    } | {
        message: string;
        error: any;
        group?: undefined;
    }>;
    update(id: string, updateGroupchatDto: UpdateGroupchatDto): Promise<{
        message: string;
        group: import("./entities/groupchat.entity").GroupChat;
        error?: undefined;
    } | {
        message: string;
        error: any;
        group?: undefined;
    }>;
    invite(groupId: string, createGroupMembersDto: CreateGroupMembersDto): Promise<{
        message: string;
        error?: undefined;
    } | {
        message: string;
        error: any;
    }>;
    remove(id: string): Promise<{
        message: string;
        error?: undefined;
    } | {
        message: string;
        error: any;
    }>;
}
