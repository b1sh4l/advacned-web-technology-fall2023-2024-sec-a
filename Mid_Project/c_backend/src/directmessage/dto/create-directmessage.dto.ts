import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateDirectmessageDto {
  @IsNotEmpty()
  @IsInt()
  senderId: number;

  @IsNotEmpty()
  @IsInt()
  receiverId: number;

  @IsNotEmpty()
  @IsString()
  messageContent: string;
}
