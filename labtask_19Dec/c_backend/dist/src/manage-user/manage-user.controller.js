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
exports.ManageUserController = void 0;
const common_1 = require("@nestjs/common");
const manage_user_service_1 = require("./manage-user.service");
const create_manage_user_dto_1 = require("./dto/create-manage-user.dto");
const update_manage_user_dto_1 = require("./dto/update-manage-user.dto");
const swagger_1 = require("@nestjs/swagger");
const bcrypt = require("bcrypt");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ManageUserController = class ManageUserController {
    constructor(manageUserService) {
        this.manageUserService = manageUserService;
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    async create(createManageUserDto) {
        const hashedPassword = await this.hashPassword(createManageUserDto.password);
        const user = { ...createManageUserDto, password: hashedPassword };
        return this.manageUserService.create(user);
    }
    findAll() {
        return this.manageUserService.findAll();
    }
    findOne(id) {
        return this.manageUserService.findOne(+id);
    }
    update(id, updateManageUserDto) {
        return this.manageUserService.update(+id, updateManageUserDto);
    }
    remove(id) {
        return this.manageUserService.remove(+id);
    }
    editUsername(id, newUsername) {
        return this.manageUserService.editUsername(+id, newUsername);
    }
    removeProfilePicture(id) {
        return this.manageUserService.removeProfilePicture(+id);
    }
    assignRole(id, newRole) {
        return this.manageUserService.assignRole(+id, newRole);
    }
    limitUserActions(id, restrictions) {
        return this.manageUserService.limitUserActions(+id, restrictions);
    }
    banUser(id) {
        return this.manageUserService.banUser(+id);
    }
    findByEmail(email) {
        return this.manageUserService.getMemberByEmail(email);
    }
};
exports.ManageUserController = ManageUserController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_manage_user_dto_1.CreateManageUserDto]),
    __metadata("design:returntype", Promise)
], ManageUserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_manage_user_dto_1.UpdateManageUserDto]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)('edit-username/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('newUsername')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "editUsername", null);
__decorate([
    (0, common_1.Put)('remove-profile-picture/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "removeProfilePicture", null);
__decorate([
    (0, common_1.Patch)('assign-role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('newRole')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "assignRole", null);
__decorate([
    (0, common_1.Put)('limit-user-actions/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('restrictions')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "limitUserActions", null);
__decorate([
    (0, common_1.Put)('ban-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "banUser", null);
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManageUserController.prototype, "findByEmail", null);
exports.ManageUserController = ManageUserController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('manage-user'),
    (0, swagger_1.ApiTags)('Manage User'),
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    __metadata("design:paramtypes", [manage_user_service_1.ManageUserService])
], ManageUserController);
//# sourceMappingURL=manage-user.controller.js.map