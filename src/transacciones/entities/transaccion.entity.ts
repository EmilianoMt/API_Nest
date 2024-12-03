import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaccion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    numeroCliente: number;

    @Column('float')
    monto: number;

    @CreateDateColumn({type: 'timestamp'})
    fecha: Date;

    @Column('text')
    estado: string;
}