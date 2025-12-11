# 📋 Backlog de Tarefas - Sistema Financeiro ACCG

> **Status da Auditoria:** ✅ SETUP SENIOR COMPLETO
> **Ação Necessária:** O ambiente está pronto! Os squads podem iniciar as tarefas abaixo.

---

## 🚨 Atenção: Pendências do Sênior (Fase 0) - ✅ RESOLVIDO

- [x] **Padronização de Pastas:** O plano exige `src/layouts`, mas atualmente existe `src/components/layout`. Mover ou aliasar para evitar confusão.
- [x] **Mocks de Dados:** A pasta `src/data` não existe.
    - [x] Criar `src/data/members.mock.ts`
    - [x] Criar `src/data/finance.mock.ts`
    - [x] Criar `src/data/accounts.mock.ts`
- [x] **Componente Modal:** O UI Kit em `src/components/ui` possui Button, Input, Card, PageTitle, Table e Badge, mas **falta o Modal**.
    - [x] Criar `src/components/ui/Modal` (Structure + Style).

---

## 🚀 Tarefas dos Estagiários (Release 1.0)
*Liberar apenas após resolução dos itens acima.*

### 🟢 Fase A: Gestão de Associados
**Foco:** Cadastro e listagem de membros.

- [ ] **Componente: Card de Membro** (Visualização em Grid)
    - **Local:** `src/components/business/members/MemberCard.tsx`
    - **Props:** `member: Associado` (ver `src/types/associado.ts`)
    - **Visual:** Usar `<Card>` do UI Kit. Mostrar Nome, Avatar (placeholder), Cargo e Status (`<Badge>`).
    - **Dica:** Use o componente `Badge` para diferenciar Ativo/Inativo.

- [ ] **Tela: Listagem de Associados**
    - **Local:** `src/pages/Associados/index.tsx`
    - **Visual:** Tabela (`<Table>`) listando todos os membros do mock.
    - **Ação:** Adicionar botão "Novo Associado" no topo (`<PageTitle>`).

- [ ] **Tela: Formulário de Cadastro**
    - **Local:** `src/pages/Associados/Form.tsx`
    - **Campos:** Nome, CPF, Email, Telefone.
    - **Regra:** Usar `<Input>` do UI Kit e hooks de formulário (React Hook Form ou state simples).

### 🔵 Fase B: Financeiro (Despesas)
**Foco:** Controle de gastos e livro caixa.

- [ ] **Componente: Resumo Financeiro**
    - **Local:** `src/components/business/finance/FinancialSummary.tsx`
    - **Visual:** 3 Cards lado a lado: "Entradas", "Saídas" e "Saldo".
    - **Dica:** Números negativos devem aparecer em vermelho (classe utilitária ou prop).

- [ ] **Tela: Livro Caixa**
    - **Local:** `src/pages/Despesas/index.tsx`
    - **Visual:** Tabela com Colunas: Data, Descrição, Categoria (<Badge>), Valor.
    - **Dados:** Consumir de `src/data/finance.mock.ts`.

- [ ] **Componente: Botão de Nova Despesa**
    - **Visual:** Botão que abre o **Modal** (pendente de criação pelo Senior) para inserir despesa rápida.

### 🟣 Fase C: Cobrança e Boletos
**Foco:** Gerar e visualizar cobranças.

- [ ] **Componente: Gerador de Boleto**
    - **Local:** `src/components/business/billing/BoletoGenerator.tsx`
    - **Input:** Selecionar Associado (dropdown) e Valor.
    - **Ação:** Simular geração de PDF (console.log).

- [ ] **Tela: Histórico de Cobranças**
    - **Local:** `src/pages/Boletos/index.tsx`
    - [ ] **Visual:** Lista de faturas com Status (Pendente/Pago/Vencido).
    - [ ] **Dica:** Data de vencimento deve ficar vermelha se `hoje > vencimento`.

### 🟡 Fase D: Dashboard & Indicadores
**Foco:** Transformar dados estáticos em dinâmicos.

- [ ] **Integração de Dados Reais**
    -   **Local:** `src/pages/Dashboard/index.tsx`
    -   **O que fazer:** Substituir os números fixos pelos dados dos mocks.
    -   **Total de Associados:** `membersMock.length`
    -   **Associados Ativos:** `membersMock.filter(m => m.status === 'ativo').length`
    -   **Despesas do Mês:** Somar `financeMock` onde o mês é atual.
    -   **Boletos Pendentes:** Contar `accountsMock` com status 'pendente'.

### 🔴 Fase E: Integração com Backend (Remoção de Mocks)
**Foco:** Conectar o Front-end à API real (Endpoints Hipotéticos).

- [ ] **Configurar Axios**
    -   **Local:** `src/services/api.ts`
    -   **Base URL:** `http://api-accg.com.br/api` (Hipotético)

- [ ] **Substituir Mocks por Requests**
    -   **Associados:** `GET /associados` (Listagem) e `POST /associados` (Cadastro)
    -   **Despesas:** `GET /despesas` e `POST /despesas`
    -   **Boletos:** `GET /boletos` e `POST /boletos/gerar`
    -   **Dashboard:** `GET /dashboard/resumo` (Ou calcular no front se a API não entregar)


---

## 📝 Notas de Arquitetura (Para Todos)
1. **Tipagem:** Todas as props devem ser tipadas. Importem de `src/types`.
2. **Estilos:** Proibido usar CSS global ou Inline Style. Usem **CSS Modules** (`styles.module.css`).
3. **Imagens:** Coloquem assets em `src/assets` e importem como variáveis (`import logo from '@/assets/logo.png'`).
