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
exports.ServerController = void 0;
const common_1 = require("@nestjs/common");
const server_service_1 = require("./server.service");
const create_server_dto_1 = require("./dto/create-server.dto");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ServerController = class ServerController {
    constructor(serverService) {
        this.serverService = serverService;
    }
    create(createServerDto) {
        if (!createServerDto || !createServerDto.serverName) {
            throw new common_2.BadRequestException('Server name is required.');
        }
        return this.serverService.create(createServerDto);
    }
    findAll() {
        return this.serverService.findAll();
    }
    findOne(id) {
        return this.serverService.findOne(+id);
    }
    updateServerName(id, newServerName) {
        return this.serverService.updateServerName(+id, newServerName);
    }
    remove(id) {
        return this.serverService.remove(+id);
    }
    inviteMember(serverId, memberId, role) {
        return this.serverService.inviteMember(+serverId, +memberId, role);
    }
};
exports.ServerController = ServerController;
__decorate([
    (0, common_1.Post)('create-server'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_server_dto_1.CreateServerDto]),
    __metadata("design:returntype", void 0)
], ServerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update-server-name/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('newServerName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ServerController.prototype, "updateServerName", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServerController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/invite-member'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('memberId')),
    __param(2, (0, common_1.Body)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], ServerController.prototype, "inviteMember", null);
exports.ServerController = ServerController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('server'),
    (0, swagger_1.ApiTags)('Server'),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    __metadata("design:paramtypes", [server_service_1.ServerService])
], ServerController);
//# sourceMappingURL=server.controller.js.map