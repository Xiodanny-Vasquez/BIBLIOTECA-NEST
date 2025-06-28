import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrador } from './entities/administrador.entity';
import { AdminService } from './administrador.service';
import { AdminController } from './administrador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Administrador])],
  providers: [AdminService],
  controllers: [AdminController],
})
export class administradorModule {}
