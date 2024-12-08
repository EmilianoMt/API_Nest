import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaccion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('bigint')
    numeroCliente: number;

    @Column('float')
    monto: number;

    @Column('text',{default: 'Telcel'})
    compañia: string;

    @CreateDateColumn({type: 'timestamp'})
    fecha: Date;

    @Column('text',{default: 'Exitoso'})
    estado: string;
}
