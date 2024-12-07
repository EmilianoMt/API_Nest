import { IsNumber, IsString, Max, Min } from "class-validator";
import { Transaccion } from "../entities/transaccion.entity";

export class CreateTransaccioneDto extends Transaccion {
    @IsNumber()
    // @Min(10)
    // @Max(10)   
    numeroCliente: number;

    @IsNumber()
    monto: number;

}
