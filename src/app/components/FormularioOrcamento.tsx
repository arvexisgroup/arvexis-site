"use client";

import { useState } from "react";

export default function FormularioOrcamento() {
  const [tipo, setTipo] = useState<"juridica" | "fisica">("juridica");

  const [dados, setDados] = useState({
    documento: "",
    contato: "",
    nome: "",
    telefone: "",
    email: "",
    solicitacao: "",
  });

  function alterar(campo: string, valor: string) {
    setDados((prev) => ({ ...prev, [campo]: valor }));
  }

  // 🔥 MÁSCARAS
  function mascaraCPF(valor: string) {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  }

  function mascaraCNPJ(valor: string) {
    return valor
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 18);
  }

  function mascaraTelefone(valor: string) {
    return valor
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
  }

  function enviarWhatsApp(e: React.FormEvent) {
    e.preventDefault();

    const mensagem =
      `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
      `Tipo: ${tipo === "juridica" ? "Pessoa Jurídica" : "Pessoa Física"}%0A` +
      `${tipo === "juridica" ? "CNPJ" : "CPF"}: ${dados.documento}%0A` +
      `${tipo === "juridica" ? "Pessoa para contato" : "Nome"}: ${
        tipo === "juridica" ? dados.contato : dados.nome
      }%0A` +
      `Telefone/WhatsApp: ${dados.telefone}%0A` +
      `E-mail: ${dados.email}%0A` +
      `Solicitação: ${dados.solicitacao}`;

    window.open(
      `https://wa.me/5541996028529?text=${mensagem}`,
      "_blank"
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#C6A86A] focus:ring-4 focus:ring-[#C6A86A]/20";

  return (
    <section className="bg-[#F4F4F4] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_25px_80px_rgba(2,30,55,0.10)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* LADO ESQUERDO */}
            <div className="relative bg-[#021e37] p-10 text-white md:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,168,106,0.22),transparent_35%)]" />

              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
                  Orçamento
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                  Solicite uma proposta personalizada
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-300">
                  Preencha os dados e nossa equipe receberá sua solicitação pelo
                  WhatsApp com todas as informações organizadas.
                </p>

                <div className="mt-10 space-y-4 text-sm text-slate-200">
                  <p>✔ Atendimento para pessoa física e jurídica</p>
                  <p>✔ Resposta prática e direcionada</p>
                  <p>✔ Análise conforme sua necessidade regulatória</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={enviarWhatsApp} className="p-8 md:p-12">

              {/* TOGGLE */}
              <div className="mb-8 flex rounded-full bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setTipo("juridica")}
                  className={`w-1/2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                    tipo === "juridica"
                      ? "bg-[#021e37] text-white shadow-md"
                      : "text-[#1E3A5F]"
                  }`}
                >
                  Pessoa Jurídica
                </button>

                <button
                  type="button"
                  onClick={() => setTipo("fisica")}
                  className={`w-1/2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                    tipo === "fisica"
                      ? "bg-[#021e37] text-white shadow-md"
                      : "text-[#1E3A5F]"
                  }`}
                >
                  Pessoa Física
                </button>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                {/* CPF / CNPJ */}
                <input
                  required
                  placeholder={tipo === "juridica" ? "CNPJ" : "CPF"}
                  className={inputClass}
                  value={dados.documento}
                  onChange={(e) =>
                    alterar(
                      "documento",
                      tipo === "juridica"
                        ? mascaraCNPJ(e.target.value)
                        : mascaraCPF(e.target.value)
                    )
                  }
                />

                {/* Nome / Contato */}
                <input
                  required
                  placeholder={
                    tipo === "juridica" ? "Pessoa para contato" : "Nome"
                  }
                  className={inputClass}
                  value={tipo === "juridica" ? dados.contato : dados.nome}
                  onChange={(e) =>
                    alterar(
                      tipo === "juridica" ? "contato" : "nome",
                      e.target.value
                    )
                  }
                />

                {/* Telefone */}
                <input
                  required
                  placeholder="Telefone / WhatsApp"
                  className={inputClass}
                  value={dados.telefone}
                  onChange={(e) =>
                    alterar("telefone", mascaraTelefone(e.target.value))
                  }
                />

                {/* Email */}
                <input
                  required
                  type="email"
                  placeholder="E-mail"
                  className={inputClass}
                  value={dados.email}
                  onChange={(e) => alterar("email", e.target.value)}
                />

                {/* Solicitação */}
                <textarea
                  required
                  placeholder="Conte brevemente o que você precisa"
                  rows={5}
                  className={`${inputClass} md:col-span-2 resize-none`}
                  value={dados.solicitacao}
                  onChange={(e) => alterar("solicitacao", e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-[#C6A86A] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#021e37] shadow-[0_15px_35px_rgba(198,168,106,0.35)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(198,168,106,0.45)]"
              >
                Solicitar orçamento
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}