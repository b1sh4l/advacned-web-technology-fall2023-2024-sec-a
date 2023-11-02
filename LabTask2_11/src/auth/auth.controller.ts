import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from "./auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard)
    @Get('signup')
    signup(){
        return this.authService.signup();
    }

    @Get('signin')
    signin(){
        return this.authService.signin();
    }

 

}
