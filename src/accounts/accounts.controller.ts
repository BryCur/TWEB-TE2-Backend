import { Controller, Get, Post } from '@nestjs/common';
import { Model } from 'mongoose';
import { async } from 'rxjs/internal/scheduler/async';
import { InjectModel } from '@nestjs/mongoose';
import { iUser } from 'src/interfaces/users.interface';

@Controller('accounts')
export class AccountsController {
    constructor(@InjectModel('Users') private readonly UserModel: Model<iUser>) { }
    @Post('registration')
    async registration() {
        const newUser = new this.UserModel({ user: 'test', password: 'password' });
        return await newUser.save();
    }

    @Post('login')
    async login() {
        return 'ok';
    }

}
