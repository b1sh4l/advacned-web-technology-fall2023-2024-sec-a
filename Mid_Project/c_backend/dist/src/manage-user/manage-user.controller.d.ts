import { ManageUserService } from './manage-user.service';
import { CreateManageUserDto } from './dto/create-manage-user.dto';
import { UpdateManageUserDto } from './dto/update-manage-user.dto';
export declare class ManageUserController {
    private readonly manageUserService;
    constructor(manageUserService: ManageUserService);
    private hashPassword;
    create(createManageUserDto: CreateManageUserDto): Promise<import("./entities/manage-user.entity").Member>;
    findAll(): Promise<import("./entities/manage-user.entity").Member[]>;
    findOne(id: string): Promise<import("./entities/manage-user.entity").Member>;
    update(id: string, updateManageUserDto: UpdateManageUserDto): Promise<import("./entities/manage-user.entity").Member>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    editUsername(id: string, newUsername: string): Promise<import("./entities/manage-user.entity").Member>;
    removeProfilePicture(id: string): Promise<import("./entities/manage-user.entity").Member>;
    assignRole(id: string, newRole: string): Promise<import("./entities/manage-user.entity").Member>;
    limitUserActions(id: string, restrictions: string[]): Promise<import("./entities/manage-user.entity").Member>;
    banUser(id: string): Promise<import("./entities/manage-user.entity").Member>;
    findByEmail(email: string): Promise<import("./entities/manage-user.entity").Member>;
}
