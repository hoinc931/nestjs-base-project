import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './entities/role.entity';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Role.name,
          schema: RoleSchema,
        },
      ],
      // DATABASE_CONNECTION_NAME,
    ),
  ],
})
export class RolesModule {}
