import { GOOGLE_MAPS_URL, INSTAGRAM_URL, WHATSAPP_NUMBER } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-roxo-dark py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-display text-cream">ROBERTA QUINN</span>
          <span className="ml-2 text-xs tracking-widest">CORPO &amp; MOVIMENTO</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-coral">
            Google Maps
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-coral">
            Instagram
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-coral"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-xs text-cream/40">
          Itaim Bibi, São Paulo — presencial e online
        </p>
      </div>
    </footer>
  );
}
