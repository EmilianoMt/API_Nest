import { Module } from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';
import { TransaccionesController } from './transacciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from './entities/transaccion.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { ClientesModule } from '../clientes/clientes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Transaccion, Cliente]),
  ClientesModule],

  controllers: [TransaccionesController],
  providers: [TransaccionesService],
})
export class TransaccionesModule {}
