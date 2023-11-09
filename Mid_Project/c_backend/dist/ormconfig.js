"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manage_user_entity_1 = require("./src/manage-user/entities/manage-user.entity");
const server_entity_1 = require("./src/server/entities/server.entity");
const servermembers_entity_1 = require("./src/server/entities/servermembers.entity");
const channel_entity_1 = require("./src/Channel/entities/channel.entity");
const channelmembers_entity_1 = require("./src/Channel/entities/channelmembers.entity");
const groupchat_entity_1 = require("./src/groupchat/entities/groupchat.entity");
const groupmembers_entity_1 = require("./src/groupchat/entities/groupmembers.entity");
const directmessage_entity_1 = require("./src/directmessage/entities/directmessage.entity");
const Config = {
    type: "postgres",
    database: "Communify",
    host: "localhost",
    port: 5000,
    username: "postgres",
    password: 'Bishal101',
    entities: [manage_user_entity_1.Member, directmessage_entity_1.DirectMessage, groupchat_entity_1.GroupChat, groupmembers_entity_1.GroupMembers, server_entity_1.Server, servermembers_entity_1.ServerMembers, channel_entity_1.Channel, channelmembers_entity_1.ChannelMembers],
    synchronize: true,
};
exports.default = Config;
//# sourceMappingURL=ormconfig.js.map