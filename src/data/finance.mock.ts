import { Despesa, CategoriaDespesa } from '@/types/despesa';

export const categoriesMock: CategoriaDespesa[] = [
    {
        id: '1',
        nome: 'Operacional',
        descricao: 'Gastos do dia a dia',
        dataCriacao: '2023-01-01'
    },
    {
        id: '2',
        nome: 'Infraestrutura',
        descricao: 'Manutenção e obras',
        dataCriacao: '2023-01-01'
    }
];

export const financeMock: Despesa[] = [
    {
        id: '1',
        descricao: 'Energia Elétrica',
        valor: 450.50,
        data: '2023-11-15',
        categoriaId: '2',
        formaPagamento: 'boleto',
        status: 'pago',
        dataCriacao: '2023-11-01'
    },
    {
        id: '2',
        descricao: 'Material de Escritório',
        valor: 125.90,
        data: '2023-11-20',
        categoriaId: '1',
        formaPagamento: 'cartao',
        status: 'pago',
        dataCriacao: '2023-11-20'
    },
    {
        id: '3',
        descricao: 'Internet',
        valor: 99.90,
        data: '2023-12-05',
        categoriaId: '2',
        formaPagamento: 'pix',
        status: 'pendente',
        dataCriacao: '2023-12-01'
    }
];
