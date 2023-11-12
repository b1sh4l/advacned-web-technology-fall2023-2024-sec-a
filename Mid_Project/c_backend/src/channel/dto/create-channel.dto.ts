import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChannelDto {
  @IsNotEmpty()
  @IsString()
  channelName: string;

  @IsNotEmpty()
  @IsString()
  channelType: string;
}