import { IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateLibroDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  autor: string;

  @IsNumber()
  anio: number;

  @IsBoolean()
  disponible: boolean;
}
