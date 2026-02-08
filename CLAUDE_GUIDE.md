# 🤖 Guia: Como Usar o Claude Code

Este guia ensina como usar o Claude Code para modificar e expandir este projeto.

## 📚 Ferramentas Principais do Claude

### 1. **Read** - Ler Arquivos
```
"Leia o arquivo app/page.tsx"
"Mostre o conteúdo de components/MarkdownEditor.tsx"
```
- Usado para entender código existente
- Claude SEMPRE lê antes de editar
- Mostra linha por linha numerado

### 2. **Edit** - Editar Arquivos
```
"Adicione um botão de copiar no editor"
"Mude a cor do cabeçalho para azul"
```
- Faz mudanças PRECISAS em arquivos
- Substitui texto existente por novo texto
- Mantém formatação e indentação

### 3. **Write** - Criar Arquivos
```
"Crie um novo componente ToolbarButton"
"Adicione um arquivo de utilitários"
```
- Cria arquivos novos do zero
- Requer leitura prévia se arquivo existe

### 4. **Bash** - Executar Comandos
```
"Instale a biblioteca date-fns"
"Rode os testes"
"Faça commit das mudanças"
```
- Executa comandos no terminal
- npm, git, etc.

### 5. **Grep** - Buscar Conteúdo
```
"Encontre onde useState é usado"
"Busque funções que usam markdown"
```
- Procura texto em múltiplos arquivos
- Suporta regex

### 6. **Glob** - Encontrar Arquivos
```
"Mostre todos os arquivos .tsx"
"Liste componentes na pasta app/"
```
- Busca por padrões de nome
- Rápido para encontrar arquivos

## 💬 Como Pedir Mudanças

### ✅ **Boas solicitações** (claras e específicas):

1. **"Adicione um botão para limpar o editor"**
   - Clara, específica, escopo definido

2. **"Mude a cor de fundo do preview para cinza claro"**
   - Especifica exatamente o que mudar

3. **"Adicione suporte para salvar no localStorage"**
   - Feature completa, mas bem definida

4. **"Corrija o bug onde o scroll não funciona no mobile"**
   - Problema específico a resolver

### ❌ **Solicitações vagas** (evite):

1. **"Melhore o design"**
   - Vago demais, qual aspecto?

2. **"Deixe mais bonito"**
   - Subjetivo, sem direção clara

3. **"Faça igual ao VS Code"**
   - Muito amplo, qual parte?

## 🎯 Exemplos Práticos

### Exemplo 1: Adicionar funcionalidade
```
Você: "Adicione um contador de palavras embaixo do editor"

Claude irá:
1. Ler MarkdownEditor.tsx
2. Adicionar estado para contar palavras
3. Criar a função de contagem
4. Adicionar UI para mostrar o contador
5. Testar que funciona
```

### Exemplo 2: Corrigir bug
```
Você: "O preview não mostra tabelas corretamente"

Claude irá:
1. Verificar como tabelas são renderizadas
2. Pesquisar no react-markdown sobre tabelas
3. Adicionar plugin necessário
4. Testar com exemplo de tabela
```

### Exemplo 3: Refatorar código
```
Você: "Separe a lógica do editor em hooks customizados"

Claude irá:
1. Analisar o código atual
2. Criar hook useMarkdownEditor
3. Mover lógica para o hook
4. Atualizar componente para usar hook
5. Garantir que funciona igual
```

## 🔄 Fluxo de Trabalho Típico

### Pedido Simples:
```
Você: "Mude o título para 'Meu Editor'"
Claude: [Read app/page.tsx] → [Edit] → Pronto!
```

### Pedido Médio:
```
Você: "Adicione botões de formatação"
Claude: 
  1. [Read] arquivos relevantes
  2. [Write] novo componente Toolbar
  3. [Edit] MarkdownEditor para incluir Toolbar
  4. [Bash] testar que funciona
```

### Pedido Complexo:
```
Você: "Adicione sistema de abas para múltiplos documentos"
Claude:
  1. [Grep] busca padrões existentes
  2. [Read] múltiplos arquivos
  3. **EnterPlanMode** - cria plano detalhado
  4. Pede sua aprovação
  5. [Write/Edit] implementa tudo
  6. [Bash] testa
```

## 🎓 Conceitos Importantes

### 1. **Plan Mode (Modo Planejamento)**
- Ativado para tarefas complexas
- Claude cria um plano antes de executar
- Você aprova antes da implementação
- Evita trabalho desnecessário

### 2. **Task Tracking (Rastreamento de Tarefas)**
- Claude cria lista de tarefas
- Você vê o progresso em tempo real
- Tarefas marcadas como concluídas automaticamente

### 3. **Parallel Execution (Execução Paralela)**
- Claude pode executar múltiplas ações simultâneas
- Exemplo: Ler 3 arquivos ao mesmo tempo
- Mais rápido para tarefas independentes

### 4. **Context Awareness (Consciência de Contexto)**
- Claude lembra do que foi feito antes
- Entende o projeto como um todo
- Mantém consistência no código

## 💡 Dicas Pro

### 1. **Seja iterativo**
```
✅ "Adicione um botão"
✅ "Agora deixe ele azul"
✅ "Adicione um ícone nele"

Melhor que:
❌ "Adicione um botão azul com ícone" (tudo de uma vez)
```

### 2. **Use exemplos**
```
✅ "Adicione um botão como o do GitHub (ícone + texto)"
✅ "Faça o layout igual ao VSCode (editor à esquerda, preview à direita)"
```

### 3. **Peça explicações**
```
"Explique como o useState funciona neste componente"
"Por que usamos 'use client' aqui?"
"Como o Tailwind funciona neste projeto?"
```

### 4. **Valide mudanças**
```
"Teste se o botão funciona"
"Verifique se o CSS está correto"
"Rode o linter"
```

## 🚀 Comandos Úteis para Claude

### Git:
- "Faça commit com a mensagem 'feat: adiciona botão'"
- "Mostre o status do git"
- "Crie uma branch feature/toolbar"

### NPM:
- "Instale a biblioteca X"
- "Atualize as dependências"
- "Remova a dependência Y"

### Debugging:
- "Adicione console.logs para debug"
- "Mostre erros no console do navegador"
- "Verifique se há erros de TypeScript"

### Documentação:
- "Adicione comentários neste código"
- "Crie um README para este componente"
- "Documente esta função"

## ⚠️ Limitações

1. **Claude NÃO pode:**
   - Ver o navegador diretamente
   - Interagir com a UI visualmente
   - Fazer uploads de imagens
   - Acessar APIs externas diretamente

2. **Claude PODE:**
   - Ler e modificar código
   - Executar comandos
   - Pesquisar documentação
   - Instalar bibliotecas
   - Fazer commits git

## 🎯 Desafios para Praticar

Tente pedir ao Claude:

### Iniciante:
1. "Mude a fonte do editor para 'Fira Code'"
2. "Adicione um rodapé com seu nome"
3. "Altere as cores do tema dark"

### Intermediário:
4. "Adicione botões de formatação (negrito, itálico)"
5. "Implemente salvamento em localStorage"
6. "Adicione um contador de caracteres"

### Avançado:
7. "Adicione sistema de temas (claro/escuro/automático)"
8. "Implemente atalhos de teclado (Ctrl+B, Ctrl+I)"
9. "Adicione exportação para HTML/PDF"

## 📖 Recursos Adicionais

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs

---

**Lembre-se:** Claude é um assistente. Você está no controle! 🎮
