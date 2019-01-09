import { Controller, Get, Post } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('accounts')
export class AccountsController {
    @Post('registration')
    async registration() {
        return 'registration OK'
    }

    @Post('login')
    async login() {
        return 'ok';
    }

}
