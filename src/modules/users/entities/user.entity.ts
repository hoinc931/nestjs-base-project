import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserGenderEnum, UserStatusEnum } from 'src/enums/user.enum';
import { BaseEntity } from 'src/shared/base/base.entity';
import { regexes } from 'src/utils/constants';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class User extends BaseEntity {
  @Prop({
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 60,
  })
  firstName: string;

  @Prop({
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 60,
  })
  lastName: string;

  @Prop({
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: regexes.EMAIL_PATTERN,
  })
  email: string;

  @Prop({
    trim: true,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 32,
  })
  userName: string;

  @Prop({
    required: true,
    select: false,
    match: regexes.PWD_PATTERN,
  })
  password: string;

  @Prop({
    trim: true,
    default:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  })
  avatar: string;

  @Prop({
    enum: UserGenderEnum,
    default: UserGenderEnum.Other,
  })
  gender: string;

  @Prop({
    enum: UserStatusEnum,
    default: UserStatusEnum.UNVERIFIED,
  })
  status: string;

  @Prop({
    match: /^([+]\d{2})?\d{10}$/,
  })
  phoneNumber: string;

  @Prop()
  dateOfBirth: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
