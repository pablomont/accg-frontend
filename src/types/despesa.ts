export interface CategoriaDespesa {
    id: string;
    nome: string;
    descricao?: string;
    categoriaPaiId?: string;
    subcategorias?: CategoriaDespesa[];
    dataCriacao: string;
}

export interface Despesa {
    id: string;
    descricao: string;
    valor: number;
    data: string;
    categoriaId: string;
    categoria?: CategoriaDespesa;
    formaPagamento: 'dinheiro' | 'pix' | 'cartao' | 'boleto' | 'transferencia';
    observacoes?: string;
    comprovante?: string;
    status: 'pago' | 'pendente';
    dataCriacao: string;
    dataAtualizacao?: string;
}

export interface DespesaFormData {
    descricao: string;
    valor: number;
    data: string;
    categoriaId: string;
    formaPagamento: 'dinheiro' | 'pix' | 'cartao' | 'boleto' | 'transferencia';
    observacoes?: string;
}

export interface FiltroDespesa {
    dataInicio?: string;
    dataFim?: string;
    categoriaId?: string;
    status?: 'pago' | 'pendente';
}
