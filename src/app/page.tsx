import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  const whatsappLink =
    "https://wa.me/5531000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais.";

  return (
    <main className="min-h-screen bg-[#F4F4F4] text-[#444444]">
      <section className="bg-[#061C33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
                Sobre nós
              </p>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Inteligência regulatória com visão estratégica
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                A ARVEXIS é uma consultoria especializada em inteligência regulatória,
                compliance sanitário e estruturação estratégica para empresas da área da saúde.
              </p>

              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-[#C6A86A] px-8 py-3 text-sm font-semibold text-[#061C33] transition hover:opacity-90"
                >
                  Entre em contato
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
  <div className="relative rounded-[28px] bg-gradient-to-br from-[#0A2746] to-[#061C33] p-[2px] shadow-2xl">
    
    {/* Efeito borda premium */}
    <div className="rounded-[26px] bg-[#061C33]/80 backdrop-blur-md p-6">

      {/* Glow atrás */}
      <div className="absolute inset-0 rounded-[28px] bg-[#C6A86A]/10 blur-2xl opacity-40" />

      <Image
        src="/logo-arvexis.jpeg"
        alt="Logo Arvexis"
        width={420}
        height={420}
        className="relative w-full max-w-[300px] rounded-[18px] object-contain"
        priority
      />
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-5xl">
                Quem somos
              </h2>

              <p className="mt-6 text-lg leading-8">
                Atuamos com foco em conformidade sanitária, segurança regulatória e
                organização técnica de empresas que precisam operar com previsibilidade
                e responsabilidade.
              </p>

              <p className="mt-5 text-lg leading-8">
                Nossa proposta é unir conhecimento técnico, estratégia regulatória e
                visão preventiva, reduzindo riscos e fortalecendo a governança.
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] shadow-xl">
              <Image
                src="/sobre-documentacao.jpg"
                alt="Profissional em ambiente técnico"
                width={1200}
                height={800}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-5xl">
            Nossos diferenciais
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1E3A5F]">
                Excelência técnica
              </h3>
              <p className="mt-4 leading-7">
                Atuação baseada em rigor técnico, atualização normativa e análise estratégica.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1E3A5F]">
                Visão preventiva
              </h3>
              <p className="mt-4 leading-7">
                Antecipamos riscos regulatórios e estruturamos caminhos mais seguros.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1E3A5F]">
                Estratégia aplicada
              </h3>
              <p className="mt-4 leading-7">
                Transformamos exigências regulatórias em decisões práticas e sustentáveis.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/servicos"
              className="rounded-full bg-[#1E3A5F] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Conheça nossos serviços
            </Link>

            <Link
              href="/"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#1E3A5F] transition hover:bg-slate-50"
            >
              Voltar para a home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}