import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import axios from 'axios';
// 1. Instância para Associados e Despesas
export const api = axios.create({
    baseURL: 'https://6957e32ef7ea690182d3626d.mockapi.io',
    timeout: 10000,
});
// 2. Instância exclusiva para Boletos
export const apiBoletos = axios.create({
    baseURL: 'https://6957e717f7ea690182d36fda.mockapi.io',
    timeout: 10000,
});

// Interceptor de Request
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    
        console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error: AxiosError) => {
        console.error('[API] Request Error:', error);
        return Promise.reject(error);
    }
);

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
                    window.location.href = '/login';
                    // TODO: Redirecionar para login quando implementado
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

export default api;
