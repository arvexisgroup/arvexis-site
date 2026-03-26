import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsapp =
    "https://wa.me/5531999998888?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais.";

  return (
    <html lang="pt-br">
      <body>
        <header className="bg-[#061C33] border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              
              <span className="text-white font-semibold text-lg tracking-wide">
                ARVEXIS
              </span>
            </Link>

            {/* MENU */}
            <nav className="flex items-center gap-6 text-sm text-white">
              <Link href="/">Home</Link>
              <Link href="/sobre">Sobre nós</Link>
              <Link href="/servicos">Serviços</Link>

              {/* BOTÃO WHATSAPP */}
              <a
                href={whatsapp}
                target="_blank"
                className="ml-4 rounded-full bg-[#C6A86A] px-5 py-2 text-[#061C33] font-semibold hover:opacity-90"
              >
                Contato
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}