import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from './entities/administrador.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Administrador)
    private repo: Repository<Administrador>,
  ) {}

  async create(admin: Partial<Administrador>) {
    const newadmin = this.repo.create(admin);
    return await this.repo.save(newadmin);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, data: Partial<Administrador>) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
