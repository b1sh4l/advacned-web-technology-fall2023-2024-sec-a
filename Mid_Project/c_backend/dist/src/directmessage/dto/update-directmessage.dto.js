"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDirectmessageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_directmessage_dto_1 = require("./create-directmessage.dto");
class UpdateDirectmessageDto extends (0, mapped_types_1.PartialType)(create_directmessage_dto_1.CreateDirectmessageDto) {
}
exports.UpdateDirectmessageDto = UpdateDirectmessageDto;
//# sourceMappingURL=update-directmessage.dto.js.map