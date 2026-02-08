# 📝 Editor de Markdown

Um editor de Markdown em tempo real construído com Next.js 15, TypeScript e Tailwind CSS.

## 🚀 Como Usar

### Iniciar o projeto
```bash
npm run dev
```

Acesse: http://localhost:3001 (ou 3000 se estiver disponível)

### Outros comandos
```bash
npm run build    # Criar build de produção
npm start        # Rodar build de produção
npm run lint     # Executar linter
```

## 🏗️ Estrutura do Projeto

```
markdown-editor/
├── app/                        # App Router (Next.js 15)
│   ├── layout.tsx             # Layout raiz da aplicação
│   ├── page.tsx               # Página inicial
│   └── globals.css            # Estilos globais + Tailwind
├── components/                # Componentes React
│   └── MarkdownEditor.tsx     # Componente principal do editor
├── package.json               # Dependências e scripts
├── tsconfig.json              # Configuração TypeScript
├── tailwind.config.ts         # Configuração Tailwind CSS
├── next.config.ts             # Configuração Next.js
└── .npmrc                     # Configuração do npm
```

## 🎓 Conceitos Aprendidos

### 1. **Next.js 15 - App Router**
- Sistema moderno de roteamento baseado em pasta `app/`
- `layout.tsx` - Define a estrutura HTML global
- `page.tsx` - Define o conteúdo da rota `/`
- **Server Components** por padrão (melhor performance)
- **Client Components** quando precisa de interatividade (`'use client'`)

### 2. **TypeScript**
- Tipagem estática para JavaScript
- Detecta erros em tempo de desenvolvimento
- Autocompletar melhorado na IDE
- Interfaces e tipos customizados

### 3. **Tailwind CSS**
- CSS utility-first (classes prontas)
- Exemplo: `bg-blue-500`, `text-white`, `p-4`
- Dark mode automático com `dark:` prefix
- Responsivo com `lg:`, `md:`, `sm:`

### 4. **React Hooks**
- `useState` - Gerencia estado do componente
- Exemplo no editor: markdown atual sendo editado
- Causa re-renderização quando o estado muda

### 5. **React Markdown**
- Biblioteca que converte Markdown em HTML
- Suporta sintaxe completa do Markdown
- Renderização segura (previne XSS)

### 6. **Turbopack**
- Bundler ultra-rápido do Next.js
- Substituto moderno do Webpack
- Hot Module Replacement (HMR) instantâneo

## 🛠️ Tecnologias Usadas

- **Next.js 15** - Framework React full-stack
- **React 19** - Biblioteca UI
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **React Markdown** - Parser de Markdown
- **ESLint** - Linter de código

## 📦 Dependências Principais

```json
{
  "next": "^15.1.6",           // Framework
  "react": "^19.0.0",          // Biblioteca UI
  "react-dom": "^19.0.0",      // React para DOM
  "react-markdown": "^9.0.1"   // Parser Markdown
}
```

## 💡 Recursos do Editor

- ✏️ **Editor ao vivo** - Digite e veja mudanças instantaneamente
- 👁️ **Preview em tempo real** - Visualize o Markdown renderizado
- 🌓 **Dark mode** - Suporte automático ao tema do sistema
- 📱 **Responsivo** - Funciona em desktop e mobile
- 🎨 **Estilos customizados** - Preview estilizado com Tailwind

## 🔧 Como o Claude Code Funciona

### Ferramentas usadas neste projeto:

1. **Bash** - Executar comandos (npm install, mkdir, cat)
2. **Read** - Ler arquivos do projeto
3. **Write** - Criar novos arquivos
4. **Edit** - Modificar arquivos existentes
5. **TaskCreate/TaskUpdate** - Gerenciar tarefas
6. **Grep** - Buscar conteúdo em arquivos
7. **Glob** - Encontrar arquivos por padrão

### Modo de trabalho:
- 🔍 **Pesquisa** - Encontra arquivos e código relevante
- 📖 **Leitura** - Entende o contexto antes de modificar
- ✏️ **Edição** - Faz mudanças precisas no código
- ✅ **Validação** - Testa e verifica funcionamento

## 📚 Próximos Passos

Sugestões para expandir o projeto:

1. **Salvar arquivos** - LocalStorage ou banco de dados
2. **Exportar PDF** - Converter Markdown para PDF
3. **Syntax highlighting** - Destaque de código nos blocos
4. **Templates** - Modelos prontos de Markdown
5. **Colaboração** - Múltiplos usuários editando
6. **Atalhos** - Ctrl+B para negrito, Ctrl+I para itálico

## 🤝 Feito com Claude Code

Este projeto foi criado interativamente com Claude Code, demonstrando:
- Setup completo de projeto Next.js
- Configuração de TypeScript e Tailwind
- Implementação de componentes React
- Resolução de problemas (cache npm)
- Documentação completa

---

**Desenvolvido como tutorial educacional** 🎓
