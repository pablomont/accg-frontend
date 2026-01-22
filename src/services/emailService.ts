import emailjs from '@emailjs/browser';
import { formatCurrency } from '@/utils';
import { formatDate } from '@/utils';
import { Boleto, BoletoFormData } from '@/types';


class EmailService{
    private SERVICE_ID = 'service_fzi27sq';
    private TEMPLATE_ID = 'template_m73prwg';
    private PUBLIC_KEY = 'DM2LYUOXZVvRjO2bl';

    constructor(){
        emailjs.init(this.PUBLIC_KEY);
    }

    // async/await --> JavaScript Assíncrono: garante um tempo de espera com uma promessa (Promise) de que algo será executado.
    public async enviaCobranca(dados: Boleto){

        const template = {
            nome: dados.associado?.nome,
            valor: formatCurrency(dados.valor),
            data_vencimento: formatDate(dados.dataVencimento),
            descricao: dados.descricao,
        };

        return emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, template);
    }
}

export const emailService = new EmailService();