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
exports.Member = void 0;
const typeorm_1 = require("typeorm");
const directmessage_entity_1 = require("../../directmessage/entities/directmessage.entity");
const groupmembers_entity_1 = require("../../groupchat/entities/groupmembers.entity");
const servermembers_entity_1 = require("../../server/entities/servermembers.entity");
let Member = class Member {
};
exports.Member = Member;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Member.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Member.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Member.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Member.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Member.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, unique: true }),
    __metadata("design:type", String)
], Member.prototype, "mobileno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Member.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "profile_picture", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Member.prototype, "member_since", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Member.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Member.prototype, "is_banned", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => directmessage_entity_1.DirectMessage, directMessage => directMessage.sender),
    __metadata("design:type", Array)
], Member.prototype, "sentMessages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => directmessage_entity_1.DirectMessage, directMessage => directMessage.receiver),
    __metadata("design:type", Array)
], Member.prototype, "receivedMessages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => groupmembers_entity_1.GroupMembers, groupMember => groupMember.member),
    __metadata("design:type", Array)
], Member.prototype, "groupMembers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => servermembers_entity_1.ServerMembers, serverMember => serverMember.member),
    __metadata("design:type", Array)
], Member.prototype, "serverMembers", void 0);
exports.Member = Member = __decorate([
    (0, typeorm_1.Entity)()
], Member);
//# sourceMappingURL=manage-user.entity.js.map