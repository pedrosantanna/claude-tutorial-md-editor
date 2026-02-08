'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const defaultMarkdown = `# Bem-vindo ao Editor de Markdown! 🎉

## O que é Markdown?
Markdown é uma linguagem de marcação leve que você pode usar para adicionar formatação a documentos de texto.

### Recursos que você pode usar:

- **Texto em negrito**
- *Texto em itálico*
- ~~Texto tachado~~
- \`código inline\`

#### Listas numeradas:
1. Primeiro item
2. Segundo item
3. Terceiro item

#### Blocos de código:
\`\`\`javascript
function saudacao(nome) {
  console.log(\`Olá, \${nome}!\`);
}
\`\`\`

#### Citações:
> "A simplicidade é o último grau de sofisticação."
> — Leonardo da Vinci

#### Links e Imagens:
[Visite o GitHub](https://github.com)

---

**Comece a editar o texto à esquerda e veja a mágica acontecer!** ✨
`;

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[70vh]">
      {/* Editor */}
      <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-800 dark:bg-gray-900 text-white px-4 py-2 font-semibold">
          ✏️ Editor
        </div>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="flex-1 p-4 font-mono text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite seu markdown aqui..."
        />
      </div>

      {/* Preview */}
      <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 font-semibold">
          👁️ Preview
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <article className="markdown-preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
