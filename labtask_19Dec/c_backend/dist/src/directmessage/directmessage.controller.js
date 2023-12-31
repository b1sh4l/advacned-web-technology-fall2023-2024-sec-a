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
exports.DirectmessageController = void 0;
const common_1 = require("@nestjs/common");
const directmessage_service_1 = require("./directmessage.service");
const create_directmessage_dto_1 = require("./dto/create-directmessage.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let DirectmessageController = class DirectmessageController {
    constructor(directmessageService) {
        this.directmessageService = directmessageService;
    }
    create(createDirectmessageDto) {
        return this.directmessageService.create(createDirectmessageDto);
    }
    findAll() {
        return this.directmessageService.findAll();
    }
    findOne(id) {
        return this.directmessageService.findOne(+id);
    }
    getMessagesBySenderId(senderId) {
        return this.directmessageService.getMessagesBySenderId(+senderId);
    }
    getMessagesByReceiverId(receiverId) {
        return this.directmessageService.getMessagesByReceiverId(+receiverId);
    }
    remove(id) {
        return this.directmessageService.remove(+id);
    }
};
exports.DirectmessageController = DirectmessageController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_directmessage_dto_1.CreateDirectmessageDto]),
    __metadata("design:returntype", void 0)
], DirectmessageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DirectmessageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectmessageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('messages/sender/:senderId'),
    __param(0, (0, common_1.Param)('senderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectmessageController.prototype, "getMessagesBySenderId", null);
__decorate([
    (0, common_1.Get)('messages/receiver/:receiverId'),
    __param(0, (0, common_1.Param)('receiverId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectmessageController.prototype, "getMessagesByReceiverId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DirectmessageController.prototype, "remove", null);
exports.DirectmessageController = DirectmessageController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('directmessage'),
    (0, swagger_1.ApiTags)('Direct Messages'),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    __metadata("design:paramtypes", [directmessage_service_1.DirectmessageService])
], DirectmessageController);
//# sourceMappingURL=directmessage.controller.js.map