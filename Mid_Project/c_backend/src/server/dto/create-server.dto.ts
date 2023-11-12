import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServerDto {
    @IsNotEmpty({ message: 'Server name is required' })
    @IsString({ message: 'Server name must be a string' })
    serverName: string;

    @IsNotEmpty({ message: 'Server type is required' })
    @IsString({ message: 'Server type must be a string' })
    serverType: string;
}
