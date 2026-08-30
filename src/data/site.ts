// Fonte única de contato — usada em todos os CTAs da LP.
// Trocar aqui reflete em todo o site de uma vez.

export const WHATSAPP_NUMBER = "5511983479398"; // formato internacional, sem espaços/símbolos

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Cl%C3%ADnica+Roberta+Quinn:+Fisioterapia-Gyrotonic+-+Pilates+-+Canolu/data=!4m2!3m1!1s0x0:0x69588626a9b61f3f?sa=X&ved=1t:2428&ictx=111";

export const INSTAGRAM_URL = "https://www.instagram.com/dr.robertaquinn/";

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
