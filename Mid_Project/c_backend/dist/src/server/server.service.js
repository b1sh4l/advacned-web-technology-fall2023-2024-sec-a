"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const server_entity_1 = require("./entities/server.entity");
const manage_user_entity_1 = require("../manage-user/entities/manage-user.entity");
const servermembers_entity_1 = require("./entities/servermembers.entity");
let ServerService = class ServerService {
    constructor(serverRepo, memberRepository, serverMemberRepository) {
        this.serverRepo = serverRepo;
        this.memberRepository = memberRepository;
        this.serverMemberRepository = serverMemberRepository;
    }
    async create(createServerDto) {
        const server = await this.serverRepo.create(createServerDto);
        return await this.serverRepo.save(server);
    }
    async findAll() {
        return await this.serverRepo.find();
    }
    async findOne(id) {
        const server = await this.serverRepo.findOne({ where: { id } });
        if (!server) {
            throw new common_1.NotFoundException(`Server with ID ${id} not found`);
        }
        return server;
    }
    async update(id, updateServerDto) {
        const server = await this.serverRepo.findOne({ where: { id } });
        Object.keys(updateServerDto).forEach(key => {
            if (updateServerDto[key] !== undefined) {
                server[key] = updateServerDto[key];
            }
        });
    }
    async updateServerName(id, newServerName) {
        await this.findOne(id);
        const server = await this.serverRepo.findOne({ where: { id } });
        server.serverName = newServerName;
        return await this.serverRepo.save(server);
    }
    async remove(id) {
        await this.findOne(id);
        return await this.serverRepo.delete(id);
    }
    async inviteMember(serverId, memberId, role) {
        const server = await this.findOne(serverId);
        if (!server) {
            throw new common_1.NotFoundException(`Server with ID ${serverId} not found`);
        }
        const members = await this.memberRepository.findByIds([memberId]);
        const member = members[0];
        if (!member) {
            throw new common_1.NotFoundException(`Member with ID ${memberId} not found`);
        }
        server.serverMembers = server.serverMembers || [];
        const existingMemberInServer = server.serverMembers.find(sm => sm.member.id === memberId);
        if (existingMemberInServer) {
            throw new common_1.NotFoundException(`Member with ID ${memberId} is already part of the server`);
        }
        const serverMember = new servermembers_entity_1.ServerMembers();
        serverMember.server = server;
        serverMember.member = member;
        serverMember.memberRole = role;
        return await this.serverMemberRepository.save(serverMember);
    }
};
exports.ServerService = ServerService;
exports.ServerService = ServerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(server_entity_1.Server)),
    __param(1, (0, typeorm_1.InjectRepository)(manage_user_entity_1.Member)),
    __param(2, (0, typeorm_1.InjectRepository)(servermembers_entity_1.ServerMembers)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ServerService);
//# sourceMappingURL=server.service.js.map