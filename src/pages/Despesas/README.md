# Módulo de Despesas

Este módulo será desenvolvido pelos alunos.

## Funcionalidades a Implementar

### Prioridade Alta
- [ ] Formulário de cadastro de categoria de despesa
- [ ] Formulário de cadastro de despesa

### Prioridade Média
- [ ] Listagem hierárquica do plano de contas (árvore)
- [ ] Funcionalidade expandir/colapsar categorias
- [ ] Seleção de categoria com dropdown e busca
- [ ] Listagem de despesas com tabela paginada
- [ ] Filtro por período (data inicial e final)
- [ ] Filtro por categoria
- [ ] Totalizador de despesas filtradas
- [ ] Edição e exclusão de despesas
- [ ] Integração com API (CRUD completo)

### Prioridade Baixa
- [ ] Ícones visuais por tipo de categoria
- [ ] Responsividade completa

## Tipos Disponíveis

```typescript
import { Despesa, CategoriaDespesa } from '@/types';
```

## Serviços

```typescript
import api from '@/services/api';

// Exemplo de uso:
const response = await api.get('/despesas');
const despesas = response.data;
```
