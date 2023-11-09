"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupchatDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_groupchat_dto_1 = require("./create-groupchat.dto");
class UpdateGroupchatDto extends (0, mapped_types_1.PartialType)(create_groupchat_dto_1.CreateGroupchatDto) {
}
exports.UpdateGroupchatDto = UpdateGroupchatDto;
//# sourceMappingURL=update-groupchat.dto.js.map