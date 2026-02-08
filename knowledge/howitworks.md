# 📚 EXPLICAÇÃO COMPLETA DO PROJETO

Este documento explica como funciona o Editor de Markdown em detalhes.

---

## 🏗️ 1. ARQUITETURA GERAL

```
Next.js App Router (Servidor)
       ↓
   layout.tsx (HTML base)
       ↓
   page.tsx (Página inicial)
       ↓
   MarkdownEditor.tsx (Componente interativo)
       ↓
   Browser (Usuário vê e interage)
```

---

## 📁 2. ESTRUTURA DE ARQUIVOS

### app/layout.tsx - O "Esqueleto" da Aplicação

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Editor de Markdown",
  description: "Editor de Markdown em tempo real...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
```

**O que faz:**
- ✅ Define a estrutura HTML básica (`<html>`, `<body>`)
- ✅ Define metadados (título da aba, descrição para SEO)
- ✅ Importa estilos globais (`globals.css`)
- ✅ Recebe `{children}` - o conteúdo das páginas
- ✅ É um **Server Component** (roda no servidor)

**Por que é importante:**
- Envolve TODAS as páginas do site
- Só carrega UMA vez
- Perfeito para headers, footers, estilos globais

---

### app/page.tsx - A Página Inicial (`/`)

```typescript
import MarkdownEditor from "@/components/MarkdownEditor";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br...">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1>📝 Editor de Markdown</h1>
          <p>Escreva em Markdown e veja o resultado...</p>
        </header>
        
        <MarkdownEditor />
        
        <footer className="mt-8...">
          <p>Feito com Next.js 15...</p>
        </footer>
      </div>
    </main>
  );
}
```

**O que faz:**
- ✅ Define o conteúdo da rota `/` (página inicial)
- ✅ Importa o componente `MarkdownEditor`
- ✅ Adiciona header (título + descrição)
- ✅ Adiciona footer (créditos)
- ✅ É um **Server Component** (roda no servidor)

**Classes Tailwind explicadas:**
- `min-h-screen` → Altura mínima = 100vh (tela cheia)
- `bg-gradient-to-br` → Gradiente do topo-esquerda para baixo-direita
- `from-gray-50 to-gray-100` → Cores do gradiente (modo claro)
- `dark:from-gray-900` → Cor no modo escuro
- `container mx-auto` → Centraliza o conteúdo com largura máxima
- `px-4 py-8` → Padding horizontal (4) e vertical (8)

---

### components/MarkdownEditor.tsx - O Coração da Aplicação

#### Linhas 1-4: Imports

```typescript
'use client';  // ← IMPORTANTE!

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
```

**`'use client'` - Por quê?**
- Next.js 15 usa **Server Components** por padrão
- Mas este componente precisa de **interatividade** (useState, onChange)
- `'use client'` transforma em **Client Component**
- Roda no navegador, não no servidor

**`useState`** - Hook do React
- Gerencia estado (dados que mudam)
- Quando muda, o componente re-renderiza

**`ReactMarkdown`** - Biblioteca
- Converte texto Markdown em HTML
- Ex: `**negrito**` vira `<strong>negrito</strong>`

---

#### O Componente Principal

```typescript
export default function MarkdownEditor() {
  // ESTADO: Armazena o texto do editor
  const [markdown, setMarkdown] = useState(defaultMarkdown);
```

**`useState` explicado:**
```typescript
const [valor, setValor] = useState(inicial);
//     ↓      ↓                      ↓
//   atual  função             valor inicial
//          para mudar
```

**Como funciona:**
1. `markdown` → Contém o texto atual
2. `setMarkdown` → Função para atualizar
3. `defaultMarkdown` → Valor inicial

---

#### Layout Responsivo

```typescript
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[70vh]">
```

**Tailwind Grid explicado:**
- `grid` → Ativa CSS Grid
- `grid-cols-1` → 1 coluna (mobile)
- `lg:grid-cols-2` → 2 colunas em telas grandes (desktop)
- `gap-4` → Espaço entre colunas
- `h-[70vh]` → Altura = 70% da viewport

**Comportamento:**
- 📱 Mobile: Editor em cima, Preview embaixo
- 💻 Desktop: Editor à esquerda, Preview à direita

---

#### O Editor (TextArea)

```typescript
<textarea
  value={markdown}              // ← Valor atual
  onChange={(e) => setMarkdown(e.target.value)}  // ← Atualiza ao digitar
  className="..."
  placeholder="Digite seu markdown aqui..."
/>
```

**Fluxo de dados:**
```
Usuário digita → onChange dispara → setMarkdown atualiza
     ↓
  markdown muda
     ↓
React re-renderiza → textarea mostra novo valor
```

**Classes importantes:**
- `flex-1` → Ocupa todo espaço disponível
- `font-mono` → Fonte monoespaçada (tipo código)
- `resize-none` → Desabilita redimensionamento
- `focus:ring-2` → Anel azul ao focar

---

#### O Preview

```typescript
<div className="flex-1 p-4 overflow-auto">
  <article className="markdown-preview">
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </article>
</div>
```

**O que acontece:**
1. `markdown` (estado) é passado para `<ReactMarkdown>`
2. A biblioteca converte Markdown → HTML
3. Classes CSS do `globals.css` estilizam o HTML
4. `overflow-auto` → Scroll se necessário

**Reatividade:**
- Quando `markdown` muda (usuário digita)
- React re-renderiza automaticamente
- `<ReactMarkdown>` recebe novo texto
- Preview atualiza instantaneamente! ⚡

---

## 🔄 3. FLUXO COMPLETO DE FUNCIONAMENTO

### Quando você abre http://localhost:3001

```
1. Next.js processa a requisição
   ↓
2. layout.tsx → Cria estrutura HTML
   ↓
3. page.tsx → Renderiza conteúdo da página
   ↓
4. MarkdownEditor.tsx → Hidratado no browser
   ↓
5. useState inicializa com defaultMarkdown
   ↓
6. Componente renderiza com texto padrão
   ↓
7. Usuário vê editor + preview
```

### Quando você digita no editor

```
1. Usuário digita "## Hello"
   ↓
2. onChange captura o evento
   ↓
3. setMarkdown("## Hello") é chamado
   ↓
4. Estado 'markdown' muda
   ↓
5. React detecta mudança
   ↓
6. Re-renderiza MarkdownEditor
   ↓
7. textarea mostra "## Hello"
   ↓
8. ReactMarkdown converte para <h2>Hello</h2>
   ↓
9. Preview mostra título formatado
   ↓
10. Tudo em milissegundos! ⚡
```

---

## 🎨 4. ESTILOS (Tailwind CSS)

### Como funciona o Tailwind:

```typescript
className="bg-blue-500 text-white p-4 rounded"
           ↓         ↓        ↓      ↓
      background  color  padding  border-radius
```

**Converte para CSS:**
```css
.bg-blue-500 { background-color: rgb(59 130 246); }
.text-white  { color: rgb(255 255 255); }
.p-4         { padding: 1rem; }
.rounded     { border-radius: 0.25rem; }
```

### Dark Mode:

```typescript
className="bg-white dark:bg-gray-800"
           ↓              ↓
       modo claro    modo escuro
```

Tailwind detecta automaticamente a preferência do sistema!

---

## 📦 5. DEPENDÊNCIAS PRINCIPAIS

```json
{
  "next": "^15.1.6",              // Framework
  "react": "^19.0.0",             // Biblioteca UI
  "react-markdown": "^9.0.1",     // Converte MD → HTML
  "@tailwindcss/typography": "^X" // Classes prose
}
```

### Por que cada uma:

**Next.js:**
- Renderização server-side
- Roteamento automático
- Otimização de build
- Turbopack (super rápido)

**React:**
- Componentes reutilizáveis
- Reatividade (useState)
- Virtual DOM (performance)

**react-markdown:**
- Parser de Markdown seguro
- Suporta sintaxe completa
- Extensível com plugins

**@tailwindcss/typography:**
- Classes `prose` para markdown
- Estilização automática de HTML
- Suporta dark mode

---

## 🧪 6. CONCEITOS IMPORTANTES

### Server Components vs Client Components

| **Server Components** | **Client Components** |
|---|---|
| Padrão no Next.js 15 | Precisa de `'use client'` |
| Roda no servidor | Roda no navegador |
| Não pode usar hooks | Pode usar useState, useEffect |
| Melhor performance | Permite interatividade |
| layout.tsx, page.tsx | MarkdownEditor.tsx |

### Estado (State)
- Dados que mudam ao longo do tempo
- Quando muda, React re-renderiza
- `useState` é o hook mais básico

### Props
- Dados passados de pai para filho
- Exemplo: `<ReactMarkdown>{markdown}</ReactMarkdown>`
- `markdown` é uma prop

### Reatividade
- React observa mudanças no estado
- Atualiza apenas o necessário no DOM
- Por isso o preview atualiza instantaneamente

---

## 🎯 7. RESUMO VISUAL

```
┌─────────────────────────────────────┐
│         app/layout.tsx              │
│  (HTML base + estilos globais)      │
│ ┌─────────────────────────────────┐ │
│ │       app/page.tsx              │ │
│ │  (Header + Footer)              │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │  MarkdownEditor.tsx         │ │ │
│ │ │                             │ │ │
│ │ │  ┌──────────┐ ┌──────────┐ │ │ │
│ │ │  │ Editor   │ │ Preview  │ │ │ │
│ │ │  │ (input)  │ │ (output) │ │ │ │
│ │ │  └──────────┘ └──────────┘ │ │ │
│ │ │       ↓           ↑        │ │ │
│ │ │    useState → onChange     │ │ │
│ │ └─────────────────────────────┘ │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 📖 8. GLOSSÁRIO DE TERMOS

### React
- **Component**: Pedaço reutilizável de UI
- **Hook**: Função que adiciona funcionalidade (useState, useEffect)
- **State**: Dados que mudam e causam re-renderização
- **Props**: Dados passados entre componentes
- **JSX**: Sintaxe que mistura HTML com JavaScript

### Next.js
- **App Router**: Sistema de rotas baseado em pastas
- **Server Component**: Componente renderizado no servidor
- **Client Component**: Componente renderizado no navegador
- **Hydration**: Processo de tornar HTML estático interativo

### TypeScript
- **Type**: Define o formato de dados
- **Interface**: Define estrutura de objetos
- **Generic**: Tipo reutilizável com parâmetros

### Tailwind
- **Utility Class**: Classe com um único propósito CSS
- **Responsive Prefix**: Modificadores como `lg:`, `md:`
- **Dark Mode**: `dark:` prefix para tema escuro
- **Plugin**: Extensão que adiciona novas classes

---

## 🔍 9. DEBUGGING E PROBLEMAS COMUNS

### "The prose class does not exist"
**Problema:** Plugin typography não instalado
**Solução:** 
```bash
npm install @tailwindcss/typography
# Adicionar em tailwind.config.ts:
plugins: [require('@tailwindcss/typography')]
```

### "Cannot use useState in Server Component"
**Problema:** Faltou `'use client'` no componente
**Solução:** Adicionar `'use client'` no topo do arquivo

### "Module not found"
**Problema:** Importação incorreta ou pacote não instalado
**Solução:** Verificar import path ou rodar `npm install`

### Estilos não aplicando
**Problema:** Tailwind não compilando ou classe errada
**Solução:** Verificar `tailwind.config.ts` e reiniciar servidor

---

## 🚀 10. PRÓXIMOS PASSOS

### Features sugeridas:
1. **LocalStorage** - Salvar markdown automaticamente
2. **Botões de formatação** - Negrito, itálico, etc
3. **Contador de palavras** - Estatísticas do texto
4. **Exportar** - Download como .md ou .html
5. **Temas** - Trocar esquema de cores
6. **Atalhos** - Ctrl+B para negrito
7. **Split view** - Ajustar tamanho dos painéis
8. **Abas** - Múltiplos documentos

### Melhorias técnicas:
- Adicionar testes (Jest, Testing Library)
- Implementar ESLint rules mais rígidas
- Adicionar CI/CD com GitHub Actions
- Deploy na Vercel
- PWA (Progressive Web App)
- Acessibilidade (a11y)

---

**Documento criado por Claude Code**
*Última atualização: 2026-02-08*
