"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const imagens = [
  {
    src: "/propaganda.jpg",
    alt: "Conheça mais sobre nossos serviços",
    botao: "Saber mais",
    link: "#portfolio",
    botaoClass:
      "top-[60%] left-1/2 -translate-x-1/2 sm:top-[60%] md:top-[60%]",
  },
  {
    src: "/news.jpg",
    alt: "Fique por dentro das notícias",
    botao: "Ver notícias",
    link: "/noticias",
    botaoClass:
      "top-[72%] left-[66%] -translate-x-1/2 max-sm:top-[72%] max-sm:left-[65%]",
  },
];

export default function CarrosselServicos() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAtual((prev) => (prev + 1) % imagens.length);
    }, 3500);

    return () => clearInterval(intervalo);
  }, []);

  const imagemAtual = imagens[atual] ?? imagens[0];

  return (
    <div className="w-full">
      <div className="relative mx-auto overflow-hidden rounded-2xl bg-white shadow-lg sm:rounded-[28px]">
        <Image
          src={imagemAtual.src}
          alt={imagemAtual.alt}
          width={1920}
          height={1080}
          className="h-auto w-full object-contain"
          priority
        />

        {imagemAtual.botao && imagemAtual.link && (
          <Link
            href={imagemAtual.link}
            className={`absolute z-10 rounded-full bg-[#C6A86A] px-4 py-2 text-[10px] font-semibold text-[#021e37] shadow-[0_10px_40px_rgba(198,168,106,0.35)] transition hover:scale-105 sm:px-7 sm:py-3 sm:text-xs md:px-10 md:py-4 md:text-sm ${
              imagemAtual.botaoClass
            }`}
          >
            {imagemAtual.botao}
          </Link>
        )}
      </div>

      <div className="mt-3 flex justify-center gap-2 sm:mt-4">
        {imagens.map((_, index) => (
          <button
            key={index}
            onClick={() => setAtual(index)}
            className={`h-2.5 w-2.5 rounded-full transition sm:h-3 sm:w-3 ${
              atual === index ? "bg-[#C6A86A]" : "bg-slate-300"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}