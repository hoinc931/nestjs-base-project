import { Type } from 'class-transformer';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty({
    message: 'REQUIRED',
  })
  @MaxLength(60, {
    message: 'MAXIMUM_CHARACTOR',
  })
  @MinLength(2, {
    message: 'MINIMUM_CHARACTOR',
  })
  @Type(() => String)
  name: string;
}
