import { Prop } from '@nestjs/mongoose';

export class BaseEntity {
  _id?: string; // Sau này sẽ dùng với class-transformer để serialize dữ liệu response

  @Prop({ default: null })
  deletedAt: Date; // Dùng cho soft delete

  @Prop({ default: false })
  isDeleted: boolean; // Dùng cho soft delete

  @Prop({ default: null })
  deletedBy: string; // Dùng cho soft delete
}
