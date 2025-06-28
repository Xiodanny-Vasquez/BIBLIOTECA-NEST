/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private libroRepo: Repository<Libro>,
  ) {}

  async create(data: Partial<Libro>) {
    try {
      return await this.libroRepo.save(data);
    } catch (error) {
      throw new HttpException(
        'Error al crear el libro',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    return await this.libroRepo.find();
  }

  async findOne(id: number) {
    const libro = await this.libroRepo.findOneBy({ id });
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return libro;
  }

  async update(id: number, data: Partial<Libro>) {
    const libro = await this.libroRepo.findOneBy({ id });
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }

    await this.libroRepo.update(id, data);
    return { message: 'Libro actualizado correctamente' };
  }

  async delete(id: number) {
    const libro = await this.libroRepo.findOneBy({ id });
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }

    await this.libroRepo.delete(id);
    return { message: 'Libro eliminado correctamente' };
  }
}
