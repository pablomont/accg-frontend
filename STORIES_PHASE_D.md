# 📋 Backlog da Fase D: Dashboard Dinâmico (KPIs)

**Autor:** Tech Lead  
**Para:** Time de Desenvolvimento (Estagiários)  
**Status:** Pronto para Desenvolvimento

---

## 🧭 Visão Geral
Nosso Dashboard hoje é bonito, mas mentiroso. Ele exibe números fixos (mocks) que não refletem a realidade dos outros módulos. Vamos tornar esses dados dinâmicos!

---

## 🏷️ US09: Indicadores de Associados
**Objetivo:** Calcular e exibir o total real de membros cadastrados.

### 📝 Descrição Técnica
Substituir o valor fixo dos cards "Total de Associados" e "Associados Ativos" por cálculos baseados na lista de membros.

### 📍 Onde mexer
-   Arquivo: `src/pages/Dashboard/Dashboard.tsx`

### 💡 Dicas de Implementação
1.  Importe a lista de membros: `import { membersMock } from '@/data/members.mock'`.
2.  **Calcule:**
    -   `total`: `membersMock.length`.
    -   `ativos`: `membersMock.filter(m => m.status === 'ativo').length`.
3.  Atualize o array `summaryCards` (que agora está importado, talvez você precise recriá-lo localmente ou usar um `useMemo` se quiser ser chique) com esses valores.

---

## 🏷️ US10: Indicadores Financeiros
**Objetivo:** Exibir o total de despesas real do mês.

### 📝 Descrição Técnica
Somar todas as despesas lançadas no mock financeiro.

### 📍 Onde mexer
-   Arquivo: `src/pages/Dashboard/Dashboard.tsx`

### 💡 Dicas de Implementação
1.  Importe: `import { financeMock } from '@/data/finance.mock'`.
2.  **Lógica:** Use a função `.reduce()` para somar o campo `valor` de todos os itens.
3.  **Formatação:** Não esqueça de formatar para R$ usando `Intl.NumberFormat`.

---

## 🏷️ US11: Indicadores de Cobrança
**Objetivo:** Alertar sobre boletos pendentes.

### 📝 Descrição Técnica
Contar quantos boletos estão com status "pendente" ou "vencido".

### 📍 Onde mexer
-   Arquivo: `src/pages/Dashboard/Dashboard.tsx`

### 💡 Dicas de Implementação
1.  Importe: `import { accountsMock } from '@/data/accounts.mock'`.
2.  **Filtro:** Conte quantos itens não tem status 'pago'.
3.  Atualize o card de cor `danger` (Vermelho) com esse número.

---

## 🏆 Desafio do Tech Lead
Se você alterar qualquer coisa nos mocks (adicionar um associado na Fase A ou uma despesa na Fase B), ao voltar para o Dashboard, os números **devem** mudar automaticamente.
Para fazer isso funcionar entre telas sem usar Backend, você vai perceber que os mocks são estáticos.
*Dica:* Se quiser impressionar, mova os dados dos mocks para o `localStorage` ou apenas aceite que eles resetam no refresh por enquanto. O importante é o cálculo estar certo!
