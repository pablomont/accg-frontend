# 💰 Gestão Financeira - ACCG (Associação Comercial de Campina Grande)

> **Status:** POC/MVP (Prova de Conceito)  

Bem-vindo ao projeto! Este é o **Front-end** do sistema de gestão financeira da **Associação Comercial de Campina Grande (ACCG)**.

---

## 🧭 Visão Geral

O sistema permite gerenciar as finanças da ACCG através de três módulos principais:
1.  **Associados:** Cadastro e listagem de membros.
2.  **Financeiro:** Controle de despesas (livro caixa).
3.  **Cobrança:** Geração de boletos e PIX.

### Tecnologias
-   **React + Vite:** Core da aplicação.
-   **TypeScript:** Tipagem estática para segurança.
-   **CSS Modules:** Estilização isolada.
-   **React Router:** Navegação.

---

## 🏗 Estado Atual da Aplicação

O ambiente já está **100% configurado**. As tarefas de infraestrutura ("Senior Tasks") foram finalizadas:

### 1. O que já está pronto?
-   ✅ **Rotas e Layout:** Navegação configurada (`src/routes`) usando o layout padrão (`src/layouts`).
-   ✅ **UI Kit (Módulo 1):** Componentes base (`Button`, `Input`, `Card`, `Modal`, `Table`...) prontos em `src/components/ui`.
-   ✅ **Dados Mockados:** Arquivos JSON para simular o banco de dados em `src/data`.
-   ✅ **Tipagem:** Interfaces TypeScript definidas em `src/types`.

### 2. Estrutura de Pastas
```
src/
├── assets/        # Imagens e ícones
├── components/
│   ├── ui/        # SEU KIT DE FERRAMENTAS (Use esses componentes!)
│   └── business/  # ONDE VOCÊS VÃO TRABALHAR (Ex: MemberCard, BoletoGenerator)
├── data/          # Dados fictícios para teste (Members, Finance...)
├── layouts/       # Sidebar e Header (Não precisa mexer)
├── pages/         # Telas da aplicação (Associados, Despesas...)
├── routes/        # Arquivo de rotas
├── styles/        # CSS global
└── types/         # Contratos de dados (Interfaces)
```

---

## 🚀 Como Rodar

1.  **Instalar:** `npm install`
2.  **Rodar:** `npm run dev`
3.  **Acessar:** `http://localhost:5173`

---

## 🎨 Exemplo de Implementação (Dashboard)

Antes de começar, **olhem o arquivo** `src/pages/Dashboard/Dashboard.tsx`.
Ele funciona como um "gabarito" de como usar os componentes do UI Kit. Nele vocês vão encontrar exemplos de:
-   **Estrutura de Página:** Uso do `<PageTitle>` e organização do layout.
-   **Ações:** Como usar `<Input>` e `<Button>` juntos.
-   **Dados:** Como exibir informações em `<Card>` e `<Table>`.
-   **Interatividade:** Exemplo real de como abrir um `<Modal>` usando `useState`.

Use o dashboard como base para criar as telas de Associados e Financeiro!

---

## 📋 Suas Tarefas

> **💡 Dica Importante:** Antes de criar um componente do zero, verifique se já não existe algo pronto em `src/components/ui`. Consulte o `README.md` dentro de cada pasta de componente para aprender a usar!

### 🟢 Fase A: Gestão de Associados
**Foco:** Cadastro e listagem de membros.

**👥 Responsáveis:** Suelle Ferreira Maciel, Horlan Silva de Lacerda, Raul Confessor Oliveira Silva

