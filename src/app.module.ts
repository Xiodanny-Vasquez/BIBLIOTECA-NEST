import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { administradorModule } from './biblioteca/administradores/administrador.module';
import { UsuarioModule } from './biblioteca/usuarios/usuario.module';
import { LibroModule } from './biblioteca/libros/libro.module';
import { PrestamoModule } from './biblioteca/prestamos/prestamo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),

    administradorModule,
    UsuarioModule,
    LibroModule,
    PrestamoModule,
  ],
})
export class AppModule {}
