import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseInterface } from 'src/shared/interfaces/response.interface';

interface Resp {
  success: boolean;
  message?: string;
  data?: any;
}

@Controller({
  version: '1',
  path: '/users',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto): Promise<Resp> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<ResponseInterface> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
