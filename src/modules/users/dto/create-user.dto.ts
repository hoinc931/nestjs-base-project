import { Type } from 'class-transformer';
import {
  IsEmail,
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsDate,
  Matches,
} from 'class-validator';
import { UserGenderEnum } from 'src/enums/user.enum';
import { regexes } from 'src/utils/constants';

export class CreateUserDto {
  //   @ApiProperty({
  //     example: faker.internet.email(),
  //     required: true,
  // })
  @IsEmail()
  @IsNotEmpty({
    message: 'REQUIRED',
  })
  @MaxLength(100, {
    message: 'MAXIMUM_CHARACTOR',
  })
  @Type(() => String)
  readonly email: string;

  @IsNotEmpty({
    message: 'REQUIRED',
  })
  @MaxLength(32, {
    message: 'MAXIMUM_CHARACTOR',
  })
  @MinLength(6, {
    message: 'MINIMUM_CHARACTOR',
  })
  @Type(() => String)
  readonly user_name: string;

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
  readonly first_name: string;

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
  readonly last_name: string;

  @IsNotEmpty({
    message: 'REQUIRED',
  })
  @MaxLength(32, {
    message: 'MAXIMUM_CHARACTOR',
  })
  @MinLength(8, {
    message: 'MINIMUM_CHARACTOR',
  })
  @Matches(regexes.PWD_PATTERN, { message: 'PWD_NOT_MATCH' })
  @Type(() => String)
  readonly password: string;

  @IsOptional()
  @IsDate()
  readonly date_of_birth: Date;

  @IsOptional()
  @MaxLength(12, {
    message: 'MAXIMUM_CHARACTOR',
  })
  @MinLength(10, {
    message: 'MINIMUM_CHARACTOR',
  })
  @Type(() => String)
  readonly phone_number: string;

  @IsOptional()
  @IsEnum(UserGenderEnum)
  @Type(() => String)
  gender: Date;
}
