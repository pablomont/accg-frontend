# 💰 Gestão Financeira - Associação Comercial

Sistema de gestão financeira desenvolvido para auxiliar o controle administrativo e financeiro de associações comerciais.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat-square&logo=vite&logoColor=white)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Guia de Estilos](#-guia-de-estilos)
- [Tarefas para Desenvolvimento](#-tarefas-para-desenvolvimento)
- [Links Úteis para Estudo](#-links-úteis-para-estudo)
- [Boas Práticas](#-boas-práticas)
- [Dúvidas Frequentes](#-dúvidas-frequentes)

---

## 🎯 Sobre o Projeto

Este sistema tem como objetivo informatizar os processos administrativos e financeiros de uma associação comercial, permitindo:

- **Cadastro de Associados:** Gerenciar informações dos membros da associação
- **Controle de Despesas:** Registrar e categorizar todas as despesas da entidade
- **Geração de Cobranças:** Emitir boletos e códigos PIX para pagamento de mensalidades

### Personas
- Presidente da associação
- Setor administrativo/financeiro

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição | Documentação |
|------------|--------|-----------|--------------|
| **React** | 18+ | Biblioteca para construção de interfaces | [Documentação Oficial](https://react.dev/) |
| **TypeScript** | 5+ | Superset JavaScript com tipagem estática | [Documentação Oficial](https://www.typescriptlang.org/docs/) |
| **Vite** | 5+ | Build tool e dev server | [Documentação Oficial](https://vitejs.dev/guide/) |
| **React Router** | 6+ | Roteamento para React | [Documentação Oficial](https://reactrouter.com/en/main) |
| **Axios** | 1+ | Cliente HTTP para requisições | [Documentação Oficial](https://axios-http.com/docs/intro) |
| **Lucide React** | - | Biblioteca de ícones | [Documentação Oficial](https://lucide.dev/guide/packages/lucide-react) |
| **CSS Modules** | - | Estilos com escopo local | [Documentação](https://github.com/css-modules/css-modules) |

---

## 📌 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Git** - [Download](https://git-scm.com/)
- **VS Code** (recomendado) - [Download](https://code.visualstudio.com/)

### Extensões Recomendadas para VS Code

| Extensão | Descrição |
|----------|-----------|
| [ES7+ React Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) | Snippets para React |
| [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter) | Auto-import para TypeScript |
| [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules) | Autocomplete para CSS Modules |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) | Exibe erros inline no código |
| [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) | Erros TS mais legíveis |

---

## 🚀 Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/pablomont/accg-frontend/
cd accg-frontend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
```bash
npm run dev
```

### 4. Acesse no navegador
```
http://localhost:5173
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o linter para verificar erros |

---

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens, fontes e arquivos estáticos
│   └── images/
│
├── components/          # Componentes reutilizáveis
│   └── layout/          # Componentes de estrutura da página
│       ├── Header/      # Cabeçalho da aplicação
│       ├── Sidebar/     # Menu lateral de navegação
│       └── MainLayout/  # Layout principal que envolve as páginas
│
├── pages/               # Páginas da aplicação
│   ├── Dashboard/       # Página inicial com resumos
│   ├── Associados/      # Módulo de associados
│   ├── Despesas/        # Módulo de despesas
│   ├── Boletos/         # Módulo de boletos e PIX
│   └── NotFound/        # Página 404
│
├── routes/              # Configuração de rotas
│   ├── AppRoutes.tsx    # Definição das rotas
│   └── index.ts
│
├── services/            # Serviços e integrações
│   └── api.ts           # Configuração do Axios
│
├── styles/              # Estilos globais
│   ├── globals.css      # Reset e estilos base
│   └── variables.css    # Variáveis CSS (cores, espaçamentos, etc.)
│
├── types/               # Definições de tipos TypeScript
│   ├── associado.ts     # Tipos relacionados a associados
│   ├── despesa.ts       # Tipos relacionados a despesas
│   ├── boleto.ts        # Tipos relacionados a boletos/PIX
│   └── index.ts         # Exportações centralizadas
│
├── App.tsx              # Componente raiz
├── main.tsx             # Ponto de entrada da aplicação
└── vite-env.d.ts        # Tipos do Vite
```

### Padrão de Organização de Componentes

Cada componente segue a estrutura:
```
NomeComponente/
├── NomeComponente.tsx       # Código do componente
├── NomeComponente.module.css # Estilos do componente
└── index.ts                  # Exportação do componente
```

---

## 🎨 Guia de Estilos

### Variáveis CSS Disponíveis

As variáveis estão definidas em `src/styles/variables.css`. **Sempre utilize essas variáveis** ao invés de valores fixos.

#### Cores Principais
```css
var(--color-primary)       /* Azul principal: #1273b7 */
var(--color-primary-dark)  /* Azul escuro: #0d5a8f */
var(--color-primary-light) /* Azul claro: #52a3df */
```

#### Cores de Feedback
```css
var(--color-success)  /* Verde - sucesso: #10b981 */
var(--color-warning)  /* Amarelo - alerta: #f59e0b */
var(--color-danger)   /* Vermelho - erro: #ef4444 */
var(--color-info)     /* Azul - informação: #3b82f6 */
```

#### Cores Neutras
```css
var(--color-white)     /* Branco */
var(--color-gray-50)   /* Cinza mais claro */
var(--color-gray-100)
var(--color-gray-200)
var(--color-gray-300)
var(--color-gray-400)
var(--color-gray-500)  /* Cinza médio */
var(--color-gray-600)
var(--color-gray-700)
var(--color-gray-800)
var(--color-gray-900)  /* Cinza mais escuro */
```

#### Espaçamentos
```css
var(--spacing-1)   /* 0.25rem (4px) */
var(--spacing-2)   /* 0.5rem (8px) */
var(--spacing-3)   /* 0.75rem (12px) */
var(--spacing-4)   /* 1rem (16px) */
var(--spacing-5)   /* 1.25rem (20px) */
var(--spacing-6)   /* 1.5rem (24px) */
var(--spacing-8)   /* 2rem (32px) */
var(--spacing-10)  /* 2.5rem (40px) */
var(--spacing-12)  /* 3rem (48px) */
```

#### Bordas e Sombras
```css
var(--border-radius-sm)    /* 4px */
var(--border-radius-md)    /* 8px */
var(--border-radius-lg)    /* 12px */
var(--border-radius-full)  /* Circular */

var(--shadow-sm)   /* Sombra suave */
var(--shadow-md)   /* Sombra média */
var(--shadow-lg)   /* Sombra forte */
```

### Exemplo de Uso
```css
/* ❌ Evite */
.botao {
  background-color: #3b82f6;
  padding: 16px;
  border-radius: 8px;
}

/* ✅ Prefira */
.botao {
  background-color: var(--color-primary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
}
```

---

## ✅ Tarefas para Desenvolvimento

As tarefas estão organizadas por **prioridade de implementação**. Siga a ordem sugerida para melhor aproveitamento.

# 📋 Backlog de Tarefas - Gestão Financeira (POC/MVP)

As tarefas estão organizadas por prioridade de implementação. Siga a ordem sugerida para melhor aproveitamento.

---

## 🔴 PRIORIDADE ALTA (Implementar Primeiro)

Componentes base que serão utilizados em todo o sistema.

### Componentes UI Reutilizáveis

| # | Tarefa | Descrição | Complexidade |
|---|--------|-----------|--------------|
| 1 | Componente Button | Criar botão com variantes (primary, secondary, danger), tamanhos (sm, md, lg) e estados (loading, disabled) | 🟢 Fácil |
| 2 | Componente Input | Criar input com label, placeholder, mensagem de erro e estados visuais (foco, erro) | 🟢 Fácil |
| 3 | Componente Select | Criar select/dropdown com label, placeholder, opções e mensagem de erro | 🟢 Fácil |
| 4 | Componente Card | Criar container com título, conteúdo e footer opcional para agrupar informações | 🟢 Fácil |
| 5 | Componente Table | Criar tabela com colunas configuráveis, estilo zebrado e mensagem de lista vazia | 🟡 Médio |
| 6 | Componente Badge | Criar badge para status com variantes de cor (success, warning, danger, info) | 🟢 Fácil |
| 7 | Componente Spinner | Criar indicador de loading animado com tamanhos variados (sm, md, lg) | 🟢 Fácil |
| 8 | Componente Modal | Criar modal com overlay escuro, título, conteúdo e botões de ação | 🟡 Médio |
| 9 | Navegação Sidebar | Criar menu lateral fixo com links para Associados, Despesas e Boletos/PIX | 🟡 Médio |

---

## 🟠 PRIORIDADE MÉDIA (Implementar em Seguida)

Funcionalidades principais dos módulos.

### Módulo: Cadastro de Associados

| # | Tarefa | Descrição | Complexidade |
|---|--------|-----------|--------------|
| 10 | Página de Listagem | Criar tela com tabela exibindo Nome, CPF/CNPJ, Email, Telefone e Status dos associados | 🟡 Médio |
| 11 | Dados Mockados | Criar array com 5-10 associados fictícios para desenvolvimento sem API | 🟢 Fácil |
| 12 | Formulário de Cadastro | Criar formulário com campos: nome, CPF/CNPJ, e-mail, telefone e endereço | 🟡 Médio |
| 13 | Controle de Estado do Form | Usar useState para controlar todos os campos do formulário de associado | 🟢 Fácil |
| 14 | Validação Básica | Validar campos obrigatórios e exibir mensagens de erro visuais | 🟡 Médio |
| 15 | Busca por Nome/CPF | Implementar campo de busca que filtra a lista em tempo real | 🟢 Fácil |
| 16 | Visualização Detalhada | Criar modal ou página exibindo todos os dados de um associado específico | 🟢 Fácil |
| 17 | Edição de Associado | Reaproveitar formulário de cadastro para modo de edição | 🟡 Médio |
| 18 | Exclusão com Confirmação | Criar modal de confirmação antes de excluir um associado | 🟢 Fácil |
| 19 | Indicador de Status | Exibir badge colorido para status Ativo (verde) e Inativo (vermelho) | 🟢 Fácil |
| 20 | Responsividade | Adaptar listagem e formulário para funcionar em telas mobile | 🟡 Médio |

### Módulo: Cadastro de Despesas (Plano de Contas)

| # | Tarefa | Descrição | Complexidade |
|---|--------|-----------|--------------|
| 21 | Página de Listagem | Criar tela com tabela exibindo Código, Descrição, Categoria e Valor médio | 🟡 Médio |
| 22 | Dados Mockados | Criar array com categorias de despesas típicas (Aluguel, Energia, Internet, etc.) | 🟢 Fácil |
| 23 | Formulário de Despesa | Criar formulário com Código, Descrição, Categoria (Fixa/Variável) e Valor | 🟡 Médio |
| 24 | Select de Categoria | Implementar dropdown para selecionar entre Despesa Fixa ou Variável | 🟢 Fácil |
| 25 | Formatação de Valores | Exibir valores em formato de moeda brasileira (R$ 1.234,56) | 🟢 Fácil |
| 26 | Totalizador | Exibir cards com soma de Despesas Fixas, Variáveis e Total Geral | 🟡 Médio |
| 27 | Filtro por Categoria | Permitir filtrar lista mostrando apenas Fixas ou apenas Variáveis | 🟢 Fácil |
| 28 | Edição de Despesa | Modal ou página para editar uma despesa existente | 🟢 Fácil |
| 29 | Exclusão com Confirmação | Modal de confirmação antes de excluir uma despesa | 🟢 Fácil |
| 30 | Responsividade | Adaptar listagem e formulário para funcionar em telas mobile | 🟡 Médio |

### Módulo: Geração de Boleto/PIX

| # | Tarefa | Descrição | Complexidade |
|---|--------|-----------|--------------|
| 31 | Página Principal | Criar tela com seleção de associado, valor, mês de referência e botões de ação | 🟡 Médio |
| 32 | Select de Associado | Dropdown populado com lista de associados para seleção | 🟢 Fácil |
| 33 | Campos de Valor e Vencimento | Inputs para informar valor da mensalidade e data de vencimento | 🟢 Fácil |
| 34 | Componente PixDisplay | Criar componente que exibe código PIX em área destacada com fonte mono | 🟡 Médio |
| 35 | Botão Copiar PIX | Implementar cópia do código PIX para área de transferência com feedback visual | 🟢 Fácil |
| 36 | Componente BoletoDisplay | Criar visualização simulada de boleto com dados do associado e valor | 🟡 Médio |
| 37 | Linha Digitável | Exibir linha digitável fictícia com botão para copiar | 🟢 Fácil |
| 38 | Botão Imprimir | Implementar impressão do boleto usando window.print() | 🟢 Fácil |
| 39 | Histórico de Cobranças | Tabela listando boletos/PIX gerados com Associado, Tipo, Valor, Data e Status | 🟡 Médio |
| 40 | Badges de Status | Indicadores coloridos para Pago (verde), Pendente (amarelo) e Vencido (vermelho) | 🟢 Fácil |
| 41 | Filtro por Status | Permitir filtrar histórico por status de pagamento | 🟢 Fácil |
| 42 | Responsividade | Adaptar telas de geração e histórico para dispositivos móveis | 🟡 Médio |

---

## 🟢 PRIORIDADE BAIXA (Implementar por Último)

Melhorias, refinamentos e funcionalidades extras.

### Melhorias de UX e Funcionalidades Extras

| # | Tarefa | Descrição | Complexidade |
|---|--------|-----------|--------------|
| 43 | Página Dashboard | Criar tela inicial com cards resumindo: associados ativos, despesas do mês e boletos pendentes | 🟡 Médio |
| 44 | Cards de Métricas | Criar componente reutilizável para exibir número + label (ex: "150 Associados Ativos") | 🟢 Fácil |
| 45 | Componente ErrorMessage | Criar componente para exibir erros com ícone, mensagem e botão "Tentar novamente" | 🟢 Fácil |
| 46 | Estado de Loading nas Páginas | Exibir Spinner enquanto dados estão sendo carregados | 🟢 Fácil |
| 47 | Estado de Lista Vazia | Exibir mensagem amigável quando não houver dados para mostrar | 🟢 Fácil |
| 48 | Feedback Visual nos Forms | Destacar campos obrigatórios com asterisco e bordas vermelhas em caso de erro | 🟡 Médio |
| 49 | Mensagem de Sucesso | Exibir confirmação visual após salvar/excluir com sucesso | 🟢 Fácil |
| 50 | Máscaras de Input | Implementar máscaras para CPF/CNPJ e telefone (opcional, usar biblioteca) | 🟡 Médio |
| 51 | Breadcrumb | Criar navegação em migalhas de pão para indicar localização atual | 🟢 Fácil |
| 52 | Página 404 | Criar tela para rotas não encontradas com link para voltar ao início | 🟢 Fácil |
| 53 | Tema Visual Consistente | Padronizar cores, espaçamentos e tipografia em toda a aplicação | 🟡 Médio |
| 54 | Documentação Básica | Criar README com instruções de instalação e descrição dos componentes | 🟢 Fácil |

---

## 📊 Resumo Geral

| Prioridade | Quantidade | Descrição |
|------------|------------|-----------|
| 🔴 Alta | 9 tarefas | Componentes UI base |
| 🟠 Média | 33 tarefas | Módulos principais (Associados, Despesas, Boletos/PIX) |
| 🟢 Baixa | 12 tarefas | Melhorias de UX e extras |
| **Total** | **54 tarefas** | — |

---

## 🚀 Sugestão de Distribuição por Semana

| Semana | Foco | Tarefas |
|--------|------|---------|
| 1 | Componentes Base | #1 a #9 |
| 2 | Módulo Associados | #10 a #20 |
| 3 | Módulo Despesas | #21 a #30 |
| 4 | Módulo Boletos/PIX | #31 a #42 |
| 5 | Melhorias e Finalização | #43 a #54 |

---

## 📚 Links Úteis para Estudo

### React

| Recurso | Descrição | Link |
|---------|-----------|------|
| Documentação Oficial | Guia completo do React | [react.dev](https://react.dev/) |
| Tutorial Interativo | Aprenda React na prática | [react.dev/learn](https://react.dev/learn) |
| Hooks | Guia completo de Hooks | [react.dev/reference/react](https://react.dev/reference/react) |

### TypeScript

| Recurso | Descrição | Link |
|---------|-----------|------|
| Documentação Oficial | Guia do TypeScript | [typescriptlang.org](https://www.typescriptlang.org/docs/) |
| TS para Iniciantes | Tutorial básico | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) |
| React + TypeScript | Cheatsheet | [react-typescript-cheatsheet](https://react-typescript-cheatsheet.netlify.app/) |

### React Router

| Recurso | Descrição | Link |
|---------|-----------|------|
| Documentação v6 | Guia oficial | [reactrouter.com](https://reactrouter.com/en/main) |
| Tutorial | Passo a passo | [Tutorial Oficial](https://reactrouter.com/en/main/start/tutorial) |

### Axios

| Recurso | Descrição | Link |
|---------|-----------|------|
| Documentação | Guia de uso | [axios-http.com](https://axios-http.com/docs/intro) |
| Exemplos | Casos de uso comuns | [Exemplos](https://axios-http.com/docs/example) |

### CSS

| Recurso | Descrição | Link |
|---------|-----------|------|
| CSS Modules | Documentação | [css-modules](https://github.com/css-modules/css-modules) |
| Flexbox Guide | Guia visual de Flexbox | [css-tricks.com/flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) |
| Grid Guide | Guia visual de Grid | [css-tricks.com/grid](https://css-tricks.com/snippets/css/complete-guide-grid/) |
| CSS Variables | Variáveis CSS | [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties) |

### Ferramentas

| Recurso | Descrição | Link |
|---------|-----------|------|
| Lucide Icons | Busca de ícones | [lucide.dev/icons](https://lucide.dev/icons/) |
| DevTools React | Extensão do navegador | [React DevTools](https://react.dev/learn/react-developer-tools) |

---

## 📝 Boas Práticas

### Nomenclatura

```typescript
// ✅ Componentes: PascalCase
function UserCard() { }

// ✅ Funções e variáveis: camelCase
const userName = 'João';
function getUserData() { }

// ✅ Constantes: SCREAMING_SNAKE_CASE
const API_BASE_URL = 'http://...';

// ✅ Tipos e Interfaces: PascalCase
interface UserData { }
type ButtonVariant = 'primary' | 'secondary';

// ✅ Arquivos de componentes: PascalCase
UserCard.tsx
UserCard.module.css

// ✅ Arquivos utilitários: camelCase
formatters.ts
validators.ts
```

### Estrutura de Componentes

```tsx
// 1. Imports (externos primeiro, internos depois)
import { useState } from 'react';
import { User } from 'lucide-react';

import { Button } from '@/components/ui';
import styles from './MeuComponente.module.css';

// 2. Types/Interfaces
interface MeuComponenteProps {
  titulo: string;
  onSave: () => void;
}

// 3. Componente
export function MeuComponente({ titulo, onSave }: MeuComponenteProps) {
  // 3.1 Hooks
  const [loading, setLoading] = useState(false);

  // 3.2 Handlers
  function handleClick() {
    setLoading(true);
    onSave();
  }

  // 3.3 Render
  return (
    <div className={styles.container}>
      <h1>{titulo}</h1>
      <Button onClick={handleClick} isLoading={loading}>
        Salvar
      </Button>
    </div>
  );
}
```

### Commits

Siga o padrão de commits semânticos:

```bash
# Formato
<tipo>: <descrição curta>

# Tipos
feat: nova funcionalidade
fix: correção de bug
style: alterações de estilo (CSS)
refactor: refatoração de código
docs: documentação
chore: tarefas de manutenção
```

Exemplos:
```bash
git commit -m "feat: criar componente Button"
git commit -m "fix: corrigir validação de CPF"
git commit -m "style: ajustar responsividade da sidebar"
```

---

## ❓ Dúvidas Frequentes

### Como criar um novo componente?

1. Crie uma pasta em `src/components/ui/NomeComponente/`
2. Crie os arquivos:
   - `NomeComponente.tsx` - código do componente
   - `NomeComponente.module.css` - estilos
   - `index.ts` - exportação
3. Exporte no `src/components/ui/index.ts`

### Como criar uma nova página?

1. Crie uma pasta em `src/pages/NomePagina/`
2. Crie os arquivos seguindo o mesmo padrão
3. Adicione a rota em `src/routes/AppRoutes.tsx`

### Como fazer requisições à API?

```typescript
import api from '@/services/api';

// GET
const response = await api.get('/associados');
const dados = response.data;

// POST
const novoAssociado = { nome: 'João', email: 'joao@email.com' };
await api.post('/associados', novoAssociado);

// PUT
await api.put('/associados/123', dadosAtualizados);

// DELETE
await api.delete('/associados/123');
```

### Como usar os ícones?

```tsx
import { Users, Receipt, FileText } from 'lucide-react';

function MeuComponente() {
  return (
    <div>
      <Users size={24} color="var(--color-primary)" />
      <Receipt size={20} />
      <FileText />
    </div>
  );
}
```

### Como usar CSS Modules?

```tsx
import styles from './MeuComponente.module.css';

function MeuComponente() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Olá</h1>
      {/* Classes múltiplas */}
      <button className={`${styles.botao} ${styles.botaoPrimario}`}>
        Clique
      </button>
    </div>
  );
}
```
---

## 📄 Licença

Este projeto é de uso interno da organização.

---

> 💡 **Dica:** Em caso de dúvidas, consulte primeiro esta documentação e os links de estudo. Se persistir, procure o professor ou colega mais experiente.

---
