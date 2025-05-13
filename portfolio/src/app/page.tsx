// pages/index.tsx
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Gabriel Cruz</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desenvolvedor Fullstack com especialização em backend (.NET e Python) e base sólida em frontend com React, Next.js e Typescript. 
          </p>
        </header>

        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Projetos</h2>
          <div className="text-center text-gray-500">
            Esta página será atualizada em breve com meus principais projetos. Enquanto isso, estou focado no desenvolvimento e refinamento de soluções práticas.
          </div>
        </section>

        <footer className="mt-20 border-t pt-6 text-sm text-center text-gray-500">
          <p>© {new Date().getFullYear()} Gabriel Cruz</p>
          <p className="mt-2">
            <a
              href="https://github.com/gabrielcruzdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://linkedin.com/in/gabrielcruzdevea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
