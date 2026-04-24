import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#F4F4F4] text-[#444444]">
      
      {/* HEADER / HERO DA PÁGINA */}
      <section className="bg-[#0a2036] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-2">
          
          {/* TEXTO */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
              Sobre a ARVEXIS®
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Inteligência regulatória com visão estratégica
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A ARVEXIS® é uma consultoria especializada em inteligência regulatória,
              compliance sanitário e estruturação estratégica para o setor da saúde.
            </p>
          </div>

          {/* LOGO */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/tagline.png"
              alt="Logo ARVEXIS"
              width={520}
              height={520}
              className="h-auto w-[600px] object-contain opacity-95"
              priority
            />
          </div>
        </div>
      </section>

      {/* QUEM SOMOS + IMAGEM */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">
              Quem somos
            </h2>

            <p className="mt-6 text-lg leading-8 italic text-[#1E3A5F]/80">
              "Transformamos regulação em vantagem competitiva."
            </p>

            <p className="mt-4 text-lg leading-8">
              Nossa atuação está centrada na construção de estruturas regulatórias
              sólidas, seguras e estrategicamente orientadas, permitindo que
              empresas operem com previsibilidade e alto nível de conformidade no
              mercado brasileiro.
            </p>

            <p className="mt-5 text-lg leading-8">
              Unimos conhecimento técnico profundo, visão preventiva e governança
              regulatória para reduzir riscos operacionais, fortalecer processos
              internos e apoiar decisões com segurança técnica e responsabilidade.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-2xl">
            <Image
              src="/reg.png"
              alt="Mapas regulatórios, fluxos de registro de produtos, estratégia empresarial e governança corporativa"
              width={900}
              height={700}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>

        {/* VISÃO E MISSÃO */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          
          <div className="rounded-[28px] bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1E3A5F]">Visão</h3>
            <p className="mt-4 text-lg leading-8">
              Nossa visão é transformar a regulação sanitária em diferencial
              competitivo, elevando o padrão de conformidade, governança e
              responsabilidade técnica no mercado regulado.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1E3A5F]">
              Nossa Missão
            </h3>
            <p className="mt-4 text-lg leading-8">
              Ser referência nacional em consultoria regulatória estratégica,
              reconhecida pela excelência técnica, integridade e contribuição
              efetiva para o fortalecimento da cultura de compliance sanitário no
              Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* COMO APOIAMOS SUA EMPRESA */}
      <section className="bg-[#021e37] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          
          <h2 className="text-3xl font-semibold text-[#C6A86A] md:text-4xl">
            Como apoiamos sua empresa
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Regularização de Produtos",
                d: "Suporte completo para registro e pós-registro de produtos no Brasil junto aos órgãos competentes.",
              },
              {
                t: "Governança Regulatória",
                d: "Estruturação de processos internos para garantir fluidez, segurança e previsibilidade nas decisões regulatórias.",
              },
              {
                t: "Inspeções Sanitárias",
                d: "Preparação rigorosa de organizações para auditorias e inspeções, promovendo conformidade e segurança técnica.",
              },
              {
                t: "Compliance Regulatório",
                d: "Implementação de programas robustos para mitigação de riscos, ética sanitária e fortalecimento institucional.",
              },
              {
                t: "Market Access",
                d: "Estruturação estratégica de acesso ao mercado sob a ótica regulatória e competitiva.",
              },
              {
                t: "Capacitação Técnica",
                d: "Treinamento especializado para Profissionais Regulatórios e Responsáveis Técnicos.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[#C6A86A] pl-6 py-2">
                <h3 className="text-xl font-bold">{item.t}</h3>
                <p className="mt-2 text-slate-400">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl rounded-[28px] bg-white/5 p-8">
            <h3 className="text-2xl font-semibold text-[#C6A86A]">
              Nossa atuação combina:
            </h3>

            <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-300">
              <li>• Consultores com experiência sólida no setor regulatório.</li>
              <li>• Atuação estratégica e preventiva.</li>
              <li>
                • Capacitação de Profissionais Regulatórios e Responsáveis Técnicos.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* NOSSOS PILARES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">
              Nossos Pilares
            </h2>
            <p className="mt-4 text-slate-600">
              Fundamentos que guiam cada entrega da ARVEXIS®
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            <div className="rounded-3xl bg-[#F4F4F4] p-6 text-center">
              <span className="text-4xl">✔</span>
              <h3 className="mt-4 font-bold text-[#1E3A5F]">Excelência Técnica</h3>
              <p className="mt-2 text-sm">
                Rigor normativo, atualização constante e profundidade técnica nas entregas.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F4F4F4] p-6 text-center">
              <span className="text-4xl">✔</span>
              <h3 className="mt-4 font-bold text-[#1E3A5F]">Responsabilidade</h3>
              <p className="mt-2 text-sm">
                Compromisso com a segurança sanitária, integridade e seriedade técnica.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F4F4F4] p-6 text-center">
              <span className="text-4xl">✔</span>
              <h3 className="mt-4 font-bold text-[#1E3A5F]">Governança Regulatória</h3>
              <p className="mt-2 text-sm">
                Processos estruturados para decisões sustentáveis, seguras e previsíveis.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F4F4F4] p-6 text-center">
              <span className="text-4xl">✔</span>
              <h3 className="mt-4 font-bold text-[#1E3A5F]">Desenvolvimento</h3>
              <p className="mt-2 text-sm">
                Foco no fortalecimento de profissionais e organizações do setor regulado.
              </p>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/servicos"
              className="rounded-full bg-[#C6A86A] px-10 py-4 text-sm font-semibold text-[#021e37] transition hover:scale-105"
            >
              Conheça nossas soluções
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}