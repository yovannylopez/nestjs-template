import {
  Body,
  Controller,
  Get,
  Delete,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PaginationDto } from 'src/common/dto/pagination.dto';
import { USERS_PATH } from 'src/common/constants/path.constants';

import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../services/users.service';

@ApiTags('Users')
@Controller(USERS_PATH)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create an user' })
  @ApiResponse({
    description: 'User created',
    status: HttpStatus.CREATED,
    type: User,
  })
  @ApiResponse({ description: 'Bad request', status: HttpStatus.BAD_REQUEST })
  @ApiResponse({
    description: 'Forbidden',
    status: HttpStatus.FORBIDDEN,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    description: 'List of users',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Bad request', status: HttpStatus.BAD_REQUEST })
  @ApiResponse({
    description: 'Forbidden',
    status: HttpStatus.FORBIDDEN,
  })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.usersService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find an user by id' })
  @ApiResponse({
    description: 'User info',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Bad request', status: HttpStatus.BAD_REQUEST })
  @ApiResponse({
    description: 'Forbidden',
    status: HttpStatus.FORBIDDEN,
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an user by id' })
  @ApiResponse({
    description: 'User data updated',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Bad request', status: HttpStatus.BAD_REQUEST })
  @ApiResponse({
    description: 'Forbidden',
    status: HttpStatus.FORBIDDEN,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an user by id' })
  @ApiResponse({
    description: 'User removed',
    status: HttpStatus.OK,
  })
  @ApiResponse({ description: 'Bad request', status: HttpStatus.BAD_REQUEST })
  @ApiResponse({
    description: 'Forbidden',
    status: HttpStatus.FORBIDDEN,
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
