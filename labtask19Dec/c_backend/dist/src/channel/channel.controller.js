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
exports.ChannelController = void 0;
const common_1 = require("@nestjs/common");
const channel_service_1 = require("./channel.service");
const create_channel_dto_1 = require("./dto/create-channel.dto");
const update_channel_dto_1 = require("./dto/update-channel.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ChannelController = class ChannelController {
    constructor(channelService) {
        this.channelService = channelService;
    }
    async create(createChannelDto) {
        try {
            const createdChannel = await this.channelService.create(createChannelDto);
            return { success: true, data: createdChannel };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async findAll() {
        try {
            const channels = await this.channelService.findAll();
            return { success: true, data: channels };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async findOne(id) {
        try {
            const channel = await this.channelService.findOne(+id);
            return { success: true, data: channel };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async update(id, updateChannelDto) {
        try {
            const updatedChannel = await this.channelService.update(+id, updateChannelDto);
            return { success: true, data: updatedChannel };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async remove(id) {
        try {
            await this.channelService.remove(+id);
            return { success: true, message: 'Channel deleted successfully' };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
};
exports.ChannelController = ChannelController;
__decorate([
    (0, common_1.Post)('create-channel'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_channel_dto_1.CreateChannelDto]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('channel-list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('channel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update-channel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_channel_dto_1.UpdateChannelDto]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "remove", null);
exports.ChannelController = ChannelController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('channel'),
    (0, swagger_1.ApiTags)("Channel"),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    __metadata("design:paramtypes", [channel_service_1.ChannelService])
], ChannelController);
//# sourceMappingURL=channel.controller.js.map