/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly prestamoRepo: Repository<Prestamo>,
  ) {}

  async create(data: Partial<Prestamo>) {
    try {
      return await this.prestamoRepo.save(data);
    } catch (error) {
      throw new HttpException(
        'Error al crear el préstamo',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    return await this.prestamoRepo.find();
  }

  async findOne(id: number) {
    const prestamo = await this.prestamoRepo.findOneBy({ id });
    if (!prestamo) {
      throw new NotFoundException(`Préstamo con ID ${id} no encontrado`);
    }
    return prestamo;
  }

  async update(id: number, data: Partial<Prestamo>) {
    const prestamo = await this.prestamoRepo.findOneBy({ id });
    if (!prestamo) {
      throw new NotFoundException(`Préstamo con ID ${id} no encontrado`);
    }

    await this.prestamoRepo.update(id, data);
    return { message: 'Préstamo actualizado correctamente' };
  }

  async delete(id: number) {
    const prestamo = await this.prestamoRepo.findOneBy({ id });
    if (!prestamo) {
      throw new NotFoundException(`Préstamo con ID ${id} no encontrado`);
    }

    await this.prestamoRepo.delete(id);
    return { message: 'Préstamo eliminado correctamente' };
  }
}
