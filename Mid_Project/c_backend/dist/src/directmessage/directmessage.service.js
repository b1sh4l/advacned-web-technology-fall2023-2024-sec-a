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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectmessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const directmessage_entity_1 = require("./entities/directmessage.entity");
let DirectmessageService = class DirectmessageService {
    constructor(directmessageRepository) {
        this.directmessageRepository = directmessageRepository;
    }
    async create(createDirectmessageDto) {
        const { senderId, receiverId, messageContent } = createDirectmessageDto;
        const directmessage = this.directmessageRepository.create({
            sender: { id: senderId },
            receiver: { id: receiverId },
            messageContent,
        });
        const createdDirectmessage = await this.directmessageRepository.save(directmessage);
        return createdDirectmessage;
    }
    async findAll() {
        const allDirectmessages = await this.directmessageRepository.find();
        return allDirectmessages;
    }
    async findOne(id) {
        const directmessage = await this.directmessageRepository.findOne({ where: { id } });
        if (!directmessage) {
            throw new common_1.NotFoundException(`Direct message with ID ${id} not found`);
        }
        return directmessage;
    }
    async getMessagesBySenderId(senderId) {
        const messages = await this.directmessageRepository.find({
            where: { sender: { id: senderId } },
        });
        if (!messages || messages.length === 0) {
            throw new common_1.NotFoundException(`No messages found for sender with ID ${senderId}`);
        }
        return messages;
    }
    async getMessagesByReceiverId(receiverId) {
        const messages = await this.directmessageRepository.find({
            where: { receiver: { id: receiverId } },
        });
        if (!messages || messages.length === 0) {
            throw new common_1.NotFoundException(`No messages found for sender with ID ${receiverId}`);
        }
        return messages;
    }
    async remove(id) {
        const directMessage = await this.directmessageRepository.findOne({ where: { id } });
        if (!directMessage) {
            throw new common_1.NotFoundException(`Direct message with ID ${id} not found`);
        }
        await this.directmessageRepository.remove(directMessage);
        return `Direct message with ID ${id} deleted successfully`;
    }
};
exports.DirectmessageService = DirectmessageService;
exports.DirectmessageService = DirectmessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(directmessage_entity_1.DirectMessage)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DirectmessageService);
//# sourceMappingURL=directmessage.service.js.map