import { PartialType } from '@nestjs/mapped-types';
import { CreateChannelDto } from './create-channel.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateChannelDto extends PartialType(CreateChannelDto) {
  @IsNotEmpty()
  @IsString()
  channelName: string;

  @IsNotEmpty()
  @IsString()
  channelType: string;
}


