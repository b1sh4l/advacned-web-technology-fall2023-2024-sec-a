import { JwtService } from '@nestjs/jwt';
import { ManageUserService } from '../manage-user/manage-user.service';
export declare class AuthService {
    private manageUserService;
    private jwtService;
    constructor(manageUserService: ManageUserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(member: any): Promise<any>;
}
