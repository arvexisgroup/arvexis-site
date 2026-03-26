"use client"; // Necessário para o botão de abrir/fechar o menu funcionar

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuAberto, setMenuAberto] = useState(false);
  const whatsapp =
    "https://wa.me/5531999998888?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais.";

  return (
    <html lang="pt-br">
      <body className="antialiased">
        <header className="bg-[#061C33] border-b border-white/10 sticky top-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <span className="text-white font-semibold text-xl tracking-widest">
                ARVEXIS
              </span>
            </Link>

            {/* BOTÃO MOBILE (HAMBÚRGUER) */}
            <button 
              className="text-white md:hidden p-2"
              onClick={() => setMenuAberto(!menuAberto)}
              aria-label="Abrir menu"
            >
              {menuAberto ? (
                <span className="text-2xl">✕</span> // Ícone de fechar
              ) : (
                <span className="text-2xl">☰</span> // Ícone de hambúrguer
              )}
            </button>

            {/* NAV - DESKTOP (Sempre visível em telas md+) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
              <Link href="/" className="hover:text-[#C6A86A] transition">Home</Link>
              <Link href="/sobre" className="hover:text-[#C6A86A] transition">Sobre nós</Link>
              <Link href="/servicos" className="hover:text-[#C6A86A] transition">Serviços</Link>
              <Link href="/admin" className="hover:text-[#C6A86A] transition">Hub</Link>

              <a
                href={whatsapp}
                target="_blank"
                className="ml-4 rounded-full bg-[#C6A86A] px-6 py-2.5 text-[#061C33] font-bold hover:brightness-110 transition"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* MENU MOBILE (Só aparece quando menuAberto é true) */}
          <div className={`md:hidden bg-[#061C33] border-t border-white/5 overflow-hidden transition-all duration-300 ${menuAberto ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <nav className="flex flex-col gap-4 p-6 text-white text-base">
              <Link href="/" onClick={() => setMenuAberto(false)}>Home</Link>
              <Link href="/sobre" onClick={() => setMenuAberto(false)}>Sobre nós</Link>
              <Link href="/servicos" onClick={() => setMenuAberto(false)}>Serviços</Link>
              <Link href="/admin" onClick={() => setMenuAberto(false)}>Hub Admin</Link>
              <a href={whatsapp} className="text-[#C6A86A] font-bold">Falar no WhatsApp</a>
            </nav>
          </div>
        </header>

        {children}

        {/* FOOTER BÁSICO RESPONSIVO */}
        <footer className="bg-[#061C33] py-10 border-t border-white/5 text-center text-white/50 text-xs">
          <p>© 2026 ARVEXIS - Strategic Regulatory Intelligence</p>
        </footer>
      </body>
    </html>
  );
}