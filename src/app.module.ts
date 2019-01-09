import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsController } from './accounts/accounts.controller';
import { UsersSchemas } from './schemas/user.schemas';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchemas }])
  ],
  controllers: [AppController, AccountsController],
  providers: [AppService],
})
export class AppModule { }
