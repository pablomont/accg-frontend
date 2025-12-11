# 📋 Backlog da Fase B: Financeiro (Despesas)

**Autor:** Tech Lead  
**Para:** Time de Desenvolvimento (Estagiários)  
**Status:** Pronto para Desenvolvimento

---

## 🧭 Visão Geral
Nesta fase, trabalharemos no "coração" financeiro da ACCG. Precisamos dar visibilidade sobre o caixa (entradas e saídas) e permitir o registro rápido de novas despesas.

---

## 🏷️ US04: Componente de Resumo Financeiro
**Objetivo:** Exibir 3 cards no topo da tela com o balanço atual.

### 📝 Descrição Técnica
Precisamos criar um componente que receba os totais e exiba:
1.  **Entradas:** Total de receitas (Verde)
2.  **Saídas:** Total de despesas (Vermelho)
3.  **Saldo:** Diferença entre entradas e saídas (Azul ou "Cor Primária")

### 📍 Onde mexer
1.  Crie a pasta: `src/components/business/finance`
2.  Crie o arquivo: `src/components/business/finance/FinancialSummary.tsx`

### 💡 Dicas de Implementação
-   Olhe como o `summaryCards` foi feito no `src/data/dashboard.mock.ts`.
-   Use o componente `<Card>` para cada bloco.
-   Para os ícones, use `TrendingUp` (Entradas), `TrendingDown` (Saídas) e `Wallet` (Saldo) do `lucide-react`.
-   **Desafio Lógico:** Tente fazer o componente receber apenas uma lista de transações e ele mesmo calcular os totais usando `.reduce()`!

---

## 🏷️ US05: Tela de Livro Caixa
**Objetivo:** Listar todas as movimentações financeiras.

### 📝 Descrição Técnica
Transformar a tela de Despesas para exibir a tabela de movimentações consumindo o mock.

### 📍 Onde mexer
-   Arquivo: `src/pages/Despesas/Despesas.tsx`

### 💡 Dicas de Implementação
1.  Importe os dados: `import { financeMock } from '@/data/finance.mock'`.
2.  Use `<PageTitle>` com o título "Livro Caixa".
3.  Use o componente `<Table>` para listar.
4.  **Formatação:** Use `Intl.NumberFormat` para formatar os valores em Real (R$).
    ```javascript
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
    ```
5.  Use `<Badge>` na coluna de status ("pago" vs "pendente").

---

## 🏷️ US06: Registro Rápido (Modal)
**Objetivo:** Permitir adicionar uma despesa sem sair da tela.

### 📝 Descrição Técnica
Ao clicar no botão "Nova Despesa", deve-se abrir um Modal com os campos básicos.

### 📍 Onde mexer
-   Arquivo: `src/pages/Despesas/Despesas.tsx`

### 💡 Dicas de Implementação
-   **Essa é fácil:** O código está praticamente pronto no `Dashboard.tsx`.
-   Copie a lógica do `isModalOpen` e do componente `<Modal>` do Dashboard.
-   Dentro do Modal, coloque inputs para:
    -   Descrição (Texto)
    -   Valor (Number)
    -   Categoria (Select ou Texto)
-   Lembra do alinhamento do botão com o Input de busca? Use a classe `.controls` que já definimos no CSS global ou copie do módulo do Dashboard.

---

## 🎨 Referência Visual
Novamente: **usem o `Dashboard.tsx` como gabarito.**
Lá tem exemplos prontos de cards coloridos, tabelas com badges e modais funcionando. Não percam tempo reinventando a roda!
