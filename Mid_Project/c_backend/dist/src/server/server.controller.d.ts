import { ServerService } from './server.service';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
export declare class ServerController {
    private readonly serverService;
    constructor(serverService: ServerService);
    create(createServerDto: CreateServerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateServerDto: UpdateServerDto): string;
    remove(id: string): string;
}
