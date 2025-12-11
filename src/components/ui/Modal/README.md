# 🎓 Solução: Componente Modal

O `Modal` é aquele cartão flutuante que aparece no centro da tela e bloqueia o fundo (overlay).

## 1. O Desafio
O modal precisa:
- Aparecer na frente de tudo (`z-index`).
- Fechar ao clicar fora ou apertar ESC.
- Ter uma animação suave de entrada.

## 2. O Overlay (Fundo Escuro)
Criamos uma `div` com `position: fixed` cobrindo a tela toda.
```css
.overlay {
    position: fixed;
    /* top, left, right, bottom 0 = cobre tudo */
    background-color: rgba(0, 0, 0, 0.5); /* Preto 50% transparente */
    z-index: var(--z-index-modal);
}
```

## 3. O "Click Outside"
No HTML, se você tem um elemento Pai e um Filho, clicar no Filho também dispara o clique no Pai (Propagação).
Para fechar o modal apenas clicando no fundo escuro, usamos um truque:

```tsx
<div className={styles.overlay} onClick={onClose}> {/* Se clicar aqui, fecha */}
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}> {/* Se clicar aqui, NÃO deixa subir pro pai */}
        {...}
    </div>
</div>
```

## 4. O Componente

```tsx
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    // Hook para ouvir tecla ESC
    useEffect(() => {
        // ... lógica do ESC
    }, [onClose]);

    // Se isOpen for false, não renderiza NADA (retorna null)
    if (!isOpen) return null;

    return (
        // ... estrutura HTML
    );
}
```
