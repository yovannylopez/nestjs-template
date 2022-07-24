import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './entities/user.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { usersProviders } from './providers/users.provider';

@Module({
  controllers: [UsersController],
  exports: [UsersController, UsersService, SequelizeModule],
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersController, UsersService, ...usersProviders],
})
export class UsersModule {}
