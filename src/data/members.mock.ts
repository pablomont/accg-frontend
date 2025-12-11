import { Associado } from '@/types/associado';

export const membersMock: Associado[] = [
    {
        id: '1',
        nome: 'João da Silva',
        cpfCnpj: '123.456.789-00',
        tipoPessoa: 'fisica',
        email: 'joao@email.com',
        telefone: '(83) 99999-9999',
        endereco: {
            cep: '58400-000',
            logradouro: 'Rua Principal',
            numero: '123',
            bairro: 'Centro',
            cidade: 'Campina Grande',
            estado: 'PB'
        },
        dataCadastro: '2023-01-15',
        status: 'ativo',
        observacoes: 'Sócio fundador'
    },
    {
        id: '2',
        nome: 'Maria Comércio LTDA',
        cpfCnpj: '12.345.678/0001-90',
        tipoPessoa: 'juridica',
        email: 'contato@mariacomercio.com',
        telefone: '(83) 3333-3333',
        endereco: {
            cep: '58400-001',
            logradouro: 'Av. Comercial',
            numero: '500',
            bairro: 'Prata',
            cidade: 'Campina Grande',
            estado: 'PB'
        },
        dataCadastro: '2023-02-20',
        status: 'ativo'
    },
    {
        id: '3',
        nome: 'José Oliveira',
        cpfCnpj: '987.654.321-00',
        tipoPessoa: 'fisica',
        email: 'jose@email.com',
        telefone: '(83) 98888-8888',
        endereco: {
            cep: '58400-002',
            logradouro: 'Rua Secundária',
            numero: '45',
            bairro: 'Catolé',
            cidade: 'Campina Grande',
            estado: 'PB'
        },
        dataCadastro: '2023-03-10',
        status: 'inativo',
        observacoes: 'Pagamento pendente'
    }
];
