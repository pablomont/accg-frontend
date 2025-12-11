# 🎓 Solução: Componente Button

Este guia explica passo a passo como criamos o componente `Button`. Use-o como referência para entender a estrutura dos componentes neste projeto.

## 1. O Desafio
Precisávamos de um botão que pudesse ter diferentes cores (variantes) e aceitasse todas as propriedades normais de um botão HTML (como `onClick`, `disabled`, `type`).

## 2. A Estrutura de Pastas
Criamos a pasta `src/components/ui/Button` com dois arquivos:
- `index.tsx`: A lógica e o HTML do componente.
- `styles.module.css`: O estilo isolado do componente.

## 3. O CSS (styles.module.css)
Usamos **CSS Modules** para evitar conflitos de nomes.
- `.button`: Estilo base (padding, borda, fonte).
- `.primary`: Fundo azul (cor principal).
- `.secondary`: Fundo branco com borda cinza.
- `.danger`: Fundo vermelho.

> **Dica:** Note que usamos variáveis globais como `var(--color-primary)` para manter a consistência.

## 4. O Código React (index.tsx)

### As Props
Definimos uma interface `ButtonProps` que herda de `React.ButtonHTMLAttributes<HTMLButtonElement>`. Isso significa que nosso botão aceita TUDO que um botão normal aceita, mais a nossa propriedade extra `variant`.

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger'; // Opcional, padrão será 'primary'
}
```

### O Componente
No componente, pegamos as props e montamos a classe CSS dinamicamente:

```tsx
export function Button({ 
    children, 
    variant = 'primary', // Valor padrão
    className = '', 
    ...props // Resto das props (onClick, id, etc)
}: ButtonProps) {
    return (
        <button 
            // Juntamos: classe base + classe da variante + classes extras passadas
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
```

## 5. Como Usar
```tsx
import { Button } from '@/components/ui';

<Button onClick={() => alert('Oi!')}>Clique aqui</Button>
<Button variant="danger">Excluir</Button>
<Button variant="secondary" disabled>Voltar</Button>
```
