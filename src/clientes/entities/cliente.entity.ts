import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  clienteId: string;

  @Column('bigint')
  numero: number;

  @Column()
  saldo: number;
}
