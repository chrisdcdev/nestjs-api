import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './configs/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { UserRepository } from './modules/user/repositories/user.repository';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  controllers: [AppController],
  providers: [AppService, UserService, UserRepository],
})
export class AppModule {}
