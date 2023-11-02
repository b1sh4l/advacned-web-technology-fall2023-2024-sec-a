import { IsString, IsNumberString, MinLength  } from "class-validator";

export class CreateUserDto{

    @IsString()
    @MinLength(2)
    eName: string;

    @IsNumberString()
    @MinLength(11)
    contactNo: string;

    @IsString()
    @MinLength(4)
    uName: string;

    @IsString()
    @MinLength(4)
    password: string;
}