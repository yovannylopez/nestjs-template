import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: typeof User,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = await this.usersRepository.create(createUserDto);
      Logger.log(`User created successfully on database`);
      return newUser;
    } catch (error) {
      Logger.error(`Error User not created`, error);
      throw new HttpException(
        `User error ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
