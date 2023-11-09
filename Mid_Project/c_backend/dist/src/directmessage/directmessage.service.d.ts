import { CreateDirectmessageDto } from './dto/create-directmessage.dto';
import { UpdateDirectmessageDto } from './dto/update-directmessage.dto';
export declare class DirectmessageService {
    create(createDirectmessageDto: CreateDirectmessageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDirectmessageDto: UpdateDirectmessageDto): string;
    remove(id: number): string;
}
