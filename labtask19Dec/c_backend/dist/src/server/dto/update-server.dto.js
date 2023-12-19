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
exports.UpdateServerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_server_dto_1 = require("./create-server.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateServerDto extends (0, mapped_types_1.PartialType)(create_server_dto_1.CreateServerDto) {
}
exports.UpdateServerDto = UpdateServerDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Server name is required' }),
    (0, class_validator_1.IsString)({ message: 'Server name must be a string' }),
    __metadata("design:type", String)
], UpdateServerDto.prototype, "serverName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Server type is required' }),
    (0, class_validator_1.IsString)({ message: 'Server type must be a string' }),
    __metadata("design:type", String)
], UpdateServerDto.prototype, "serverType", void 0);
//# sourceMappingURL=update-server.dto.js.map