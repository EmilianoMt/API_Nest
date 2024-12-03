import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
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

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(numero: number) {
    return this.clienteRepository.findOne({
      where: { Numero: numero },
    });
  }

  // update(id: number, updateClienteDto: UpdateClienteDto) {
  //   return `This action updates a #${id} cliente`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cliente`;
  // }
}