> 📘 **Guia Técnico:**
> *   [US01: Card de Identificação do Membro](https://github.com/pablomont/accg-frontend/issues/1)
> *   [US02: Tela de Listagem de Associados](https://github.com/pablomont/accg-frontend/issues/2)
> *   [US03: Formulário de Cadastro](https://github.com/pablomont/accg-frontend/issues/3)

- [ ] **Componente: Card de Membro**
    -   **Onde:** `src/components/business/members/MemberCard.tsx`
    -   **O que fazer:** Criar um card que mostra a foto, nome e status do associado. Use o componente `<Card>` e `<Badge>` do UI Kit.
- [ ] **Tela: Listagem**
    -   **Onde:** `src/pages/Associados/index.tsx`
    -   **O que fazer:** Listar os dados de `src/data/members.mock.ts` usando o componente `<Table>`.
- [ ] **Tela: Formulário**
    -   **Onde:** `src/pages/Associados/Form.tsx`
    -   **O que fazer:** Criar formulário de cadastro (Nome, CPF, Email) usando `<Input>` e `<Button>`.

### 🔵 Fase B: Financeiro (Despesas)
**Foco:** Controle de gastos e livro caixa.

**👥 Responsáveis:** Rodrigues Matheus Lima, Emanuel Vittor Ferreira Barbosa, Luciano dos Santos Silva

> 📘 **Guia Técnico:**
> *   [US04: Componente de Resumo Financeiro](https://github.com/pablomont/accg-frontend/issues/4)
> *   [US05: Tela de Livro Caixa](https://github.com/pablomont/accg-frontend/issues/5)
> *   [US06: Registro Rápido (Modal)](https://github.com/pablomont/accg-frontend/issues/6)

- [ ] **Componente: Resumo Financeiro**
    -   **Onde:** `src/components/business/finance/FinancialSummary.tsx`
    -   **O que fazer:** 3 cards no topo mostrando "Entradas", "Saídas" e "Saldo Atual".
- [ ] **Tela: Livro Caixa**
    -   **Onde:** `src/pages/Despesas/index.tsx`
    -   **O que fazer:** Tabela de despesas consumindo `src/data/finance.mock.ts`.
- [ ] **Ação: Nova Despesa**
    -   **O que fazer:** Botão que abre o componente `<Modal>` para adicionar uma despesa rápida.

### 🟣 Fase C: Cobrança
**Foco:** Boletos e PIX.

**👥 Responsáveis:** Lethycia Zenaide Queiroz Melo, Lara Marina Almeida Fernandes


> 📘 **Guia Técnico:**
> *   [US07: Componente Gerador de Boleto](https://github.com/pablomont/accg-frontend/issues/7)
> *   [US08: Tela de Histórico de Cobranças](https://github.com/pablomont/accg-frontend/issues/8)

- [ ] **Componente: Gerador de Boleto**
    -   **Onde:** `src/components/business/billing/BoletoGenerator.tsx`
    -   **O que fazer:** Área para selecionar um associado e gerar um valor de cobrança.
- [ ] **Tela: Histórico**
    -   **Onde:** `src/pages/Boletos/index.tsx`
    -   **O que fazer:** Lista de cobranças geradas (dados em `src/data/accounts.mock.ts`). Destaque vencidos em vermelho.

### 🟡 Fase D: Dashboard (Indicadores)
**Foco:** Transformar a tela inicial estática em dinâmica.

**👥 Responsáveis:** Danilo dos Santos Gomes, Julia Santos Arruda, Mayara de Sousa Moura


> 📘 **Guia Técnico:**
> *   [US09: Indicadores de Associados](https://github.com/pablomont/accg-frontend/issues/9)
> *   [US10: Indicadores Financeiros](https://github.com/pablomont/accg-frontend/issues/10)
> *   [US11: Indicadores de Cobrança](https://github.com/pablomont/accg-frontend/issues/11)

- [ ] **Integração de Dados**
    -   **Onde:** `src/pages/Dashboard/index.tsx`
    -   **O que fazer:** Importar os Mocks e substituir os números "chumbados" por cálculos reais.
    -   ex: `const totalAssociados = membersMock.length;`

### 🔴 Fase E: Integração com Backend (Remoção de Mocks)
**Foco:** Conectar o Front-end à API real.

**👥 Responsáveis:** Héllida Louize Lima Duarte Gomes, Isadora Rodrigues Bessa Silva, Lucas fernando da silva santos, Melquisedeque Gomes de Medeiros

> 📘 **Guia Técnico:**
> *   [US12: Configuração do Cliente Axios](https://github.com/pablomont/accg-frontend/issues/12)
> *   [US13: Integração de Associados](https://github.com/pablomont/accg-frontend/issues/13)
> *   [US14: Integração Financeira e Boletos](https://github.com/pablomont/accg-frontend/issues/14)

Nesta fase, você deve remover os arquivos de `src/data` e usar o **Axios** para buscar dados reais.

**1. Configurar Axios (`src/services/api.ts`)**
```typescript
import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://api-accg.com.br/api' // URL Hipotética
});
```

**2. Endpoints para consumir (Substituir Mocks):**

| Recurso | Método | Endpoint Hipotético | Payload (Body) |
|---|---|---|---|
| **Associados** | GET | `/associados` | - |
| **Criar Associado** | POST | `/associados` | `{ nome, cpf, email }` |
| **Despesas** | GET | `/despesas` | - |
| **Criar Despesa** | POST | `/despesas` | `{ descricao, valor, categoria }` |
| **Boletos** | GET | `/boletos` | - |
| **Gerar Boleto** | POST | `/boletos/gerar` | `{ associadoId, valor }` |


---

## 💡 Dicas de Ouro

1.  **Não invente a roda:** Use `styles.module.css` para tudo. Nada de style inline!
2.  **Tipagem:** Sempre importe as interfaces de `src/types` (ex: `import { Associado } from '@/types/associado'`).
3.  **Dúvidas?** Olhe como o `Dashboard.tsx` foi feito. Ele é um bom exemplo de como usar os componentes.

**Bom trabalho, time! 🚀**
