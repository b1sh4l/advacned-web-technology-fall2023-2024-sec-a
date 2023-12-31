"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupchatModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const groupchat_entity_1 = require("./entities/groupchat.entity");
const groupmembers_entity_1 = require("./entities/groupmembers.entity");
const groupchat_service_1 = require("./groupchat.service");
const groupchat_controller_1 = require("./groupchat.controller");
let GroupchatModule = class GroupchatModule {
};
exports.GroupchatModule = GroupchatModule;
exports.GroupchatModule = GroupchatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([groupchat_entity_1.GroupChat, groupmembers_entity_1.GroupMembers])],
        controllers: [groupchat_controller_1.GroupchatController],
        providers: [groupchat_service_1.GroupchatService],
    })
], GroupchatModule);
//# sourceMappingURL=groupchat.module.js.map