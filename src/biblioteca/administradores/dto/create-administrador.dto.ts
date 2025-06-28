import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateAdministradorDto {
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  email: string;
}
