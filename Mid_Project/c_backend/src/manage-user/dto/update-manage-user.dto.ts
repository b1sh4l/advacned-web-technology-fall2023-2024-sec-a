import { IsNotEmpty, IsEmail, IsString, IsBoolean } from 'class-validator';

export class UpdateManageUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  mobileno: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  profile_picture?: string;

  @IsNotEmpty()
  member_since: Date;

  role?: string;

  @IsNotEmpty()
  @IsBoolean()
  is_banned: boolean;
}
