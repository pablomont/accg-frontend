import emailjs from '@emailjs/browser'
import { formatCurrency } from '@/utils'
import { BoletoFormData } from '@/types';


export default class EmailService{
    private SERVICE_ID = 'service_fzi27sq';
    private TEMPLATE_ID = 'template_m73prwg';
    private PUBLIC_KEY = 'DM2LYUOXZVvRjO2bl';

    constructor(){
        emailjs.init(this.PUBLIC_KEY);
    }
}