import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#F4F4F4] text-[#444444]">
      <section className="bg-[#061C33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
            Sobre nós
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Inteligência regulatória com visão estratégica
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A ARVEXIS é uma consultoria especializada em inteligência regulatória,
            compliance sanitário e estruturação estratégica para empresas da área da saúde.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#1E3A5F]">Quem somos</h2>
            <p className="mt-6 text-lg leading-8">
              Atuamos com foco em conformidade sanitária, segurança regulatória e
              organização técnica de empresas que precisam operar com previsibilidade
              e responsabilidade.
            </p>
            <p className="mt-5 text-lg leading-8">
              Nossa proposta é unir conhecimento técnico, estratégia regulatória e
              visão preventiva, reduzindo riscos e fortalecendo a governança sanitária.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-lg">
            <Image
              src="/sobre-documentacao.jpg"
              alt="Profissional da saúde preenchendo documentação"
              width={900}
              height={700}
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <h2 className="text-3xl font-semibold text-[#1E3A5F]">
            Nossos diferenciais
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1E3A5F]">
                Excelência técnica
              </h3>
              <p className="mt-4 leading-7">
                Atuação baseada em rigor técnico, atualização normativa e análise estratégica.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1E3A5F]">
                Visão preventiva
              </h3>
              <p className="mt-4 leading-7">
                Antecipamos riscos regulatórios e estruturamos caminhos mais seguros.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1E3A5F]">
                Estratégia aplicada
              </h3>
              <p className="mt-4 leading-7">
                Transformamos exigências regulatórias em decisões práticas e sustentáveis.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/servicos"
              className="rounded-full bg-[#1E3A5F] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Conheça nossos serviços
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}