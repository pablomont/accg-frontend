/**
 * Valida se um CPF é válido
 */
export function isValidCPF(cpf: string): boolean {
    const numbers = cpf.replace(/\D/g, '');

    if (numbers.length !== 11) return false;

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(numbers)) return false;

    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(numbers.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(numbers.charAt(9))) return false;

    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(numbers.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(numbers.charAt(10))) return false;

    return true;
}

/**
 * Valida se um CNPJ é válido
 */
export function isValidCNPJ(cnpj: string): boolean {
    const numbers = cnpj.replace(/\D/g, '');

    if (numbers.length !== 14) return false;

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(numbers)) return false;

    // Validação do primeiro dígito verificador
    let size = numbers.length - 2;
    let numbersArray = numbers.substring(0, size);
    const digits = numbers.substring(size);
    let sum = 0;
    let pos = size - 7;

    for (let i = size; i >= 1; i--) {
        sum += parseInt(numbersArray.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0))) return false;

    // Validação do segundo dígito verificador
    size = size + 1;
    numbersArray = numbers.substring(0, size);
    sum = 0;
    pos = size - 7;

    for (let i = size; i >= 1; i--) {
        sum += parseInt(numbersArray.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(1))) return false;

    return true;
}

/**
 * Valida se um e-mail tem formato válido
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Valida se um telefone tem formato válido (10 ou 11 dígitos)
 */
export function isValidPhone(phone: string): boolean {
    const numbers = phone.replace(/\D/g, '');
    return numbers.length === 10 || numbers.length === 11;
}

/**
 * Valida se um CEP tem formato válido (8 dígitos)
 */
export function isValidCEP(cep: string): boolean {
    const numbers = cep.replace(/\D/g, '');
    return numbers.length === 8;
}

/**
 * Valida se CPF ou CNPJ é válido
 */
export function isValidCPFCNPJ(value: string): boolean {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length === 11) {
        return isValidCPF(numbers);
    }
    if (numbers.length === 14) {
        return isValidCNPJ(numbers);
    }
    return false;
}
