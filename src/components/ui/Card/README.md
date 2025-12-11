# 🎓 Solução: Componente Card

O `Card` é um dos componentes mais simples, mas essenciais para dar a "cara" de aplicação moderna. Ele serve para agrupar conteúdo em uma caixa branca com sombra.

## 1. O Conceito
Em UI Design, usamos "Cards" para separar informações. Em vez de jogar tudo na tela cinza, colocamos blocos brancos flutuantes.

## 2. O Estilo (styles.module.css)
O segredo está na sombra (`box-shadow`) e no arredondamento (`border-radius`).

```css
.card {
    background-color: var(--color-white);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-sm); /* Sombra suave */
    padding: var(--spacing-6);    /* Espaçamento interno */
    border: 1px solid var(--color-gray-200);
}
```

## 3. O Componente (index.tsx)
O Card é um "wrapper" (embrulho). Ele precisa receber conteúdo dentro dele. No React, o conteúdo que vai "dentro" da tag é recebido na prop especial `children`.

```tsx
interface CardProps {
    children: React.ReactNode; // Aceita qualquer coisa (texto, divs, outros componentes)
    className?: string; // Para o caso de precisarmos adicionar margens extras por fora
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    );
}
```

## 4. Como Usar

```tsx
<Card>
    <h2>Resumo Financeiro</h2>
    <p>R$ 0,00</p>
</Card>
```

Podemos aninhar componentes dentro dele:

```tsx
<Card>
    <PageTitle>Meus Dados</PageTitle>
    <Input label="Nome" />
    <Button>Salvar</Button>
</Card>
```
