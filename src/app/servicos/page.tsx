import Link from "next/image";
import LinkNext from "next/link";
import CarrosselServicos from "../components/CarrosselServicos";

const frentesAtuacao = [
  {
    categoria: "REGULATÓRIO CORPORATIVO",
    subtitulo: "Ciclo de vida e conformidade de produtos",
    itens: [
      "Estratégia de regularização de produtos (Registro e Pós-registro)",
      "Avaliação de enquadramento regulatório e listas de ingredientes",
      "Elaboração de dossiês técnicos e revisão de rotulagem (Brasil e Exportação)",
      "Suporte junto ao Inmetro e Código de Defesa do Consumidor",
      "Gestão de exigências técnicas e suporte em fiscalizações"
    ]
  },
  {
    categoria: "REGULARIZAÇÃO DE EMPRESAS",
    subtitulo: "Estruturação sanitária e operacional",
    itens: [
      "Obtenção de AFE (ANVISA) e Licenciamento Sanitário",
      "Regularização junto ao MAPA, Polícia Federal, Exército e Polícia Civil",
      "Implementação de Manual de Boas Práticas e Sistemas da Qualidade",
      "Preparação para inspeções sanitárias e estruturação documental",
      "Vinculação e suporte para Responsável Técnico (RT)"
    ]
  },
  {
    categoria: "MARKET ACCESS E GOVERNANÇA",
    subtitulo: "Inteligência estratégica e internacionalização",
    itens: [
      "Avaliação de viabilidade regulatória para empresas estrangeiras",
      "Diagnóstico regulatório e auditorias internas documentais",
      "Mapeamento e gestão de riscos regulatórios",
      "Planejamento estratégico sanitário e compliance",
      "Estratégia de registro para ingresso no mercado brasileiro"
    ]
  }
];

export default function ServicosPage() {
  const whatsappLink = "https://wa.me/5531000000000?text=Gostaria de uma consultoria estratégica.";

  return (
    <main className="min-h-screen bg-white text-[#444444]">
      {/* HEADER / INTRO */}
      <section className="bg-[#061C33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
            Soluções Arvexis
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Inteligência regulatória para empresas e profissionais de elite
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Onde a conformidade encontra a estratégia. Não apenas protocolamos processos, 
            estruturamos decisões que garantem a viabilidade do seu negócio.
          </p>
        </div>
      </section>

      {/* CARROSSEL VISUAL */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
           <CarrosselServicos />
        </div>
      </section>

      {/* DETALHAMENTO DAS FRENTES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-3">
          {frentesAtuacao.map((frente, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-bold text-[#C6A86A] mb-2">{frente.categoria}</span>
              <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">{frente.subtitulo}</h2>
              <ul className="space-y-4 border-t border-slate-100 pt-6">
                {frente.itens.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="text-[#C6A86A] mt-1">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO ESPECÍFICA: PARA PROFISSIONAIS DE SAÚDE */}
      <section className="bg-[#061C33] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#C6A86A] md:text-4xl">
            Para Profissionais de Saúde e RTs
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-slate-200">
            Você que atua como Responsável Técnico precisa de mais do que uma assinatura formal. 
            A ARVEXIS oferece a <strong>segurança jurídica, estrutura técnica e o posicionamento</strong> 
            necessários para exercer sua função com autoridade.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 text-left">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-[#C6A86A]">Mentoria para RTs</h4>
              <p className="text-sm mt-2 text-slate-400">Orientação prática para tomada de decisão e gestão de vistorias.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-[#C6A86A]">Atualização Normativa</h4>
              <p className="text-sm mt-2 text-slate-400">Monitoramento constante das normas da ANVISA e MAPA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS / PERSONALIDADE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-5xl">Por que a Arvexis?</h2>
              <p className="mt-6 text-lg text-slate-600">
                Nossa comunicação é pautada na precisão e autoridade. Atuamos como o braço 
                estratégico da governança sanitária da sua organização.
              </p>
            </div>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 bg-[#C6A86A] rounded-full flex items-center justify-center text-[#061C33] font-bold">1</div>
                <div>
                  <h4 className="font-bold text-[#1E3A5F]">Atuação Técnica Estratégica</h4>
                  <p className="text-sm text-slate-500">Transformamos exigências complexas em roteiros claros de execução.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 bg-[#C6A86A] rounded-full flex items-center justify-center text-[#061C33] font-bold">2</div>
                <div>
                  <h4 className="font-bold text-[#1E3A5F]">Foco em Governança</h4>
                  <p className="text-sm text-slate-500">Processos internos desenhados para previsibilidade absoluta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#F8FAFC] py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#061C33]">Pronto para elevar seu nível regulatório?</h2>
          <p className="mt-4 text-slate-600 italic">Strategic Regulatory Intelligence</p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-full bg-[#061C33] px-10 py-4 text-sm font-semibold text-white hover:bg-[#1E3A5F] transition"
            >
              Agende uma Reunião Estratégica
            </a>
            <a
              href="mailto:regulatorio@arvexisgroup.com.br"
              className="rounded-full border-2 border-[#061C33] px-10 py-4 text-sm font-semibold text-[#061C33] hover:bg-slate-100 transition"
            >
              Solicite uma Análise Regulatória
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}