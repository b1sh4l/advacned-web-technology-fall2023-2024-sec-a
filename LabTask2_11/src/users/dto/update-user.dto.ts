import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional, IsNumberString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional() // Makes the property optional for updates
  @MinLength(2)
  eName: string;

  @IsNumberString()
  @IsOptional()
  @MinLength(11)
  contactNo: string;

  @IsString()
  @IsOptional()
  @MinLength(4)
  uName: string;

  @IsString()
  @IsOptional()
  @MinLength(4)
  password: string;
}