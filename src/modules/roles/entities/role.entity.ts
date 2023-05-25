import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/shared/base/base.entity';

export type RoleDocument = HydratedDocument<Role>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class Role extends BaseEntity {
  @Prop({
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 60,
  })
  name: string;

  @Prop({
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 60,
  })
  code: string;

  @Prop({
    default: false,
  })
  isDefault: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
