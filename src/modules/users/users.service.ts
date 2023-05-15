import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseInterface } from 'src/shared/interfaces/response.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userSchema: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<ResponseInterface> {
    const created = await this.userSchema.create(createUserDto);
    console.log('this is created: ', created);
    return {
      success: true,
      statusCode: 201,
      data: created,
      message: 'success',
    };
  }

  async findAll(): Promise<ResponseInterface> {
    const found = await this.userSchema.find({});
    return {
      message: 'success',
      success: true,
      data: found,
      statusCode: 200,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
