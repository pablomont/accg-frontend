/**
 * Constrói a URL p/ enviar mensagem via WhatsApp
 * @param phone Número do telefone no formato local, ex: (83) 99999-9999
 * @param message Texto da mensagem
 * @returns URL pronta para window.open()
 */

export function buildWhatsAppUrl(phone: string, message: string): string {
    if (!phone) return '';

    // Remove tudo que ñ é nº
    const onlyNumbers = phone.replace(/\D/g, '');

    // Adiciona código (Brasil = 55)
    const internationalNumber = `55${onlyNumbers}`;

    // Codifica mensagem p/ URL
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${internationalNumber}?text=${encodedMessage}`;
}