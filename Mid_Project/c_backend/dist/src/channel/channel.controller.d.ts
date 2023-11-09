import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
export declare class ChannelController {
    private readonly channelService;
    constructor(channelService: ChannelService);
    create(createChannelDto: CreateChannelDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChannelDto: UpdateChannelDto): string;
    remove(id: string): string;
    getHello(): string;
}
