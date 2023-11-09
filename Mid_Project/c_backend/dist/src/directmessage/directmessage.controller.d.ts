import { DirectmessageService } from './directmessage.service';
import { CreateDirectmessageDto } from './dto/create-directmessage.dto';
import { UpdateDirectmessageDto } from './dto/update-directmessage.dto';
export declare class DirectmessageController {
    private readonly directmessageService;
    constructor(directmessageService: DirectmessageService);
    create(createDirectmessageDto: CreateDirectmessageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDirectmessageDto: UpdateDirectmessageDto): string;
    remove(id: string): string;
}
