# 🎓 Solução: Componente Table

Tabelas HTML nativas são chatas de estilizar. Por isso, criamos um "wrapper" (envoltório) que já deixa qualquer tabela bonita automaticamente.

## 1. O Problema
Se usarmos apenas `<table>` puro, ela fica sem bordas, sem espaçamento e feia. Teríamos que colocar classes CSS em cada `<td>` ou `<th>`.

## 2. A Solução
Criamos um componente `Table` que envolve a tabela real.
- Ele cuida do overflow (barra de rolagem lateral se a tela for pequena).
- Ele aplica estilos globais para `th` e `td` que estiverem dentro dele.

## 3. CSS Inteligente (styles.module.css)
Aqui usamos seletores aninhados. Em vez de criar classes como `.table-cell`, estilizamos as tags diretamente **desde que elas estejam dentro da nossa .table**.

```css
.table {
    /* Estilo do container da tabela */
    border-collapse: collapse; /* Tira espaços duplos entre células */
}

/* Qualquer TH dentro da nossa .table */
.table th {
    background-color: var(--color-gray-50);
    text-transform: uppercase;
}

/* Qualquer TD dentro da nossa .table */
.table td {
    padding: var(--spacing-4);
    border-bottom: 1px solid var(--color-gray-200);
}
```

## 4. O Componente

```tsx
export function Table({ children }: TableProps) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                {children}
            </table>
        </div>
    );
}
```

## 5. Como Usar
Você escreve o HTML normal de tabela dentro do componente, e ele "mágicamente" fica bonito.

```tsx
<Table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>joao@email.com</td>
        </tr>
    </tbody>
</Table>
```
