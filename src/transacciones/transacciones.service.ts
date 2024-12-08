import { Injectable } from '@nestjs/common';
import { CreateTransaccioneDto } from './dto/create-transaccione.dto';
import { UpdateTransaccioneDto } from './dto/update-transaccione.dto';
import { Transaccion } from './entities/transaccion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionRepository: Repository<Transaccion>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createTransaccioneDto: CreateTransaccioneDto) {    
    const { numeroCliente, monto } = createTransaccioneDto;

    let cliente = await this.clienteRepository.findOne({
      where: { numero: numeroCliente },
    });

    if (!cliente) {
      cliente = this.clienteRepository.create({
        numero: numeroCliente,
        saldo: monto,
      });
    } else {
      cliente.saldo += monto;
    }

    await this.clienteRepository.save(cliente);

    const transaccion = this.transaccionRepository.create({
      ...createTransaccioneDto,
    });
    return this.transaccionRepository.save(transaccion);
  }

  findAll() {
    return this.transaccionRepository.find();
  }

  findOne(id: number) {
    return this.transaccionRepository.findOne({
      where: { numeroCliente: id },
    });
  }

}
