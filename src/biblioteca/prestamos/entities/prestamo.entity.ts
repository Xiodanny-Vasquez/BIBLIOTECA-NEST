import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Libro } from '../../libros/entities/libro.entity';

@Entity()
export class Prestamo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fechaPrestamo: string;

  @Column({ nullable: true })
  fechaDevolucion: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.prestamos, { eager: true })
  usuario: Usuario;

  @ManyToOne(() => Libro, (libro) => libro.prestamos, { eager: true })
  libro: Libro;
}
