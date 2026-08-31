import { whatsappLink, GOOGLE_MAPS_URL } from "../data/site";
import { useTexts } from "../context/TextContext";

export default function Hero() {
  const { t } = useTexts();

  return (
    <section id="topo" className="relative overflow-hidden bg-roxo text-cream">
      {/* Slash diagonal — motivo assinatura extraído da identidade visual (o corte coral atrás da foto) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-full w-[55%] bg-coral"
        style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-full w-[55%] bg-roxo-dark opacity-40"
        style={{ clipPath: "polygon(42% 0, 60% 0, 25% 100%, 7% 100%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-coral">
            {t("hero_tagline", "Fisioterapia · Gyrotonic® · Canolu")}
          </p>
          <h1 className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
            {t(
              "hero_title",
              "Movimento com mais segurança, postura sem sofrimento e retorno real às suas atividades."
            )}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            {t(
              "hero_subtitle",
              "Atendimento individualizado para dor, postura, mobilidade e retorno à atividade — com consultório no Itaim Bibi, São Paulo, e opção de atendimento online, conforme a avaliação de cada pessoa."
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-coral px-7 py-3 text-sm font-bold text-cream shadow-lg shadow-coral/20 transition-transform hover:scale-105"
            >
              {t("hero_cta", "Agendar avaliação no WhatsApp")}
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/40 px-7 py-3 text-sm font-bold text-cream transition-colors hover:bg-cream/10"
            >
              {t("hero_maps_btn", "Ver no Google Maps")}
            </a>
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest text-cream/60">
            {t("hero_footer_tagline", "Itaim Bibi · São Paulo — presencial e online")}
          </p>
        </div>
      </div>
    </section>
  );
}
