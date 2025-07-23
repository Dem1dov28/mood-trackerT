import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequest {
  @ApiProperty({
    description: 'Отображаемое имя',
    example: 'Ivan',
    maxLength: 30,
  })
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя обязательно для заполнения' })
  @MaxLength(30, { message: 'Имя не должнопревышать 30 символов' })
  name: string;

  @ApiProperty({
    description: 'Почтовый адрес',
    example: 'example@gmail.com',
  })
  @IsString({ message: 'Почта должна быть строкой' })
  @IsNotEmpty({ message: 'Почта обязательна для заполнения' })
  @IsEmail({}, { message: 'Некорректный формат электронной почты' })
  email: string;

  @ApiProperty({
    description: 'Пароль от аккаунта',
    example: '123456',
    minLength: 6,
    maxLength: 28,
  })
  @IsString({ message: 'Пароль должен быть строкой' })
  @IsNotEmpty({ message: 'Пароль обязателен для заполнения' })
  @MinLength(6, { message: 'Пароль должен содержать не менее 6 символов' })
  @MaxLength(28, { message: 'Пароль должен содержать не более 28 символов' })
  password: string;
}
