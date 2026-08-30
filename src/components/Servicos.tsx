import { services, gruposOrdenados } from "../data/services";
import { whatsappLink } from "../data/site";

export default function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">
          Serviços
        </p>
        <h2 className="mt-3 font-display text-2xl text-roxo sm:text-3xl">
          Cada atendimento parte de uma avaliação — não de um pacote pronto
        </h2>
        <p className="mt-4 text-ink/70">
          Esta é a mesma lista de serviços cadastrada no Perfil da Empresa da
          clínica no Google. Escolha o que mais se aproxima do seu momento —
          a avaliação define o plano exato.
        </p>
      </div>

      {gruposOrdenados.map((grupo) => (
        <div key={grupo} className="mb-14 last:mb-0">
          <h3 className="mb-5 border-b border-roxo/10 pb-2 font-display text-sm uppercase tracking-widest text-roxo/70">
            {grupo}
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.grupo === grupo)
              .map((service) => (
                <a
                  key={service.id}
                  href={whatsappLink(
                    `Olá! Tenho interesse em: ${service.nome}. Pode me passar mais informações?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col rounded-2xl border border-roxo/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-coral/40 hover:shadow-md"
                >
                  <h4 className="font-display text-base text-roxo group-hover:text-coral">
                    {service.nome}
                  </h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                    {service.descricao}
                  </p>
                  <span className="mt-4 text-xs font-bold uppercase tracking-wide text-coral">
                    Falar sobre este serviço →
                  </span>
                </a>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
