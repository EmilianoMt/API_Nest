import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  clienteId: string;

  @Column()
  Numero: number;

  @Column()
  saldo: number;
}