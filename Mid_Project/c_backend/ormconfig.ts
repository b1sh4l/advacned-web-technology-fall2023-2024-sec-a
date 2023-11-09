import { Member } from "src/manage-user/entities/manage-user.entity";
import { Server } from "src/server/entities/server.entity";
import { ServerMembers } from "src/server/entities/servermembers.entity";
import { Channel } from "src/Channel/entities/channel.entity";
import { ChannelMembers } from "src/Channel/entities/channelmembers.entity";
import { GroupChat } from "src/groupchat/entities/groupchat.entity";
import { GroupMembers } from "src/groupchat/entities/groupmembers.entity";
import { DirectMessage } from "src/directmessage/entities/directmessage.entity";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

const Config: PostgresConnectionOptions = {
    type: "postgres",
    database: "Communify",
    host: "localhost",
    port: 5000,
    username: "postgres",
    password: 'Bishal101',
    entities: [Member, DirectMessage, GroupChat, GroupMembers,  Server, ServerMembers, Channel, ChannelMembers],
    synchronize: true,
}

export default Config;