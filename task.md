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