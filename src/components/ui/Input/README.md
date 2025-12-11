# 🎓 Solução: Componente Input

O `Input` é um campo de texto que já vem com um rótulo (label) e um espaço para mostrar erros de validação.

## 1. A Estrutura
- `index.tsx`
- `styles.module.css`

## 2. O Estilo
Criamos um container flex column para empilhar: Label, Input e Mensagem de Erro.
O input muda de cor quando recebe foco (`:focus`) para melhorar a experiência do usuário.

## 3. O Código React

### Interface
Estendemos `React.InputHTMLAttributes<HTMLInputElement>` para ganhar poderes como `placeholder`, `type`, `value` e `onChange` de graça.

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string; // Opcional: texto acima do input
    error?: string; // Opcional: mensagem vermelha abaixo
}
```

### Renderização Condicional
Usamos `{ label && ... }` para só mostrar o label se ele for passado. O mesmo para o erro.

```tsx
export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className={`${styles.container} ${className}`}>
            {/* Só mostra se tiver label */}
            {label && (
                <label className={styles.label} htmlFor={props.id}>
                    {label}
                </label>
            )}
            
            <input 
                className={styles.input}
                {...props} // Repassa todas as props html para o input real
            />
            
            {/* Só mostra se tiver erro */}
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
```

## 4. Como Usar
```tsx
<Input 
    label="Nome Completo" 
    placeholder="Digite seu nome" 
    onChange={(e) => setNome(e.target.value)}
/>

<Input 
    label="Email" 
    type="email" 
    error="Email inválido" 
/>
```
