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
exports.Server = void 0;
const typeorm_1 = require("typeorm");
const servermembers_entity_1 = require("./servermembers.entity");
let Server = class Server {
};
exports.Server = Server;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Server.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, name: 'server_name' }),
    __metadata("design:type", String)
], Server.prototype, "serverName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, name: 'server_type' }),
    __metadata("design:type", String)
], Server.prototype, "serverType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => servermembers_entity_1.ServerMembers, serverMember => serverMember.server),
    __metadata("design:type", Array)
], Server.prototype, "serverMembers", void 0);
exports.Server = Server = __decorate([
    (0, typeorm_1.Entity)()
], Server);
//# sourceMappingURL=server.entity.js.map