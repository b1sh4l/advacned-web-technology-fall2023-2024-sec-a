import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from "src/manage-user/entities/manage-user.entity";
import { CreateManageUserDto } from './dto/create-manage-user.dto';
import { UpdateManageUserDto } from './dto/update-manage-user.dto';

@Injectable()
export class ManageUserService {

  constructor(@InjectRepository(Member) private readonly memberRepo: Repository<Member>){

  }

  async create(createManageUserDto: CreateManageUserDto) {
    const user = await this.memberRepo.create(createManageUserDto);
        return await this.memberRepo.save(user);
  }

  findAll() {
    return `This action returns all manageUser`;
  }

  async findOne(id: number) {
    return await this.memberRepo.findOne({where: {id:id}});
  }

  async update(id: number, updateManageUserDto: UpdateManageUserDto) {
    return await this.memberRepo.update(id, updateManageUserDto);
  }

  async remove(id: number) {
    return await this.memberRepo.delete(id);
  }
}
