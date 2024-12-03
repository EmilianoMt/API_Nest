import { IsNumber, Max, Min } from "class-validator";
import { Cliente } from "../entities/cliente.entity";

export class CreateClienteDto extends Cliente{
    @IsNumber()
    @Max(10)
    @Min(10)
    Numero: number;

    @IsNumber()
    saldo: number;
}
