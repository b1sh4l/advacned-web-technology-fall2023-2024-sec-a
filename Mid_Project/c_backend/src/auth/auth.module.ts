import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; 
import { PassportModule } from '@nestjs/passport';
import { ManageUserModule } from "src/manage-user/manage-user.module"
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule, ManageUserModule], 
  providers: [ LocalStrategy],
})
export class AuthModule {}