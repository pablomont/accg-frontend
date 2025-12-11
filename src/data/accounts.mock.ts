import { Boleto } from '@/types/boleto';
import { membersMock } from './members.mock';

export const accountsMock: Boleto[] = [
    {
        id: '1',
        associadoId: '1',
        associado: membersMock[0],
        valor: 150.00,
        dataVencimento: '2023-12-10',
        dataEmissao: '2023-11-25',
        descricao: 'Mensalidade Dezembro/2023',
        status: 'pendente',
        nossoNumero: '123456789'
    },
    {
        id: '2',
        associadoId: '2',
        associado: membersMock[1],
        valor: 300.00,
        dataVencimento: '2023-11-10',
        dataEmissao: '2023-10-25',
        dataPagamento: '2023-11-09',
        descricao: 'Mensalidade Novembro/2023',
        status: 'pago',
        nossoNumero: '987654321'
    },
    {
        id: '3',
        associadoId: '3',
        associado: membersMock[2],
        valor: 150.00,
        dataVencimento: '2023-10-10',
        dataEmissao: '2023-09-25',
        descricao: 'Mensalidade Outubro/2023',
        status: 'vencido',
        multa: 3.00,
        juros: 1.50,
        nossoNumero: '456123789'
    }
];
