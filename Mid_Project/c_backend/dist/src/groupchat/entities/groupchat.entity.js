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
exports.GroupChat = void 0;
const typeorm_1 = require("typeorm");
const groupmembers_entity_1 = require("./groupmembers.entity");
let GroupChat = class GroupChat {
};
exports.GroupChat = GroupChat;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GroupChat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, name: 'group_name' }),
    __metadata("design:type", String)
], GroupChat.prototype, "groupName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, name: 'group_type' }),
    __metadata("design:type", String)
], GroupChat.prototype, "groupType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => groupmembers_entity_1.GroupMembers, groupMembers => groupMembers.groupChat),
    __metadata("design:type", Array)
], GroupChat.prototype, "groupMembers", void 0);
exports.GroupChat = GroupChat = __decorate([
    (0, typeorm_1.Entity)()
], GroupChat);
//# sourceMappingURL=groupchat.entity.js.map