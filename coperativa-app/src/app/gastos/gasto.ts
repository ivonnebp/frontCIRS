import {TipoGasto} from './tipoGasto'; 

export class Gasto {
    
    id: number; 
    valor: number;
    motivo: string; 
    numFactura: string; 
    fecha: string;
    tipoGasto: TipoGasto 
}
