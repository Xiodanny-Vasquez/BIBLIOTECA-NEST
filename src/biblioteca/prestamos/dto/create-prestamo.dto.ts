import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreatePrestamoDto {
  @IsString()
  @IsNotEmpty()
  fechaPrestamo: string;

  @IsOptional()
  @IsString()
  fechaDevolucion?: string;

  @IsNotEmpty()
  usuarioId: number;

  @IsNotEmpty()
  libroId: number;
}
