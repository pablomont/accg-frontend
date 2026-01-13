import axios { AxiosError, InternalAxiosRequestConfig } from 'axios';

import axios from 'axios';
// 1. Instância para Associados e Despesas
 const api = axios.create({
    baseURL: 'https://6957e32ef7ea690182d3626d.mockapi.io',
    timeout: 10000,
});
// 2. Instância exclusiva para Boletos
 const apiBoletos = axios.create({
    baseURL: 'https://6957e717f7ea690182d36fda.mockapi.io',
    timeout: 10000,
});
// Interceptor de Response
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        // Tratamento de erros por status
        if (error.response) {
            const { status } = error.response;

            switch (status) {
                case 400:
                    console.error('[API] Bad Request - Dados inválidos');
                    break;
                case 401:
                    console.error('[API] Unauthorized - Não autenticado');
                    break;
                case 403:
                    console.error('[API] Forbidden - Sem permissão');
                    break;
                case 404:
                    console.error('[API] Not Found - Recurso não encontrado');
                    break;
                case 500:
                    console.error('[API] Internal Server Error - Erro no servidor');
                    break;
                default:
                    console.error(`[API] Error ${status}`);
            }
        } else if (error.request) {
            console.error('[API] Network Error - Sem resposta do servidor');
        } else {
            console.error('[API] Error:', error.message);
        }

        return Promise.reject(error);
    }
);

export default {api; apiBoletos}
