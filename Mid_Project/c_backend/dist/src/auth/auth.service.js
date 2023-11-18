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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const manage_user_service_1 = require("../manage-user/manage-user.service");
let AuthService = class AuthService {
    constructor(manageUserService, jwtService) {
        this.manageUserService = manageUserService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        try {
            const member = await this.manageUserService.getMemberByEmail(email);
            if (!member) {
                throw new common_1.BadRequestException('Email not found');
            }
            const isPasswordValid = password === member.password;
            console.log('Input password:', password);
            console.log('Stored password:', member.password);
            if (!isPasswordValid) {
                console.error('Invalid password for email:', email);
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            return member;
        }
        catch (error) {
            console.error('Error during validation:', error);
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
    async login(member) {
        const payload = { email: member.email, sub: member.id };
        const token = this.jwtService.sign(payload);
        console.log('Generated token:', token);
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [manage_user_service_1.ManageUserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map