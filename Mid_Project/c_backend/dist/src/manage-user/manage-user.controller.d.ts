import { ManageUserService } from './manage-user.service';
import { CreateManageUserDto } from './dto/create-manage-user.dto';
import { UpdateManageUserDto } from './dto/update-manage-user.dto';
export declare class ManageUserController {
    private readonly manageUserService;
    constructor(manageUserService: ManageUserService);
    create(createManageUserDto: CreateManageUserDto): Promise<import("./entities/manage-user.entity").Member>;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/manage-user.entity").Member>;
    update(id: string, updateManageUserDto: UpdateManageUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
