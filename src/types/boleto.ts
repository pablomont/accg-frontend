import { Associado } from './associado';

export type StatusBoleto = 'pendente' | 'pago' | 'vencido' | 'cancelado';
export type StatusPix = 'pendente' | 'pago' | 'expirado';

export interface Boleto {
    id: string;
    associadoId: string;
    associado?: Associado;
    valor: number;
    dataVencimento: string;
    dataEmissao: string;
    dataPagamento?: string;
    descricao: string;
    linhaDigitavel?: string;
    codigoBarras?: string;
    nossoNumero?: string;
    multa?: number;
    juros?: number;
    status: StatusBoleto;
}

export interface BoletoFormData {
    associadoId: string;
    // associado?: Associado;
    valor: number;
    dataVencimento: string;
    descricao: string;
    multa?: number;
    juros?: number;
}

export interface PixCobranca {
    id: string;
    associadoId: string;
    associado?: Associado;
    valor: number;
    descricao: string;
    qrCode: string;
    copiaCola: string;
    dataEmissao: string;
    dataExpiracao: string;
    dataPagamento?: string;
    txid?: string;
    status: StatusPix;
}

export interface PixFormData {
    associadoId: string;
    valor: number;
    descricao: string;
}

export interface FiltroBoleto {
    dataInicio?: string;
    dataFim?: string;
    status?: StatusBoleto;
    associadoId?: string;
}
