import emailjs from '@emailjs/browser'
import { formatCurrency } from '@/utils'

export interface BoletoFormData{
    nome: string;
    valor: number;
    vencimento: string;
    descricao: string;
}