import { ConfigService } from '@nestjs/config';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { isValidObjectId, Model } from 'mongoose';

import { PaginationDto } from 'src/common/dto/pagination.dto';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from './../entities/user.entity';

@Injectable()
export class UsersService {
  private defaultLimit: number;
  private defaultOffset: number;

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {
    this.defaultLimit = configService.get<number>('DEFAULT_LIMIT');
    this.defaultOffset = configService.get<number>('DEFAULT_OFFSET');
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.name = createUserDto.name.toLocaleLowerCase();
    try {
      const newUser = await this.userModel.create(createUserDto);
      Logger.log('User created successfully');
      return newUser;
    } catch (error) {
      Logger.error(`Can't create user`);
      this.handleExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = this.defaultLimit, offset = this.defaultOffset } =
      paginationDto;
    Logger.log(`Users founded successfully`);
    return this.userModel.find().limit(limit).skip(offset).select('-__v');
  }

  async findOne(id: string) {
    let user: User;
    // MongoID validate
    if (!user && isValidObjectId(id)) {
      user = await this.userModel.findById(id);
    }
    // Name field validate
    if (!user) {
      user = await this.userModel.findOne({
        name: id.toLowerCase().trim(),
      });
    }
    Logger.log(`User with id "${id}" found successfully`);
    if (!user) throw new NotFoundException(`User with id "${id}" not found`);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (updateUserDto.name) {
      updateUserDto.name = updateUserDto.name.toLowerCase();
    }
    try {
      await user.updateOne(updateUserDto);
      Logger.log(`User with id "${id}" updated successfully`);
      return { ...user.toJSON(), ...updateUserDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.userModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      Logger.log(`User with id "${id}" not found`);
      throw new BadRequestException(`User with id "${id}" not found`);
    }
    Logger.log(`User with id "${id}" removed successfully`);
    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `User exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    Logger.error(error);
    throw new InternalServerErrorException(`Can't create user`);
  }
}
