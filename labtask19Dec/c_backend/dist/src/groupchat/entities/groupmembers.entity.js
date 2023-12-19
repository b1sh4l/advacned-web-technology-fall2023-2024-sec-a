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
exports.GroupMembers = void 0;
const typeorm_1 = require("typeorm");
const groupchat_entity_1 = require("./groupchat.entity");
const manage_user_entity_1 = require("../../manage-user/entities/manage-user.entity");
let GroupMembers = class GroupMembers {
};
exports.GroupMembers = GroupMembers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GroupMembers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => groupchat_entity_1.GroupChat, groupChat => groupChat.groupMembers),
    __metadata("design:type", groupchat_entity_1.GroupChat)
], GroupMembers.prototype, "groupChat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => manage_user_entity_1.Member, member => member.groupMembers),
    __metadata("design:type", manage_user_entity_1.Member)
], GroupMembers.prototype, "member", void 0);
exports.GroupMembers = GroupMembers = __decorate([
    (0, typeorm_1.Entity)("GroupMembers")
], GroupMembers);
//# sourceMappingURL=groupmembers.entity.js.map