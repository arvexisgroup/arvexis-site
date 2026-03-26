"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imagens = [
  {
    src: "/servico-lab-1.jpg",
    alt: "Procedimento técnico em laboratório",
  },
  {
    src: "/servico-lab-2.jpg",
    alt: "Equipe técnica em ambiente laboratorial",
  },
  {
    src: "/servico-lab-3.jpg",
    alt: "Manipulação de amostras em laboratório",
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

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-[28px] shadow-lg">
        <Image
          src={imagens[atual].src}
          alt={imagens[atual].alt}
          width={1200}
          height={800}
          className="h-[420px] w-full object-cover"
        />
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {imagens.map((_, index) => (
          <button
            key={index}
            onClick={() => setAtual(index)}
            className={`h-3 w-3 rounded-full transition ${
              atual === index ? "bg-[#C6A86A]" : "bg-slate-300"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}