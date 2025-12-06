# 💰 Gestão Financeira - Associação Comercial

> **Status:** POC/MVP (Prova de Conceito) 
---

## 🧭 Visão Geral

Este projeto é uma aplicação web para fazer a gestão financeira da Associação Comercial de Campina Grande - PB. Ele permite cadastrar associados, lançar despesas da entidade e simular a geração de cobranças (Boletos/PIX).

**Tecnologias Utilizadas:**
- **React (Vite):** Biblioteca principal de interface.
- **TypeScript:** Para segurança e autocompletar (usado de forma básica).
- **CSS Modules:** Estilização simples e isolada por componente.
- **React Router:** Navegação entre páginas.
- **Axios:** Requisições HTTP (simuladas ou reais).

---

## 🏗 Estado Atual da Aplicação

Já deixamos a "caixa" pronta para você rechear! 🚀

### 1. O que já está pronto?
- **Configuração do Projeto:** Vite, TypeScript e ESLint já instalados.
- **Rotas:** Navegação entre Dashboard, Associados, Despesas e Boletos já configurada.
- **Layout:** Barra lateral (Sidebar) e Cabeçalho (Header) já criados.
- **Estilos Globais:** Variáveis de cores e fontes definidas em `src/styles/variables.css`.
- **Estrutura de Pastas:** Tudo organizado para você começar.

### 2. Estrutura de Pastas
```
src/
├── components/
│   ├── layout/    # Componentes estruturais (Sidebar, Header) - JÁ PRONTOS
│   └── ui/        # Seus componentes reutilizáveis (Botão, Input, etc) - FAZER AQUI
├── pages/         # Páginas da aplicação (Associados, Despesas...)
├── routes/        # Configuração das rotas
├── styles/        # Estilos globais
└── services/      # Configuração de API (Axios)
```

---

## 🚀 Como Rodar o Projeto

1. **Instalar dependências:**
   Abra o terminal na pasta do projeto e rode:
   ```bash
   npm install
   ```

2. **Rodar o projeto:**
   ```bash
   npm run dev
   ```

3. **Acessar:**
   Abra o navegador em `http://localhost:5173`

---

## 📋 Lista de Tarefas (Roadmap)

Siga esta ordem para desenvolver o projeto. Marque o que for terminando!

### 🧱 Módulo 1: UI Básica (Componentes Reutilizáveis)
*O objetivo aqui é criar pecinhas de LEGO que usaremos em todo o sistema.* (Concluído)

| # | Tarefa | Descrição | Complexidade |
|---|---|---|---|
| 1 | Criar Componente `Button` | Criar um botão que aceita texto e cor (primária/secundária) via props. | 🟢 Fácil |
| 2 | Criar Componente `Input` | Input de texto genérico que recebe label e placeholder. | 🟢 Fácil |
| 3 | Criar Componente `Card` | Um container branco com sombra suave para agrupar conteúdos. | 🟢 Fácil |
| 4 | Criar Componente `PageTitle` | Título padrão para o topo de cada página (H1 estilizado). | 🟢 Fácil |
| 5 | Criar Componente `Table` (Simples) | Estrutura HTML de tabela (`<table>`, `<thead>`, `<tbody>`) estilizada. | 🟡 Médio |
| 6 | Criar Componente `Badge` | Pequena etiqueta colorida para status (ex: "Ativo" verde, "Inativo" cinza). | 🟢 Fácil |

---

### 👥 Módulo 2: Gestão de Associados
Vamos listar dados dos associados e criar formulários.*

| # | Tarefa | Descrição | Complexidade |
|---|---|---|---|
| 7 | Criar Dados Mockados | Crie um array fictício de associados em `utils/mocks.ts` (id, nome, email, cpf, ativo). | 🟢 Fácil |
| 8 | Listar Associados | Na página `Associados`, use `.map()` para exibir os dados mockados na tela. | 🟢 Fácil |
| 9 | Aplicar Tabela | Organize a listagem dentro do componente `Table` criado no Módulo 1. | 🟡 Médio |
| 10 | Badge de Status | Use o componente `Badge` para mostrar se o associado está Ativo ou Inativo. | 🟢 Fácil |
| 11 | Criar Input de Busca | Adicione um input de busca no topo da lista. | 🟢 Fácil |
| 12 | Estado da Busca | Use `useState` para guardar o texto digitado na busca. | 🟢 Fácil |
| 13 | Filtrar Lista | Use `.filter()` para mostrar apenas associados que contém o texto da busca. | 🟡 Médio |
| 14 | Botão "Novo Associado" | Botão que, por enquanto, apenas mostra um `console.log("Clicou")`. | 🟢 Fácil |
| 15 | Criar Modal ou Tela de Form | Decida se vai usar um Modal ou uma nova Rota para cadastro. | 🟡 Médio |
| 16 | Criar Formulário | Form com: Nome, Email, CPF, Telefone. Use componentes `Input` criados. | 🟢 Fácil |
| 17 | Estado do Formulário | Crie um `useState` para cada campo ou um objeto único para o formulário. | 🟡 Médio |
| 18 | Máscara de CPF | Faça uma função simples que coloca pontos e traço no CPF enquanto digita. | 🟡 Médio |
| 19 | Salvar (Mock) | Ao submeter, adicione o novo associado ao array (em memória por enquanto). | 🟡 Médio |
| 20 | Feedback Visual | Exibir um `alert("Salvo com sucesso!")` após salvar. | 🟢 Fácil |

