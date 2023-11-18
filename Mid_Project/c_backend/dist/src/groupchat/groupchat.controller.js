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
exports.GroupchatController = void 0;
const common_1 = require("@nestjs/common");
const groupchat_service_1 = require("./groupchat.service");
const create_groupchat_dto_1 = require("./dto/create-groupchat.dto");
const create_groupmembers_dto_1 = require("./dto/create-groupmembers.dto");
const update_groupchat_dto_1 = require("./dto/update-groupchat.dto");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let GroupchatController = class GroupchatController {
    constructor(groupchatService) {
        this.groupchatService = groupchatService;
    }
    async create(createGroupchatDto) {
        try {
            const createdGroup = await this.groupchatService.create(createGroupchatDto);
            return { message: 'Group created successfully', group: createdGroup };
        }
        catch (error) {
            return { message: 'Failed to create group', error: error.message };
        }
    }
    async findAll() {
        try {
            const groups = await this.groupchatService.findAll();
            return { groups };
        }
        catch (error) {
            return { message: 'Failed to fetch groups', error: error.message };
        }
    }
    async findOne(id) {
        try {
            const group = await this.groupchatService.findOne(+id);
            return { group };
        }
        catch (error) {
            return { message: 'Group not found', error: error.message };
        }
    }
    async update(id, updateGroupchatDto) {
        try {
            const updatedGroup = await this.groupchatService.update(+id, updateGroupchatDto);
            return { message: 'Group updated successfully', group: updatedGroup };
        }
        catch (error) {
            return { message: 'Failed to update group', error: error.message };
        }
    }
    async invite(groupId, createGroupMembersDto) {
        try {
            await this.groupchatService.invite(+groupId, createGroupMembersDto);
            return { message: 'User invited to the group successfully' };
        }
        catch (error) {
            if (error instanceof common_2.BadRequestException) {
                return { message: 'Failed to invite user to the group', error: error.message };
            }
            return { message: 'Internal server error', error: error.message };
        }
    }
    async remove(id) {
        try {
            await this.groupchatService.remove(+id);
            return { message: 'Group deleted successfully' };
        }
        catch (error) {
            return { message: 'Failed to delete group', error: error.message };
        }
    }
};
exports.GroupchatController = GroupchatController;
__decorate([
    (0, common_1.Post)('create-group'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_groupchat_dto_1.CreateGroupchatDto]),
    __metadata("design:returntype", Promise)
], GroupchatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('groups'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupchatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('group/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupchatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update-group/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_groupchat_dto_1.UpdateGroupchatDto]),
    __metadata("design:returntype", Promise)
], GroupchatController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('invite/:groupId'),
    __param(0, (0, common_1.Param)('groupId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_groupmembers_dto_1.CreateGroupMembersDto]),
    __metadata("design:returntype", Promise)
], GroupchatController.prototype, "invite", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupchatController.prototype, "remove", null);
exports.GroupchatController = GroupchatController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('groupchat'),
    (0, swagger_1.ApiTags)('Group Chat'),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    __metadata("design:paramtypes", [groupchat_service_1.GroupchatService])
], GroupchatController);
//# sourceMappingURL=groupchat.controller.js.map