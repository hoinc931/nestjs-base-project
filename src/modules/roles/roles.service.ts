import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseInterface } from 'src/shared/interfaces/response.interface';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private readonly roleSchema: Model<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<ResponseInterface> {
    const roleCode = createRoleDto.name;
    const roleCreated = await this.roleSchema.create({
      ...createRoleDto,
      code: roleCode,
    });
    return {
      success: true,
      statusCode: 201,
      data: roleCreated,
      message: 'success',
    };
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
