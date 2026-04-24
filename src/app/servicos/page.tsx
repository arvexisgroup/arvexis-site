import Image from "next/image";
import Link from "next/link";
import CarrosselServicos from "../components/CarrosselServicos";

const categorias = [
  {
    emoji: "🥗",
    titulo: "Alimentos",
    descricao:
      "Consultoria técnica e regulatória para enquadramento, regularização e desenvolvimento documental de produtos alimentícios.",
    itens: [
      "Enquadramento regulatório do produto",
      "Registro e notificação conforme RDC 843/2024",
      "Avaliação de rotulagem e alegações funcionais",
      "Estudos de estabilidade e suporte técnico",
    ],
  },
  {
    emoji: "💄",
    titulo: "Cosméticos",
    descricao:
      "Estruturação regulatória completa para cosméticos, da avaliação técnica à regularização sanitária e exportação.",
    itens: [
      "Avaliação de documentação técnica",
      "Regularização sanitária",
      "Registro Grau 1 e Grau 2",
      "Adequação de claims e exportação",
    ],
  },
  {
    emoji: "🏥",
    titulo: "Dispositivos Médicos",
    descricao:
      "Apoio regulatório para registro, notificação, boas práticas e preparação para inspeções sanitárias.",
    itens: [
      "Registro e notificação ANVISA",
      "Regularização de empresas",
      "Boas práticas conforme RDC 665/2022",
      "Elaboração de POPs e inspeções",
    ],
  },
];

const empresaItens = [
  "Constituição regulatória da empresa",
  "Obtenção de AFE",
  "Licenciamento sanitário",
  "Licenciamento de produtos químicos junto à Polícia Federal, Exército e Polícia Civil",
  "Regularização de importadores e distribuidores",
  "Regularização de fabricantes de produtos cosméticos e alimentos",
  "Vinculação de responsável técnico",
  "Implementação de Manual de Boas Práticas para importadoras e distribuidoras de Dispositivos Médicos",
  "Estruturação de Sistema da Qualidade para Importadores e Distribuidores",
  "Preparação para inspeções sanitárias",
  "Elaboração de POPs e estruturação documental",
];

const treinamentos = [
  "Capacitação para Responsáveis Técnicos",
  "Capacitação para Profissionais Regulatórios",
  "Treinamento para Equipes Envolvidas",
  "Treinamento sobre Regulamentação de Produtos Químicos Controlados",
];

const diferenciais = [
  {
    numero: "1",
    titulo: "Atuação Técnica Especializada",
    descricao:
      "Profundidade técnica e visão estratégica para apoiar decisões regulatórias com segurança.",
  },
  {
    numero: "2",
    titulo: "Foco em Governança e Compliance",
    descricao:
      "Processos internos estruturados para operar com segurança regulatória e previsibilidade.",
  },
  {
    numero: "3",
    titulo: "Capacitação com Responsabilidade",
    descricao:
      "Fortalecemos o profissional para que exerça a responsabilidade técnica com segurança.",
  },
];

