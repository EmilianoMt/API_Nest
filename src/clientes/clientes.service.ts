import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}
  create(createClienteDto: CreateClienteDto) {
    return this.clienteRepository.save(createClienteDto);
  }

  async findOne(numero: number) {
    console.log(numero);
    
    const cliente = await this.clienteRepository.findOne({
      where: { numero: numero },
    });
    if (!cliente) {
      throw new NotFoundException(`Cliente con número ${numero} no encontrado`);
    }
    console.log(cliente);
    
    return cliente;
  }
}
