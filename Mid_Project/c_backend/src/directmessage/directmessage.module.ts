import { Module } from '@nestjs/common';
import { DirectmessageService } from './directmessage.service';
import { DirectmessageController } from './directmessage.controller';

@Module({
  controllers: [DirectmessageController],
  providers: [DirectmessageService],
})
export class DirectmessageModule {}
