/**
 * Formata um valor numérico para moeda brasileira (R$)
 */
export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

/**
 * Formata um CPF (11 dígitos) para o formato 000.000.000-00
 */
export function formatCPF(value: string): string {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length !== 11) return value;

    return numbers.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4'
    );
}

/**
 * Formata um CNPJ (14 dígitos) para o formato 00.000.000/0000-00
 */
export function formatCNPJ(value: string): string {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length !== 14) return value;

    return numbers.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5'
    );
}

/**
 * Formata CPF ou CNPJ automaticamente baseado no tamanho
 */
export function formatCPFCNPJ(value: string): string {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length <= 11) {
        return formatCPF(numbers);
    }
    return formatCNPJ(numbers);
}

/**
 * Formata um telefone para (00) 00000-0000 ou (00) 0000-0000
 */
export function formatPhone(value: string): string {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length === 11) {
        return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    if (numbers.length === 10) {
        return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return value;
}

/**
 * Formata um CEP para o formato 00000-000
 */
export function formatCEP(value: string): string {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length !== 8) return value;

    return numbers.replace(/(\d{5})(\d{3})/, '$1-$2');
}

/**
 * Formata uma data para o formato DD/MM/YYYY
 */
export function formatDate(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;

    return new Intl.DateTimeFormat('pt-BR').format(d);
}

/**
 * Formata uma data para o formato DD/MM/YYYY HH:mm
 */
export function formatDateTime(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;

    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(d);
}
