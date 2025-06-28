import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Prestamo } from '../../prestamos/entities/prestamo.entity';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  anio: number;

  @Column()
  disponible: boolean;

  @OneToMany(() => Prestamo, (prestamo) => prestamo.libro)
  prestamos: Prestamo[];
}
