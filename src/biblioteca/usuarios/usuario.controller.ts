import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() data: Partial<Usuario>) {
    return this.usuarioService.create(data);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: Partial<Usuario>) {
    return this.usuarioService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usuarioService.delete(id);
  }
}
