import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManageUserModule } from './manage-user/manage-user.module';
import { ServerModule } from './server/server.module';
import { ChannelModule } from 'src/channel/channel.module';
import { GroupchatModule } from './groupchat/groupchat.module';
import { DirectmessageModule } from './directmessage/directmessage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule  } from './auth/auth.module';





import  Config from 'ormconfig';

@Module({
  //imports: [ManageUserModule, ServerModule, ChannelModule, GroupchatModule, DirectmessageModule, TypeOrmModule.forRoot(Config), JwtAuthModule, AuthModule],
  imports: [ManageUserModule, ServerModule, ChannelModule, GroupchatModule, DirectmessageModule, TypeOrmModule.forRoot(Config), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
