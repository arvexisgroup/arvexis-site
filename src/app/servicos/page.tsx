import Link from "next/link";
import CarrosselServicos from "../components/CarrosselServicos";

const servicos = [
  {
    titulo: "Regulatório Corporativo",
    descricao:
      "Estratégia de regularização de produtos, enquadramento regulatório, dossiês técnicos, rotulagem, registro, pós-registro e suporte em fiscalizações.",
  },
  {
    titulo: "Regularização Sanitária de Empresas",
    descricao:
      "Estruturação regulatória completa da empresa, licenciamento sanitário, responsável técnico, sistemas documentais e preparação para inspeções.",
  },
  {
    titulo: "Market Access Regulatório",
    descricao:
      "Apoio estratégico para empresas que desejam ingressar no mercado brasileiro com segurança regulatória e viabilidade operacional.",
  },
  {
    titulo: "Compliance Sanitário e Governança",
    descricao:
      "Diagnóstico regulatório, auditorias internas, implementação de procedimentos, gestão de riscos e fortalecimento institucional.",
  },
  {
    titulo: "Capacitação Profissional",
    descricao:
      "Treinamentos e orientação técnica para profissionais e responsáveis técnicos, com foco em atuação segura e atualizada.",
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-white text-[#444444]">
      <section className="bg-[#061C33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A86A]">
            Serviços
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Soluções regulatórias para empresas e profissionais
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Estruturamos processos, reduzimos riscos e fortalecemos a conformidade
            sanitária com inteligência técnica e visão estratégica.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <CarrosselServicos />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {servicos.map((servico) => (
            <article
              key={servico.titulo}
              className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A5F]">
                {servico.titulo}
              </h2>
              <p className="mt-4 leading-8">{servico.descricao}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:regulatorio@arvexisgroup.com.br"
            className="rounded-full bg-[#C6A86A] px-6 py-3 text-sm font-semibold text-[#061C33]"
          >
            Solicite uma análise regulatória
          </a>

          <Link
            href="/sobre"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#1E3A5F]"
          >
            Conheça a ARVEXIS
          </Link>
        </div>
      </section>
    </main>
  );
}