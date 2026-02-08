import MarkdownEditor from "@/components/MarkdownEditor";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            📝 Editor de Markdown
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Escreva em Markdown e veja o resultado em tempo real
          </p>
        </header>
        
        <MarkdownEditor />
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>Feito com Next.js 15, TypeScript e Tailwind CSS</p>
        </footer>
      </div>
    </main>
  );
}
