# Módulo de Boletos e PIX

Este módulo será desenvolvido pelos alunos.

## Funcionalidades a Implementar

### Prioridade Alta
- [ ] Dropdown de seleção de associado com busca
- [ ] Formulário de geração de boleto
- [ ] Formulário de geração de PIX

### Prioridade Média
- [ ] Validação de campos do boleto
- [ ] Preview do boleto antes de gerar
- [ ] Exibição do boleto gerado com download PDF
- [ ] Botão copiar linha digitável
- [ ] Exibição do QR Code PIX
- [ ] Botão copiar código PIX copia e cola
- [ ] Download do QR Code como imagem
- [ ] Histórico de boletos com status
- [ ] Histórico de PIX gerados
- [ ] Filtros por período e status
- [ ] Badges de status (pago, pendente, vencido)
- [ ] Integração com API

### Prioridade Baixa
- [ ] Responsividade completa

## Tipos Disponíveis

```typescript
import { Boleto, PixCobranca } from '@/types';
```

## Serviços

```typescript
import api from '@/services/api';

// Exemplo de uso:
const response = await api.post('/boletos', dadosBoleto);
const boletoGerado = response.data;
```
