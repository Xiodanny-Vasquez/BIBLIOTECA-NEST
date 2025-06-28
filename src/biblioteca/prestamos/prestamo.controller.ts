/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PrestamoService } from './prestamo.service';

@Controller('prestamos')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) {}

  @Post()
  create(@Body() data) {
    return this.prestamoService.create(data);
  }

  @Get()
  findAll() {
    return this.prestamoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestamoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.prestamoService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.prestamoService.delete(+id);
  }
}
