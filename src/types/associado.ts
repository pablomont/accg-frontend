export interface Endereco {
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
}

export interface Associado {
    id: string;
    nome: string;
    cpfCnpj: string;
    tipoPessoa: 'fisica' | 'juridica';
    email: string;
    telefone: string;
    endereco: Endereco;
    dataCadastro: string;
    dataAtualizacao?: string;
    status: 'ativo' | 'inativo';
    observacoes?: string;
}

export interface AssociadoFormData {
    nome: string;
    cpfCnpj: string;
    tipoPessoa: 'fisica' | 'juridica';
    email: string;
    telefone: string;
    endereco: Endereco;
    observacoes?: string;
}