export default function ServicosPage() {
  const whatsappLink =
    "https://wa.me/5531000000000?text=Olá! Gostaria de agendar uma reunião estratégica com a ARVEXIS®.";

  return (
    <main className="min-h-screen bg-[#FAFBFC] text-[#444444]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#021e37] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#021e37,transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:px-10 lg:grid-cols-2">
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
              Soluções ARVEXIS®
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Inteligência regulatória para empresas e profissionais da saúde
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Onde a conformidade encontra a estratégia. Estruturamos decisões,
              reduzimos riscos e fortalecemos a governança regulatória da sua
              operação.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#C6A86A] px-8 py-4 text-sm font-semibold text-[#021e37] transition hover:scale-105"
              >
                Agende uma reunião estratégica
              </a>

              <a
                href="mailto:regulatorio@arvexisgroup.com.br?subject=Solicitação%20de%20orçamento"
                className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Solicite um orçamento
              </a>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center lg:justify-end">
  <div className="relative z-10 flex items-center justify-center lg:justify-end">
  <div className="group relative flex items-center justify-center">

    {/* glow atrás */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,168,106,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-300" />

    <Image
      src="/logo-arvexis.jpeg"
      alt="Logo ARVEXIS®"
      width={320}
      height={320}
      className="relative z-10 h-auto w-[180px] sm:w-[620px] md:w-[660px] object-contain transition-all duration-300 group-hover:scale-105"
      priority
    />

  </div>
</div>
</div>
        </div>
      </section>

      {/* ÁREA DE ATUAÇÃO */}
      <section className="py-18">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(2,30,55,0.06)]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
                Área de atuação
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#1E3A5F] md:text-4xl">
                Assuntos Regulatórios, Conformidade Sanitária e Compliance
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Atuamos estrategicamente nas áreas de alimentos, cosméticos,
                saneantes e dispositivos médicos, com foco em segurança técnica,
                previsibilidade regulatória e estruturação documental.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Alimentos", "Cosméticos", "Saneantes", "Dispositivos Médicos"].map(
                (area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-6 py-5 text-center text-lg font-semibold text-[#1E3A5F] transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {area}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CARROSSEL */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <CarrosselServicos />
        </div>
      </section>

      {/* PORTFÓLIO */}
   <section id="portfolio" className="bg-[#021e37] px-6 py-24 md:px-10">
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
        Portfólio de serviços
      </p>

      <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
        Soluções regulatórias com excelência técnica
      </h2>

      <p className="mt-6 text-slate-300 leading-8">
        Estruturamos projetos regulatórios com profundidade técnica, clareza
        documental e visão estratégica.
      </p>
    </div>

    {/* CARDS */}
    <div className="mt-20 grid gap-10 lg:grid-cols-3">

      {categorias.map((item, i) => (
        <div
          key={i}
          className="group relative rounded-[28px] border border-white/10 bg-white/90 backdrop-blur-md p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        >

          {/* GLOW SUAVE */}
          <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(198,168,106,0.12),transparent_70%)] opacity-60" />

          <div className="relative z-10">

            {/* HEADER */}
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#021e37] text-lg text-white shadow-md">
                {item.emoji}
              </span>

              <h3 className="text-lg font-semibold text-[#c6a86a]">
                {item.titulo}
              </h3>
            </div>

            {/* DESCRIÇÃO */}
            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              {item.descricao}
            </p>

            {/* LISTA */}
            <ul className="mt-6 space-y-3 text-[14.5px] text-slate-600">
              {item.itens.map((sub, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#C6A86A]" />
                  <span className="leading-relaxed">{sub}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>
      {/* REGULARIZAÇÃO DE EMPRESAS */}
      <section className="bg-[#F3F7FA] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[36px] bg-white p-10 shadow-[0_20px_60px_rgba(2,30,55,0.06)]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
                Estrutura regulatória
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#1E3A5F] md:text-4xl">
                Regularização sanitária de empresas
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Atuamos na estruturação completa da empresa para atuação regular
                junto à ANVISA e MAPA, com foco em segurança operacional,
                documentação robusta e preparação para fiscalizações.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {empresaItens.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-5"
                >
                  <span className="mt-1 text-[#C6A86A]">✔</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TREINAMENTO */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] bg-[#021e37] p-10 text-white shadow-[0_20px_60px_rgba(2,30,55,0.15)]">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
                Capacitação
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Treinamento e desenvolvimento profissional
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A conformidade efetiva depende de processos estruturados e de
                profissionais tecnicamente preparados.
              </p>

              <ul className="mt-8 space-y-4 text-slate-200">
                {treinamentos.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-[#C6A86A]">🎓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_10px_40px_rgba(2,30,55,0.05)]">
              <h3 className="text-2xl font-semibold text-[#1E3A5F]">
                Formatos disponíveis
              </h3>

              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• In company, se solicitado</li>
                <li>• Online, ao vivo ou gravados</li>
                <li>• Personalizados por categoria de produto</li>
              </ul>

              <div className="mt-10 rounded-2xl bg-[#F8FAFC] p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#C6A86A]">
                  Atendimento
                </p>
                <p className="mt-3 leading-7 text-slate-600">
                  Consultoria pontual por demanda, contrato mensal de assessoria
                  regulatória, projetos específicos e suporte técnico contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTS */}
      <section className="bg-[#021e37] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Para Profissionais regulatórios e Responsáveis Técnicos (RTs)
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-slate-200">
              Você que deseja atuar ou já atua como Responsável Técnico precisa
              mais do que assinatura formal. Precisa de estrutura, segurança
              jurídica e posicionamento técnico.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/cursos"
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-[#C6A86A]">
                Mentoria para RTs
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Acesse a página de cursos e capacitações voltadas ao exercício da
                responsabilidade técnica com mais segurança e estrutura.
              </p>
            </Link>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-[#C6A86A]">
                Atualização Normativa
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Monitoramento constante de normas da ANVISA, MAPA e exigências
                regulatórias aplicáveis à rotina técnica e documental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
                Diferenciais
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#1E3A5F] md:text-5xl">
                Por que a ARVEXIS?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Unimos profundidade técnica, governança regulatória e capacidade
                de estruturação para apoiar decisões estratégicas com segurança.
              </p>
            </div>

            <div className="grid gap-6">
              {diferenciais.map((item) => (
                <div
                  key={item.numero}
                  className="rounded-[28px] border border-slate-200 bg-[#FAFBFC] p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C6A86A] font-bold text-[#021e37]">
                      {item.numero}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#1E3A5F]">
                        {item.titulo}
                      </h4>
                      <p className="mt-2 leading-7 text-slate-600">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-100 bg-[#FAFBFC] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="group inline-block">
        <Image
          src="/logo-arvexis.jpeg"
          alt="Logo ARVEXIS®"
          width={140}
          height={140}
          className="mx-auto h-auto w-[110px] object-contain rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_40px_rgba(198,168,106,0.25)]"
        />
      </div>

          <h2 className="mt-6 text-3xl font-bold text-[#021e37]">
            Strategic Regulatory Intelligence
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Soluções regulatórias com profundidade técnica, governança e visão
            estratégica.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#021e37] px-10 py-4 text-sm font-semibold text-white transition hover:bg-[#1E3A5F]"
            >
              Agende uma reunião estratégica
            </a>

            <a
              href="mailto:regulatorio@arvexisgroup.com.br?subject=Solicitação%20de%20orçamento"
              className="rounded-full border-2 border-[#021e37] px-10 py-4 text-sm font-semibold text-[#021e37] transition hover:bg-slate-100"
            >
              Solicite um orçamento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}