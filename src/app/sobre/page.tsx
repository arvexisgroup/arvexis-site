import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#F4F4F4] text-[#444444]">
      {/* HEADER / HERO DA PÁGINA */}
      <section className="bg-[#061C33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
            Sobre a Arvexis
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Inteligência regulatória com visão estratégica
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A ARVEXIS é uma consultoria de elite especializada em inteligência regulatória,
            compliance sanitário e estruturação estratégica para o setor da saúde.
          </p>
        </div>
      </section>

      {/* QUEM SOMOS + IMAGEM */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Quem somos</h2>
            <p className="mt-6 text-lg leading-8 italic text-[#1E3A5F]/80">
              "Atuamos onde a técnica encontra a estratégia."
            </p>
            <p className="mt-4 text-lg leading-8">
              Focamos em conformidade sanitária e segurança regulatória para empresas que buscam operar com 
              previsibilidade e responsabilidade no mercado brasileiro. 
            </p>
            <p className="mt-5 text-lg leading-8">
              Nossa proposta é unir conhecimento técnico profundo e visão preventiva, reduzindo riscos operacionais 
              e fortalecendo a governança sanitária de nossos parceiros.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-2xl">
            <Image
              src="/sobre-documentacao.jpg"
              alt="Profissional da saúde preenchendo documentação"
              width={900}
              height={700}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ÁREAS DE APOIO E ATUAÇÃO (NOVO) */}
      <section className="bg-[#061C33] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-3xl font-semibold text-[#C6A86A] md:text-4xl">Como apoiamos sua empresa</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Regularização de Produtos", d: "Suporte completo para registro e pós-registro de produtos no Brasil junto aos órgãos competentes." },
              { t: "Governança Regulatória", d: "Estruturação de processos internos para garantir fluidez e segurança nas decisões regulatórias." },
              { t: "Inspeções Sanitárias", d: "Preparação rigorosa de organizações para auditorias e inspeções, garantindo conformidade total." },
              { t: "Compliance Regulatório", d: "Implementação de programas robustos para mitigação de riscos e ética sanitária." },
              { t: "Market Access", d: "Estruturação estratégica de acesso ao mercado sob a ótica regulatória competitiva." },
              { t: "Capacitação Técnica", d: "Treinamento especializado para Profissionais Regulatórios e Responsáveis Técnicos." }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[#C6A86A] pl-6 py-2">
                <h3 className="text-xl font-bold">{item.t}</h3>
                <p className="mt-2 text-slate-400">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSSOS PILARES (DETALHADO) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Nossos Pilares</h2>
            <p className="mt-4 text-slate-600">Fundamentos que guiam cada entrega da ARVEXIS</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-6 bg-[#F4F4F4] rounded-3xl">
              <span className="text-4xl">✔</span>
              <h3 className="mt-4 font-bold text-[#1E3A5F]">Excelência Técnica</h3>
              <p className="mt-2 text-sm">Rigor normativo e atualização constante.</p>
            </div>
            <div className="text-center p-6 bg-[#F4F4F4] rounded-3xl">
              <span className="text-4xl">✔</span>
              <h3 className="mt-4 font-bold text-[#1E3A5F]">Responsabilidade</h3>
              <p className="mt-2 text-sm">Compromisso com a segurança sanitária.</p>
            </div>
            <div className="text-center p-6 bg-[#F4F4F4] rounded-3xl">
              <span className="text-4xl">✔</span>
              <h3 className="mt-4 font-bold text-[#1E3A5F]">Governança</h3>
              <p className="mt-2 text-sm">Estratégias sustentáveis a longo prazo.</p>
            </div>
            <div className="text-center p-6 bg-[#F4F4F4] rounded-3xl">
              <span className="text-4xl">✔</span>
              <h3 className="mt-4 font-bold text-[#1E3A5F]">Desenvolvimento</h3>
              <p className="mt-2 text-sm">Foco no crescimento de profissionais do setor.</p>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/servicos"
              className="rounded-full bg-[#C6A86A] px-10 py-4 text-sm font-semibold text-[#061C33] transition hover:scale-105"
            >
              Conheça nossos serviços em detalhe
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}