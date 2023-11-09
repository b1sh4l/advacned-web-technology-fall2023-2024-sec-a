"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageUserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const manage_user_entity_1 = require("./entities/manage-user.entity");
const manage_user_service_1 = require("./manage-user.service");
const manage_user_controller_1 = require("./manage-user.controller");
let ManageUserModule = class ManageUserModule {
};
exports.ManageUserModule = ManageUserModule;
exports.ManageUserModule = ManageUserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([manage_user_entity_1.Member])],
        controllers: [manage_user_controller_1.ManageUserController],
        providers: [manage_user_service_1.ManageUserService],
    })
], ManageUserModule);
//# sourceMappingURL=manage-user.module.js.map