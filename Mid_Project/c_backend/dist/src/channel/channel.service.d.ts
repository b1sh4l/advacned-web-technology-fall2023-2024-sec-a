import { Repository } from 'typeorm';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from "src/channel/entities/channel.entity";
export declare class ChannelService {
    private readonly channelRepository;
    constructor(channelRepository: Repository<Channel>);
    create(createChannelDto: CreateChannelDto): Promise<Channel>;
    findAll(): Promise<Channel[]>;
    findOne(id: number): Promise<Channel>;
    update(id: number, updateChannelDto: UpdateChannelDto): Promise<Channel>;
    remove(id: number): Promise<void>;
}
