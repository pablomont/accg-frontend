/**
 * Aplica máscara de CPF enquanto o usuário digita
 */
export function maskCPF(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

/**
 * Aplica máscara de CNPJ enquanto o usuário digita
 */
export function maskCNPJ(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

/**
 * Aplica máscara de CPF ou CNPJ automaticamente
 */
export function maskCPFCNPJ(value: string): string {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length <= 11) {
        return maskCPF(value);
    }
    return maskCNPJ(value);
}

/**
 * Aplica máscara de telefone enquanto o usuário digita
 */
export function maskPhone(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
}

/**
 * Aplica máscara de CEP enquanto o usuário digita
 */
export function maskCEP(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
}

/**
 * Aplica máscara de moeda enquanto o usuário digita
 */
export function maskCurrency(value: string): string {
    let numbers = value.replace(/\D/g, '');

    if (!numbers) return '';

    // Converte para número e divide por 100 para considerar centavos
    const amount = parseInt(numbers, 10) / 100;

    return amount.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

/**
 * Remove máscara e retorna apenas números
 */
export function unmask(value: string): string {
    return value.replace(/\D/g, '');
}
