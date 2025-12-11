# 🎓 Solução: Componente Badge

Badges (ou etiquetas) servem para mostrar status de forma visual rápida (ex: "Pago", "Pendente", "Ativo").

## 1. Variantes
Assim como o botão, o Badge precisa mudar de cor dependendo do contexto.
- `success`: Verde (coisas boas, concluídas).
- `warning`: Amarelo (atenção, pendente).
- `danger`: Vermelho (erro, cancelado).
- `neutral`: Cinza (rascunho, inativo).

## 2. O Estilo
O Badge geralmente é pequeno, com cantos arredondados (pill shape) e fonte em negrito.

```css
.badge {
    border-radius: var(--border-radius-full); /* O valor 9999px deixa totalmente redondo */
    font-size: var(--font-size-xs);
    line-height: 1; /* Altura de linha ajustada para não ficar com espaço estranho */
}

.success {
    background-color: #d1fae5;
    color: #065f46;
}
```

## 3. O Componente

```tsx
interface BadgeProps {
    children: React.ReactNode;
    variant?: 'success' | 'warning' | 'danger' | 'neutral'; // Tipagem estrita
}

export function Badge({ children, variant = 'neutral' }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[variant]}`}>
            {children}
        </span>
    );
}
```

## 4. Como Usar

```tsx
<Badge variant="success">Pago</Badge>
<Badge variant="warning">Aguardando</Badge>

// Exemplo em uma tabela (Pseudo-código)
<td>
    {usuario.ativo ? (
        <Badge variant="success">Ativo</Badge>
    ) : (
        <Badge variant="neutral">Inativo</Badge>
    )}
</td>
```
