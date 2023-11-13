import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from "passport-local";
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Member } from "src/manage-user/entities/manage-user.entity";
import {ManageUserService} from "src/manage-user/manage-user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy ( Strategy ){
    constructor(private readonly manageUserService : ManageUserService){
        super({
            usernameField: 'id',
        });
    }

    async validate(id : number) :  Promise<Member> {
        const member: Member = await this.manageUserService.findOne(id);

        if (member == undefined) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return member;
    }

}