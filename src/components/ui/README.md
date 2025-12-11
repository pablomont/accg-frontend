# Componentes UI

Esta pasta conterá os componentes reutilizáveis da aplicação.

## Componentes a Desenvolver (Prioridade Alta)

Os alunos devem criar os seguintes componentes:

### 1. Button
- Variantes: `primary`, `secondary`, `danger`, `ghost`
- Tamanhos: `sm`, `md`, `lg`
- Estados: `loading`, `disabled`
- Props: `leftIcon`, `rightIcon`

### 2. Input
- Com label e mensagem de erro
- Suporte a ícones (esquerda/direita)
- Estados visuais: `focus`, `error`, `disabled`

### 3. Select
- Com label e placeholder
- Lista de opções configurável
- Mensagem de erro

### 4. Card
- Com título, conteúdo e footer opcional
- Variantes de estilo

### 5. Modal
- Overlay com fechamento ao clicar fora
- Fechar com tecla ESC
- Tamanhos: `sm`, `md`, `lg`, `xl`

### 6. Table
- Colunas configuráveis
- Estado de loading (skeleton)
- Mensagem quando vazio

### 7. Badge
- Variantes: `success`, `warning`, `danger`, `info`, `default`

### 8. Spinner
- Tamanhos: `sm`, `md`, `lg`

### 9. Toast
- Tipos: `success`, `error`, `warning`, `info`
- Auto-dismiss após 5 segundos
- Context + Hook para uso global

## Estrutura de Cada Componente

```
NomeComponente/
├── NomeComponente.tsx
├── NomeComponente.module.css
└── index.ts
```

## Exemplo de Implementação

```tsx
// Button/Button.tsx
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? 'Carregando...' : children}
    </button>
  );
}
```

## Dicas

1. **Use as variáveis CSS** definidas em `src/styles/variables.css`
2. **Mantenha os estilos isolados** usando CSS Modules
3. **Documente as props** usando TypeScript interfaces
4. **Teste os componentes** em diferentes cenários
