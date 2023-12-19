"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerModule = void 0;
const common_1 = require("@nestjs/common");
const server_service_1 = require("./server.service");
const server_controller_1 = require("./server.controller");
const typeorm_1 = require("@nestjs/typeorm");
const server_entity_1 = require("./entities/server.entity");
const channel_entity_1 = require("../channel/entities/channel.entity");
const manage_user_entity_1 = require("../manage-user/entities/manage-user.entity");
const servermembers_entity_1 = require("./entities/servermembers.entity");
let ServerModule = class ServerModule {
};
exports.ServerModule = ServerModule;
exports.ServerModule = ServerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([server_entity_1.Server, manage_user_entity_1.Member, channel_entity_1.Channel, servermembers_entity_1.ServerMembers])],
        controllers: [server_controller_1.ServerController],
        providers: [server_service_1.ServerService],
    })
], ServerModule);
//# sourceMappingURL=server.module.js.map