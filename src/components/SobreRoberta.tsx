import { whatsappLink, INSTAGRAM_URL } from "../data/site";

export default function SobreRoberta() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-roxo to-roxo-dark" />
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-coral"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">
            Sobre
          </p>
          <h2 className="mt-3 font-display text-2xl text-roxo sm:text-3xl">
            Roberta Quinn
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            Fisioterapeuta e Master Trainer no Método GYROTONIC®, Roberta
            atende no Itaim Bibi, em São Paulo, e online, com foco em dor,
            postura, mobilidade e retorno seguro às atividades do dia a dia
            e do esporte.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Cada atendimento parte da avaliação de movimento da pessoa — não
            de um protocolo genérico — e, quando necessário, é conduzido em
            conjunto com médicos e outros profissionais envolvidos no caso.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink("Olá! Quero saber mais sobre o atendimento com a Roberta.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-coral px-6 py-3 text-sm font-bold text-cream transition-transform hover:scale-105"
            >
              Conversar no WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-roxo/20 px-6 py-3 text-sm font-bold text-roxo transition-colors hover:bg-roxo/5"
            >
              Ver no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
