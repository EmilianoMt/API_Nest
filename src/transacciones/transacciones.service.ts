import { Injectable } from '@nestjs/common';
import { CreateTransaccioneDto } from './dto/create-transaccione.dto';
import { UpdateTransaccioneDto } from './dto/update-transaccione.dto';
import { Transaccion } from './entities/transaccion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionRepository: Repository<Transaccion>,
  ) {}
  create(createTransaccioneDto: CreateTransaccioneDto) {
    return this.transaccionRepository.save(createTransaccioneDto);
  }

  findAll() {
    return this.transaccionRepository.find();
  }

  findOne(id: number) {
    return this.transaccionRepository.findOne({
      where: { numeroCliente: id },
    });
  }

  // update(id: number, updateTransaccioneDto: UpdateTransaccioneDto) {
  //   return `This action updates a #${id} transaccione`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} transaccione`;
  // }
}
