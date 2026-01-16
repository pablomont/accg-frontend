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

export default { api, apiBoletos }
