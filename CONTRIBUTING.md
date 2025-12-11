# 🤝 Guia de Contribuição

  

Para manter nosso código organizado e garantir que todos trabalhem bem em conjunto, seguimos um fluxo de trabalho rigoroso baseado no **Gitflow Simplificado**.

  

---

  

## 🚀 Fluxo de Trabalho (Workflow)

  

Cada tarefa ("User Story" ou "Task") deve seguir estritamente este ciclo:

  

### 1. Escolha ou Abra uma Issue

Todo código escrito **deve** estar vinculado a uma **Issue** no GitHub.

- Vá na aba **Issues**.

- Identifique a tarefa que você vai trabalhar (ex: `US01: Card de Identificação`).

- Atribua a issue a você.

  

### 2. Crie uma Branch

Nunca comite direto na `main` ou `develop`!

  

**Opção A: Via GitHub (Recomendado)**

Dentro da Issue, na barra lateral direita em "Development", clique em **"Create a branch"**.

O GitHub vai sugerir o nome correto e criar a branch para você. Depois, no seu terminal:

```bash

git fetch origin

git checkout nome-da-branch-criada

```

  

**Opção B: Via Terminal**

Se preferir fazer manualmente, garanta estar na `develop` atualizada e siga o padrão: `feature/issue-[id]-[descricao-curta]`

  

Exemplo (se a Issue for a #12):

```bash

# Primeiro, garanta que você está na develop atualizada

git checkout develop

git pull origin develop

  

# Crie sua branch

git checkout -b feature/issue-12-member-card

```

  

### 3. Desenvolvimento e Commits

Faça commits pequenos e semânticos. Evite "comitão" gigante no final.

  

Exemplo de boas mensagens:

- `feat: cria componente basic de card`

- `style: ajusta bordas do modal`

- `fix: corrige erro de tipagem no input`

  

### 4. Abra um Pull Request (PR)

Terminou a tarefa? Hora de mandar para revisão!

  

1. Envie sua branch para o GitHub: `git push origin feature/issue-12-member-card`

2. Abra o Pull Request apontando para a branch **`develop`** (⚠️ **NUNCA para `main`**).

3. Na descrição do PR, link a issue usando "Closes #12" ou "Fixes #12".

4. Solicite revisão de pelo menos um colega (Code Review).

  

### 5. Merge

Após a aprovação, o PR será mergeado na `develop`.

A `main` é sagrada e só recebe código da `develop` quando uma "Release" está pronta.

  

---

  

## 🛠 Comandos Úteis

  

| Ação | Comando |

|---|---|

| Baixar atualizações | `git pull origin develop` |

| Ver status | `git status` |

| Adicionar arquivos | `git add .` |

| Comitar | `git commit -m "feat: mensagem"` |

| Subir branch | `git push -u origin nome-da-branch` |

  

---