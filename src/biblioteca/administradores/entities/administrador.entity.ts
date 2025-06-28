import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;
}
