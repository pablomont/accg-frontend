# 📋 Backlog da Fase E: Integração com Backend

**Autor:** Tech Lead  
**Para:** Time de Desenvolvimento (Estagiários)  
**Status:** Bloqueado (Mocks devem ser removidos aqui)

---

## 🧭 Visão Geral
Chegou a hora de tirar as rodinhas da bicicleta. Vamos conectar o Frontend a uma API real (mesmo que hipotética) e parar de usar dados falsos.

---

## 🏷️ US12: Configuração do Cliente Axios
**Objetivo:** Criar um cliente HTTP para centralizar as configurações da API.

### 📝 Descrição Técnica
Ao invés de usar `fetch` direto, usaremos a biblioteca `axios` para facilitar nossa vida com baseURL e timeouts.

### 📍 Onde mexer
1.  Instale: `npm install axios`
2.  Crie: `src/services/api.ts`

### 💡 Dicas de Implementação
```typescript
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://api-accg.com.br/api', // URL Hipotética
    timeout: 5000,
});
```
*Nota:* Como a API não existe de verdade, você verá erros de 404 (Network Error) no console. **Isso é esperado nesta fase de simulação.**

---

## 🏷️ US13: Integração de Associados
**Objetivo:** Substituir `members.mock` por `api.get('/associados')`.

### 📝 Descrição Técnica
Vá na tela de Listagem de Associados e no Formulário e troque a lógica estática por chamadas assíncronas.

### 📍 Onde mexer
-   `src/pages/Associados/Associados.tsx`
-   `src/pages/Associados/Form.tsx`

### 💡 Dicas de Implementação
1.  **Listagem:**
    ```typescript
    useEffect(() => {
        api.get('/associados')
           .then(response => setMembers(response.data))
           .catch(error => console.error("Erro ao buscar associados", error));
    }, []);
    ```
2.  **Cadastro:**
    ```typescript
    const handleSubmit = async (data) => {
        try {
            await api.post('/associados', data);
            alert('Salvo com sucesso!');
        } catch (error) {
            alert('Erro ao salvar');
        }
    };
    ```

---

## 🏷️ US14: Integração Financeira e Boletos
**Objetivo:** Conectar o restante do sistema.

### 📝 Descrição Técnica
Repetir o processo da US13 para as telas de Despesas e Boletos.

### 📍 Onde mexer
-   `src/pages/Despesas/Despesas.tsx`: `GET /despesas`
-   `src/pages/Boletos/Boletos.tsx`: `GET /boletos`

### 💡 Dicas de Implementação
-   Lembre-se que agora tudo é assíncrono (Promise).
-   Se o seu componente Dashboard "quebrar" porque os mocks sumiram, tente fazer requisições lá também (`Promise.all([api.get...])`) ou deixe-o estático por enquanto.
-   **Importante:** Ao final desta fase, a pasta `src/data` deve ser DELETADA do projeto.

---

## 🏁 Checkpoint Final
Se você chegou até aqui, o projeto deixou de ser um protótipo estático para se tornar um Frontend SPA real conectado a serviços. Parabéns! 🚀
