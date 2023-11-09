"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelService = void 0;
const common_1 = require("@nestjs/common");
let ChannelService = class ChannelService {
    create(createChannelDto) {
        return 'This action adds a new channel';
    }
    findAll() {
        return `This action returns all channel`;
    }
    findOne(id) {
        return `This action returns a #${id} channel`;
    }
    update(id, updateChannelDto) {
        return `This action updates a #${id} channel`;
    }
    remove(id) {
        return `This action removes a #${id} channel`;
    }
    getHello() {
        return 'Hello World!';
    }
};
exports.ChannelService = ChannelService;
exports.ChannelService = ChannelService = __decorate([
    (0, common_1.Injectable)()
], ChannelService);
//# sourceMappingURL=channel.service.js.map