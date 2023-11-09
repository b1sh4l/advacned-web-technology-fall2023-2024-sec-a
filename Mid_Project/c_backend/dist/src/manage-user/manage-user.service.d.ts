import { Repository } from 'typeorm';
import { Member } from "src/manage-user/entities/manage-user.entity";
import { CreateManageUserDto } from './dto/create-manage-user.dto';
import { UpdateManageUserDto } from './dto/update-manage-user.dto';
export declare class ManageUserService {
    private readonly memberRepo;
    constructor(memberRepo: Repository<Member>);
    create(createManageUserDto: CreateManageUserDto): Promise<Member>;
    findAll(): string;
    findOne(id: number): Promise<Member>;
    update(id: number, updateManageUserDto: UpdateManageUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
