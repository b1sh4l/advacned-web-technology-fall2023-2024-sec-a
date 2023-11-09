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
exports.DirectMessage = void 0;
const typeorm_1 = require("typeorm");
const manage_user_entity_1 = require("../../manage-user/entities/manage-user.entity");
let DirectMessage = class DirectMessage {
};
exports.DirectMessage = DirectMessage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DirectMessage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => manage_user_entity_1.Member, member => member.sentMessages),
    __metadata("design:type", manage_user_entity_1.Member)
], DirectMessage.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => manage_user_entity_1.Member, member => member.receivedMessages),
    __metadata("design:type", manage_user_entity_1.Member)
], DirectMessage.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'message_content' }),
    __metadata("design:type", String)
], DirectMessage.prototype, "messageContent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], DirectMessage.prototype, "timestamp", void 0);
exports.DirectMessage = DirectMessage = __decorate([
    (0, typeorm_1.Entity)()
], DirectMessage);
//# sourceMappingURL=directmessage.entity.js.map