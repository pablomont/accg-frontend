# 🎓 Solução: Componente PageTitle

Para manter a consistência visual, nunca devemos usar tags `<h1>` ou `<h2>` soltas com estilos diferentes em cada página. Criamos o `PageTitle` para garantir que todos os títulos de página sejam idênticos.

## 1. Por que criar um componente para um título?
Se amanhã o designer decidir que todos os títulos devem ser azuis e ter fonte tamanho 40px, você só precisa alterar um arquivo (`PageTitle/styles.module.css`) e o site todo é atualizado. Isso é **Manutenibilidade**.

## 2. O Estilo
Simples e direto, usando as variáveis globais.

```css
.title {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-gray-900);
    margin-bottom: var(--spacing-6); /* Espaço padrão abaixo do título */
}
```

## 3. O Componente

```tsx
interface PageTitleProps {
    children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
    return (
        <h1 className={styles.title}>
            {children}
        </h1>
    );
}
```

## 4. Como Usar
No topo de cada página:

```tsx
<PageTitle>Dashboard</PageTitle>
// ou
<PageTitle>Cadastro de Associados</PageTitle>
```
