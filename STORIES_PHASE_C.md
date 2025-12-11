# 📋 Backlog da Fase C: Cobrança e Boletos

**Autor:** Tech Lead  
**Para:** Time de Desenvolvimento (Estagiários)  
**Status:** Pronto para Desenvolvimento

---

## 🧭 Visão Geral
Chegamos na fase de arrecadação. O objetivo aqui é facilitar a geração de cobranças (Simulação de geração de Boletos/PIX) e o acompanhamento de quem pagou ou não.

---

## 🏷️ US07: Componente Gerador de Boleto
**Objetivo:** Uma interface simples para simular a criação de uma nova cobrança para um associado.

### 📝 Descrição Técnica
Isso deve ser um card ou formulário onde o usuário seleciona quem vai ser cobrado e qual o valor.

### 📍 Onde mexer
1.  Crie a pasta: `src/components/business/billing`
2.  Crie o arquivo: `src/components/business/billing/BoletoGenerator.tsx`

### 💡 Dicas de Implementação
-   Imagine que é um "Mini Formulário".
-   **Campos:**
    -   Select de Associado (Dica: Use um `<select>` nativo ou `<Input list="...">` para simplificar, populando com nomes do `members.mock`).
    -   Valor (Number).
    -   Botão "Gerar Cobrança".
-   Ao clicar no botão, pode apenas dar um `alert` ("Boleto gerado para João: R$ 150,00").

---

## 🏷️ US08: Tela de Histórico de Cobranças
**Objetivo:** Listar todos os boletos gerados e seus status.

### 📝 Descrição Técnica
Exibir a lista de boletos que está no arquivo de dados mockados, com atenção para datas vencidas.

### 📍 Onde mexer
-   Arquivo: `src/pages/Boletos/Boletos.tsx`

### 💡 Dicas de Implementação
1.  Importe os dados: `import { accountsMock } from '@/data/accounts.mock'`.
2.  Use `<PageTitle>` com "Boletos e Cobranças".
3.  **Layout:**
    -   Você pode dividir a tela em duas colunas:
        -   Coluna Esquerda (maior): A `<Table>` com o histólrico.
        -   Coluna Direita (menor): O componente `<BoletoGenerator>` que você criou na US07.
4.  **Lógica Visual (Badges):**
    -   Status "pago" -> Cor `success` (Verde).
    -   Status "pendente" -> Cor `warning` (Amarelo).
    -   **Bônus:** Se a data de vencimento for anterior a hoje e não estiver pago, use cor `danger` (Vermelho) e mude o texto para "Vencido"!

---

## 🎨 Referência Visual
Para a tela dividida (Tabela + Gerador), você pode usar o Grid CSS.
No arquivo `Boletos.module.css`:
```css
.container {
    display: grid;
    grid-template-columns: 2fr 1fr; /* Tabela ocupa 2/3, Gerador ocupa 1/3 */
    gap: var(--spacing-6);
}
```

Bom código! 🚀
