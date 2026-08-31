import { useTexts } from "../context/TextContext";

const PERGUNTAS = [
  {
    pergunta: "Preciso de encaminhamento médico para agendar?",
    resposta:
      "Não necessariamente. A primeira avaliação define se é preciso alinhamento com um médico ou outro profissional para o seu caso.",
  },
  {
    pergunta: "Qual a diferença entre GYROTONIC® e Pilates?",
    resposta:
      "São métodos diferentes, com objetivos que podem se complementar. Na avaliação, explicamos qual abordagem faz mais sentido para o seu objetivo.",
  },
  {
    pergunta: "O atendimento online funciona para dor na coluna?",
    resposta:
      "Depende do quadro. Alguns casos são bem acompanhados online; outros exigem avaliação presencial primeiro. Isso é definido caso a caso.",
  },
  {
    pergunta: "Atende reabilitação pós-cirúrgica?",
    resposta:
      "Sim, com progressão segura do movimento e, quando necessário, comunicação com a equipe médica responsável pelo procedimento.",
  },
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "Começa com uma avaliação de movimento e postura, para entender a queixa e o objetivo antes de propor qualquer plano de atendimento.",
  },
];

export default function FAQ() {
  const { t } = useTexts();

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">
        {t("faq_eyebrow", "Dúvidas frequentes")}
      </p>
      <h2 className="mt-3 font-display text-2xl text-roxo sm:text-3xl">
        {t("faq_title", "Antes de agendar")}
      </h2>

      <div className="mt-10 divide-y divide-roxo/10">
        {PERGUNTAS.map((item, i) => (
          <details key={item.pergunta} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base text-roxo">
              {t(`faq_item_${i}_pergunta`, item.pergunta)}
              <span className="ml-4 text-coral transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {t(`faq_item_${i}_resposta`, item.resposta)}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

