import { Repository } from 'typeorm';
import { Member } from "src/manage-user/entities/manage-user.entity";
import { CreateManageUserDto } from './dto/create-manage-user.dto';
import { UpdateManageUserDto } from './dto/update-manage-user.dto';
export declare class ManageUserService {
    private readonly memberRepo;
    constructor(memberRepo: Repository<Member>);
    create(createManageUserDto: CreateManageUserDto): Promise<Member>;
    findAll(): Promise<Member[]>;
    findOne(id: number): Promise<Member>;
    update(id: number, updateManageUserDto: UpdateManageUserDto): Promise<Member>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    editUsername(id: number, newUsername: string): Promise<Member>;
    removeProfilePicture(id: number): Promise<Member>;
    assignRole(id: number, newRole: string): Promise<Member>;
    limitUserActions(id: number, restrictions: string[]): Promise<Member>;
    banUser(id: number): Promise<Member>;
    getMemberByEmail(email: string): Promise<Member | undefined>;
}
