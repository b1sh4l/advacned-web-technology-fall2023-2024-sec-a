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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerMembers = void 0;
const typeorm_1 = require("typeorm");
const server_entity_1 = require("./server.entity");
const manage_user_entity_1 = require("../../manage-user/entities/manage-user.entity");
let ServerMembers = class ServerMembers {
};
exports.ServerMembers = ServerMembers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ServerMembers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => server_entity_1.Server, server => server.serverMembers),
    __metadata("design:type", server_entity_1.Server)
], ServerMembers.prototype, "server", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => manage_user_entity_1.Member, member => member.serverMembers),
    __metadata("design:type", manage_user_entity_1.Member)
], ServerMembers.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, name: 'member_role' }),
    __metadata("design:type", String)
], ServerMembers.prototype, "memberRole", void 0);
exports.ServerMembers = ServerMembers = __decorate([
    (0, typeorm_1.Entity)()
], ServerMembers);
//# sourceMappingURL=servermembers.entity.js.map