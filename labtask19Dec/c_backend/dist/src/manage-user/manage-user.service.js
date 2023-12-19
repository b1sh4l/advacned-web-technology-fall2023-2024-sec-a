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
exports.ManageUserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const manage_user_entity_1 = require("./entities/manage-user.entity");
let ManageUserService = class ManageUserService {
    constructor(memberRepo) {
        this.memberRepo = memberRepo;
    }
    async create(createManageUserDto) {
        const user = await this.memberRepo.create(createManageUserDto);
        return await this.memberRepo.save(user);
    }
    async findAll() {
        return await this.memberRepo.find();
    }
    async findOne(id) {
        return await this.memberRepo.findOne({ where: { id: id } });
    }
    async update(id, updateManageUserDto) {
        const member = await this.memberRepo.findOne({ where: { id } });
        Object.keys(updateManageUserDto).forEach(key => {
            if (updateManageUserDto[key] !== undefined) {
                member[key] = updateManageUserDto[key];
            }
        });
        await this.memberRepo.save(member);
        const updatedMember = await this.memberRepo.findOne({ where: { id } });
        return updatedMember;
    }
    async remove(id) {
        return await this.memberRepo.delete(id);
    }
    async editUsername(id, newUsername) {
        const user = await this.findOne(id);
        user.username = newUsername;
        return await this.memberRepo.save(user);
    }
    async removeProfilePicture(id) {
        const user = await this.findOne(id);
        user.profile_picture = null;
        return await this.memberRepo.save(user);
    }
    async assignRole(id, newRole) {
        const user = await this.memberRepo.findOne({ where: { id } });
        user.role = newRole;
        return await this.memberRepo.save(user);
    }
    async limitUserActions(id, restrictions) {
        const user = await this.findOne(id);
        return await this.memberRepo.save(user);
    }
    async banUser(id) {
        const user = await this.findOne(id);
        user.is_banned = true;
        return await this.memberRepo.save(user);
    }
    async getMemberByEmail(email) {
        const member = await this.memberRepo.findOne({ where: { email } });
        if (!member) {
            console.log('Member not found for email:', email);
            throw new common_1.BadRequestException('Email not found');
        }
        return member;
    }
};
exports.ManageUserService = ManageUserService;
exports.ManageUserService = ManageUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(manage_user_entity_1.Member)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ManageUserService);
//# sourceMappingURL=manage-user.service.js.map