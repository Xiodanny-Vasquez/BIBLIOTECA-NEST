import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamo])],
  providers: [PrestamoService],
  controllers: [PrestamoController],
})
export class PrestamoModule {}
