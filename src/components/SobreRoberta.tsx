import { useState } from "react";
import { whatsappLink, INSTAGRAM_URL } from "../data/site";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";

export default function SobreRoberta() {
  const [activeTab, setActiveTab] = useState<"historia" | "formacao">("historia");

  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        
        {/* Lado Esquerdo: Imagem da Roberta com Destaques */}
        <div className="sticky top-24">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-lg border border-roxo/10">
              <img
                src="roberta.png"
                alt="Dra. Roberta Quinn"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.45]"
                style={{
                  objectPosition: "82% 20%",
                  transform: "scale(1.4)",
                  transformOrigin: "82% 20%",
                }}
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-2xl bg-coral/20"
            />
          </div>

          {/* Indicadores rápidos de Autoridade */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-roxo/10 bg-white p-4 text-center shadow-sm">
              <span className="block font-display text-lg font-bold text-roxo">Master Trainer</span>
              <span className="text-[10px] text-ink/60 uppercase font-bold tracking-wider">Gyrotonic® System</span>
            </div>
            <div className="rounded-2xl border border-roxo/10 bg-white p-4 text-center shadow-sm">
              <span className="block font-display text-lg font-bold text-roxo">Reabilitação</span>
              <span className="text-[10px] text-ink/60 uppercase font-bold tracking-wider">Alemanha & Brasil</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Informações Clínicas & Certificações de Elite */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-roxo/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-roxo">
            <Award className="h-3 w-3 text-coral" />
            Trajetória & Autoridade de Elite
          </span>
          
          <h2 className="mt-4 font-display text-3xl leading-tight text-roxo sm:text-4xl">
            Dra. Roberta Quinn
          </h2>
          <p className="mt-2 text-sm font-semibold text-coral uppercase tracking-wider">
            Fisioterapeuta (Crefito-3) • Gyrotonic® Specialized Master Trainer
          </p>

          {/* Abas de Navegação */}
          <div className="mt-8 flex border-b border-roxo/10">
            <button
              onClick={() => setActiveTab("historia")}
              className={`pb-3 text-sm font-bold transition-all duration-300 border-b-2 mr-8 ${
                activeTab === "historia"
                  ? "border-coral text-roxo border-b-2"
                  : "border-transparent text-ink/50 hover:text-roxo"
              }`}
            >
              Minha Trajetória
            </button>
            <button
              onClick={() => setActiveTab("formacao")}
              className={`pb-3 text-sm font-bold transition-all duration-300 border-b-2 ${
                activeTab === "formacao"
                  ? "border-coral text-roxo border-b-2"
                  : "border-transparent text-ink/50 hover:text-roxo"
              }`}
            >
              Especializações & Cursos
            </button>
          </div>

          {/* Aba 1: História e Atuação Clínica */}
          {activeTab === "historia" && (
            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-ink/75 animate-in fade-in duration-300">
              <p>
                Com uma sólida bagagem internacional, minha missão é unir a precisão da <strong>fisioterapia clínica</strong> à inteligência tridimensional do movimento. Atendo no Itaim Bibi, em São Paulo, ajudando pacientes a superarem dores crônicas, recuperarem a mobilidade e retornarem com segurança ao esporte e à vida ativa.
              </p>
              <p>
                Tive o privilégio de atuar no renomado <strong>Hospital de Reabilitação Clínica Rheintal-Klinik, na Alemanha</strong>, onde colaborei ativamente na reabilitação clínica ortopédica e neurológica e supervisionei horas de formação de Master Trainer no Método GYROTONIC®.
              </p>
              <p>
                No Brasil, desenvolvi minha prática em áreas críticas e complexas, atuando na reabilitação ortopédica e neurológica da <strong>Clínica FMU</strong> e no cuidado intensivo de pacientes na UTI respiratória do <strong>Hospital Sepaco</strong>. Essa fusão entre hospitalar de ponta e reabilitação pelo movimento me permite criar tratamentos milimetricamente personalizados para o seu caso.
              </p>
            </div>
          )}

          {/* Aba 2: Lista Completa de Certificações de Elite */}
          {activeTab === "formacao" && (
            <div className="mt-6 space-y-6 animate-in fade-in duration-300">
              
              {/* Categoria 1: Gyrotonic */}
              <div>
                <h3 className="flex items-center gap-2 font-display text-sm font-bold text-roxo uppercase tracking-wider">
                  <Award className="h-4 w-4 text-coral" />
                  Credenciais Internacionais GYROTONIC® & GYROKINESIS®
                </h3>
                <ul className="mt-3 grid gap-2.5 text-sm text-ink/80 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span><strong>Specialized Master Trainer</strong> em GYROTONIC®</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span><strong>Jumping Stretching Board</strong> Master Trainer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span><strong>Gyrokinesis®</strong> Pre-Trainer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span>Especialização em <strong>Escoliose</strong> (Scoliosis)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span>Aplicações para <strong>Pelve e Ombro</strong> (Pelvic & Shoulder Girdle)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span>Especializações: <strong>Applications for Dancers</strong> & <strong>Leg Extension Unit</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span>Cursos Avançados: <strong>Lotus Blossom Program 2</strong> & <strong>Breathing Course Intensive</strong></span>
                  </li>
                </ul>
              </div>

              {/* Categoria 2: Fisioterapia */}
              <div className="border-t border-roxo/10 pt-6">
                <h3 className="flex items-center gap-2 font-display text-sm font-bold text-roxo uppercase tracking-wider">
                  <GraduationCap className="h-4 w-4 text-coral" />
                  Formação Clínica Acadêmica
                </h3>
                <ul className="mt-3 grid gap-2.5 text-sm text-ink/80 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span>Bacharel em <strong>Fisioterapia</strong> (FMU SP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span>Supervisão em Reabilitação no <strong>Hospital Rheintal-Klinik (Alemanha)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span>Fisioterapia Respiratória em UTI no <strong>Hospital Sepaco</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <span>Instrutora de <strong>Yoga Terapêutico</strong> (Escoliose, Pré/Pós-Natal)</span>
                  </li>
                </ul>
              </div>

            </div>
          )}

          {/* Botões de Ação */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink("Olá! Quero saber mais sobre o atendimento com a Roberta.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-coral px-6 py-3 text-sm font-bold text-cream transition-transform hover:scale-105 shadow-md shadow-coral/10 hover:shadow-lg"
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