---

### 💸 Módulo 3: Gestão de Despesas
*Foco em cálculos e renderização condicional.*

| # | Tarefa | Descrição | Complexidade |
|---|---|---|---|
| 21 | Dados Mockados Despesas | Array com: id, descricao, categoria (Fixa/Variável), valor, data. | 🟢 Fácil |
| 22 | Listar Despesas | Exibir tabela de despesas. | 🟢 Fácil |
| 23 | Formatar Moeda | Criar função `formatMoney(valor)` para exibir "R$ 1.200,00". | 🟢 Fácil |
| 24 | Estilo Condicional | Se for despesa Fixa, cor azul; Variável, cor laranja (na categoria). | 🟢 Fácil |
| 25 | Calcular Total | Usar `.reduce()` para somar todas as despesas e exibir em um Card no topo. | 🟡 Médio |
| 26 | Card de Resumo | Exibir 3 Cards: Total Despesas, Total Fixas, Total Variáveis. | 🟡 Médio |
| 27 | Formulário de Despesa | Criar form para nova despesa (Descrição, Valor, Tipo). | 🟢 Fácil |
| 28 | Select de Tipo | Criar um `<select>` simples para escolher entre "Fixa" ou "Variável". | 🟢 Fácil |

---

### 🧾 Módulo 4: Boletos e PIX
*Interação mais complexa.*

| # | Tarefa | Descrição | Complexidade |
|---|---|---|---|
| 29 | Layout da Página | Dividir tela em 2 colunas: "Gerar Cobrança" e "Histórico". | 🟢 Fácil |
| 30 | Select de Associado | Dropdown para selecionar para qual associado é a cobrança. | 🟡 Médio |
| 31 | Input de Valor | Valor da mensalidade (sugerir padrão). | 🟢 Fácil |
| 32 | Botão "Gerar Pix" | Ao clicar, gerar uma hash aleatória simulando o "Copia e Cola". | 🟡 Médio |
| 33 | Exibir QR Code | Mostrar um quadrado cinza simulando o QR Code na tela. | 🟢 Fácil |
| 34 | Botão "Gerar Boleto" | Ao clicar, simular um download (apenas alert "Boleto baixado"). | 🟢 Fácil |
| 35 | Salvar no Histórico | Adicionar a cobrança gerada a uma lista de "Histórico Recente". | 🟡 Médio |
| 36 | Status da Cobrança | No histórico, mostrar status "Pendente" (amarelo). | 🟢 Fácil |

---

### 🔌 Módulo 5: Refinamentos e API
*Toque final.*

| # | Tarefa | Descrição | Complexidade |
|---|---|---|---|
| 37 | Configurar Axios | Criar instância do axios em `services/api.ts` (pode apontar para lugar nenhum). | 🟢 Fácil |
| 38 | Trocar Mock por API (GET) | Substituir array fixo de Associados por uma chamada `api.get('/associados')`. | 🟡 Médio |
| 39 | Tratar Loading | Mostrar texto "Carregando..." enquanto a requisição não volta. | 🟢 Fácil |
| 40 | Tratar Erro | Se a API falhar, mostrar mensagem "Erro ao carregar dados". | 🟢 Fácil |
| 41 | Página 404 | Customizar a página `NotFound` para ficar bonita. | 🟢 Fácil |
| 42 | Limpeza Final | Remover logs e códigos comentados não usados. | 🟢 Fácil |

---

## 💡 Dicas

1. **Use `console.log`:** Está em dúvida se o dado chegou? Dê um console.log nele!
2. **Comece simples:** Não tente deixar bonito agora. Faça funcionar, depois estilize.
3. **Leia o erro:** A tela vermelha do React ou o console do navegador geralmente dizem exatamente onde está o problema.
4. **Componentização:** Se você copiou e colou o mesmo código 3 vezes, provavelmente deveria transformar em um componente.

## 📚 Links Úteis
- [Documentação React (Nova)](https://react.dev/)
- [MDN Web Docs (Javascript)](https://developer.mozilla.org/pt-BR/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

**Bom código! Divirta-se aprendendo! 🚀**
