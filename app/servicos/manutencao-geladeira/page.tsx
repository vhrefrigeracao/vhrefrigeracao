import CTAGeladeira from "./components/CTAGeladeira";
import DetalhesGeladeira from "./components/DetalhesGeladeira";
import HeroGeladeira from "./components/HeroGeladeira";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Manutenção de Geladeira em Belo Horizonte | Conserto Rápido e Garantido",
  description:
    "Manutenção de geladeira em Belo Horizonte e região metropolitana. Atendimento rápido, técnico especializado e garantia no serviço. Solicite orçamento agora.",
  keywords: [
    "manutenção de geladeira",
    "conserto de geladeira",
    "assistência técnica geladeira BH",
    "geladeira não está gelando",
    "conserto de geladeira urgente",
  ],
  openGraph: {
    title: "Manutenção de Geladeira em BH | Atendimento Rápido",
    description:
      "Precisa de manutenção de geladeira? Atendemos Belo Horizonte e Grande BH com rapidez e garantia.",
    type: "website",
  },
};
export default function ManutencaoGeladeira() {
  return (
    <>
      <HeroGeladeira />
      <DetalhesGeladeira />
      <CTAGeladeira />
    </>
  );
}
