import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Server } from './entities/server.entity';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Member } from 'src/manage-user/entities/manage-user.entity';
import { ServerMembers } from './entities/servermembers.entity';


@Injectable()
export class ServerService {

  constructor(
    @InjectRepository(Server)
    private readonly serverRepo: Repository<Server>,
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    @InjectRepository(ServerMembers)
    private readonly serverMemberRepository: Repository<ServerMembers>,
  ) {}

  async create(createServerDto: CreateServerDto) {
    const server = await this.serverRepo.create(createServerDto);
    return await this.serverRepo.save(server);
  }

  async findAll() {
    return await this.serverRepo.find();
  }

  async findOne(id: number) {
    const server = await this.serverRepo.findOne({where : {id}});
    if (!server) {
      throw new NotFoundException(`Server with ID ${id} not found`);
    }
    return server;
  }


  async update(id: number, updateServerDto: UpdateServerDto) {
    const server = await this.serverRepo.findOne({where : {id}});
    Object.keys(updateServerDto).forEach(key => {
      if (updateServerDto[key] !== undefined) {
        server[key] = updateServerDto[key];
      }
    });
  }

  async updateServerName(id: number, newServerName: string) {
    await this.findOne(id); 
    const server = await this.serverRepo.findOne({ where: { id } });
    server.serverName = newServerName;
    return await this.serverRepo.save(server);
  }

  async remove(id: number) {
    await this.findOne(id); 
    return await this.serverRepo.delete(id);
  }

  async inviteMember(serverId: number, memberId: number, role: string) {
    const server = await this.findOne(serverId);
  
    if (!server) {
      throw new NotFoundException(`Server with ID ${serverId} not found`);
    }
  
    const members = await this.memberRepository.findByIds([memberId]);
    const member = members[0];
  
    if (!member) {
      throw new NotFoundException(`Member with ID ${memberId} not found`);
    }
  
    server.serverMembers = server.serverMembers || [];

    const existingMemberInServer = server.serverMembers.find(sm => sm.member.id === memberId);
    if (existingMemberInServer) {
      throw new NotFoundException(`Member with ID ${memberId} is already part of the server`);
    }
  
    const serverMember = new ServerMembers();
    serverMember.server = server;
    serverMember.member = member;
    serverMember.memberRole = role;
  
    return await this.serverMemberRepository.save(serverMember);
  }
  
}
