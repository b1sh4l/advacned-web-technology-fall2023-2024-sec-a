"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManageUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_manage_user_dto_1 = require("./create-manage-user.dto");
class UpdateManageUserDto extends (0, mapped_types_1.PartialType)(create_manage_user_dto_1.CreateManageUserDto) {
}
exports.UpdateManageUserDto = UpdateManageUserDto;
//# sourceMappingURL=update-manage-user.dto.js.map