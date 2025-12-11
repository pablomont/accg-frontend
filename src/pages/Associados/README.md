# Módulo de Associados

Este módulo será desenvolvido pelos alunos.

## Funcionalidades a Implementar

### Prioridade Alta
- [ ] Formulário de cadastro de associado
- [ ] Máscaras de input (CPF/CNPJ, telefone, CEP)
- [ ] Validação de campos obrigatórios

### Prioridade Média
- [ ] Listagem de associados com tabela paginada
- [ ] Busca e filtros (nome, CPF/CNPJ, e-mail)
- [ ] Ordenação por colunas
- [ ] Modal de visualização detalhada
- [ ] Tela de edição
- [ ] Modal de confirmação de exclusão
- [ ] Integração com API (CRUD completo)

### Prioridade Baixa
- [ ] Upload de foto/documento
- [ ] Geração de ficha de associação (PDF)
- [ ] Responsividade completa

## Componentes Disponíveis

Utilize os componentes da pasta `src/components/ui/`:
- Button, Input, Select, Table, Modal, Badge, Spinner, Toast

## Tipos Disponíveis

```typescript
import { Associado } from '@/types';
```

## Serviços

```typescript
import api from '@/services/api';

// Exemplo de uso:
const response = await api.get('/associados');
const associados = response.data;
```

## Utilitários

```typescript
import { formatCPF, formatPhone, maskCPF, isValidCPF } from '@/utils';
```
