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
exports.GroupchatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const groupchat_entity_1 = require("./entities/groupchat.entity");
const groupmembers_entity_1 = require("./entities/groupmembers.entity");
let GroupchatService = class GroupchatService {
    constructor(groupchatRepository, groupMembersRepository) {
        this.groupchatRepository = groupchatRepository;
        this.groupMembersRepository = groupMembersRepository;
    }
    async create(createGroupchatDto) {
        const groupChat = await this.groupchatRepository.create(createGroupchatDto);
        return await this.groupchatRepository.save(groupChat);
    }
    async invite(groupId, createGroupMembersDto) {
        const { groupId: newGroupId, memberId } = createGroupMembersDto;
        if (groupId !== newGroupId) {
            throw new common_1.BadRequestException('Group ID in the URL does not match the one in the request body');
        }
        const group = await this.groupchatRepository.findOne({ where: { id: groupId } });
        if (!group) {
            throw new common_1.NotFoundException(`Group with ID ${groupId} not found`);
        }
        const maxAllowedMembers = 5;
        const currentMembersCount = await this.groupMembersRepository.count({
            where: { id: groupId },
        });
        if (currentMembersCount >= maxAllowedMembers) {
            throw new common_1.BadRequestException(`Group is already full. Maximum allowed members: ${maxAllowedMembers}`);
        }
        const existingMember = await this.groupMembersRepository.findOne({
            where: { groupChat: { id: groupId }, member: { id: memberId } },
        });
        if (existingMember) {
            throw new common_1.BadRequestException(`User with ID ${memberId} is already a member of the group`);
        }
        const groupMembers = this.groupMembersRepository.create({
            groupChat: { id: groupId },
            member: { id: memberId },
        });
        await this.groupMembersRepository.save(groupMembers);
    }
    async findAll() {
        return await this.groupchatRepository.find();
    }
    async findOne(id) {
        const group = await this.groupchatRepository.findOne({ where: { id } });
        if (!group) {
            throw new common_1.NotFoundException(`Group with ID ${id} not found`);
        }
        return group;
    }
    async update(id, updateGroupchatDto) {
        await this.findOne(id);
        const groupChat = await this.groupchatRepository.findOne({ where: { id } });
        groupChat.groupName = updateGroupchatDto.groupName;
        groupChat.groupType = updateGroupchatDto.groupType;
        return await this.groupchatRepository.save(groupChat);
    }
    async remove(id) {
        const group = await this.groupchatRepository.findOne({ where: { id }, relations: ['groupMembers'] });
        if (!group) {
            throw new common_1.NotFoundException(`Group with ID ${id} not found`);
        }
        if (group.groupMembers) {
            await this.groupMembersRepository.remove(group.groupMembers);
        }
        await this.groupchatRepository.delete(id);
        return `Group with ID ${id} deleted successfully`;
    }
    async getGroupMembers(groupId) {
        const group = await this.groupchatRepository.findOne({ where: { id: groupId }, relations: ['groupMembers'] });
        if (!group) {
            throw new common_1.NotFoundException(`Group with ID ${groupId} not found`);
        }
        return group.groupMembers.map((groupMember) => groupMember.member[0]);
    }
};
exports.GroupchatService = GroupchatService;
exports.GroupchatService = GroupchatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(groupchat_entity_1.GroupChat)),
    __param(1, (0, typeorm_1.InjectRepository)(groupmembers_entity_1.GroupMembers)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GroupchatService);
//# sourceMappingURL=groupchat.service.js.map