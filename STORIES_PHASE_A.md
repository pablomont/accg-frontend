# 📋 Backlog da Fase A: Gestão de Associados

**Autor:** Tech Lead  
**Para:** Time de Desenvolvimento (Estagiários)  
**Status:** Pronto para Desenvolvimento

---

## 🧭 Visão Geral
Nesta fase, focaremos em permitir que a ACCG gerencie seus associados. Precisamos exibir quem são os membros e permitir o cadastro de novos.

---

## 🏷️ US01: Card de Identificação do Membro
**Objetivo:** Criar um componente visual reutilizável que exibe o resumo de um associado.

### 📝 Descrição Técnica
Precisamos exibir os dados básicos de um membro (Nome, Foto/Ícone, Status, Tipo de Pessoa) em um formato de "cartão". Este componente será usado na listagem.

### 📍 Onde mexer
1.  Crie a pasta: `src/components/business/members`
2.  Crie o arquivo: `src/components/business/members/MemberCard.tsx`
3.  Crie os estilos: `src/components/business/members/styles.module.css`

### 💡 Dicas de Implementação
-   Use o componente base `<Card>` do nosso UI Kit para envolver o conteúdo.
-   Use o componente `<Badge>` para mostrar o status ("ativo" = sucesso, "inativo" = erro/cinza).
-   **Props Sugeridas:**
    ```typescript
    interface MemberCardProps {
        member: Associado; // Importe a interface de @/types/associado
    }
    ```
-   Para o ícone, use `User` (pessoa física) e `Building2` (pessoa jurídica) da biblioteca `lucide-react`.

---

## 🏷️ US02: Tela de Listagem de Associados
**Objetivo:** Exibir todos os associados cadastrados em formato de tabela ou grid.

### 📝 Descrição Técnica
A tela atual de Associados é apenas um placeholder. Precisamos transformá-la para consumir os dados do mock e listá-los.

### 📍 Onde mexer
-   Arquivo: `src/pages/Associados/Associados.tsx`

### 💡 Dicas de Implementação
1.  Importe os dados de teste: `import { membersMock } from '@/data/members.mock'`.
2.  Utilize o componente `<PageTitle>` para o cabeçalho.
3.  **Desafio:** O Tech Lead sugere duas validações visuais:
    -   Se tiver poucos items, mostre usando o componente `<Table>`.
    -   (Opcional) Tente criar um grid usando o `MemberCard` que você criou na US01 para ver como fica.
4.  Lembre-se de adicionar um botão "Novo Associado" no topo da página.

---

## 🏷️ US03: Formulário de Cadastro
**Objetivo:** Criar a tela para adicionar novos membros.

### 📝 Descrição Técnica
Precisamos de uma rota e uma tela onde o usuário possa preencher Nome, CPF/CNPJ e Email.

### 📍 Onde mexer
1.  Crie o arquivo: `src/pages/Associados/Form.tsx`
2.  Registre a nova rota em `src/routes/AppRoutes.tsx` (ex: `/associados/novo`).

### 💡 Dicas de Implementação
-   Use o componente `<Input>` para cada campo.
-   Use o componente `<Button>` para enviar.
-   **Hook:** Use `useState` para guardar os valores do formulário (ex: `const [formData, setFormData] = useState({...})`).
-   **Submit:** No `onSubmit`, por enquanto, apenas faça um `console.log(formData)` e exiba um `alert('Associado salvo!')`. Não tente conectar na API real ainda (Fase E).
-   Não esqueça do botão "Voltar" (tip: use `useNavigate` do react-router-dom).

---

## 🎨 Referência Visual
Está com dúvida de como montar a tela?
👉 **Consulte o arquivo:** `src/pages/Dashboard/Dashboard.tsx`.
Ele contém exemplos práticos de como usar Títulos, Tabelas, Botões e Inputs alinhados. **Copie e cole os padrões de lá!**
