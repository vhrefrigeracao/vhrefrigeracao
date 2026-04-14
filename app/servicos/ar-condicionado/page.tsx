import type { Metadata } from "next";
import HeroArCondicionado from "./components/HeroArCondicionado";
import DetalhesArCondicionado from "./components/DetalhesArCondicionado";
import CTAArCondicionado from "./components/CTAArCondicionado";

export const metadata: Metadata = {
  title:
    "Manutenção de Ar-Condicionado em Belo Horizonte | Conserto e Instalação",
  description:
    "Manutenção de ar-condicionado em Belo Horizonte e Grande BH. Limpeza, recarga de gás, instalação e conserto com atendimento rápido e garantia.",
  keywords: [
    "manutenção de ar-condicionado",
    "conserto de ar-condicionado BH",
    "instalação de ar-condicionado",
    "recarga de gás ar-condicionado",
    "limpeza de ar-condicionado",
  ],
  openGraph: {
    title: "Manutenção de Ar-Condicionado em BH",
    description:
      "Assistência técnica especializada em ar-condicionado na Grande BH. Atendimento rápido e profissional.",
    type: "website",
  },
};
export default function ArCondicionado() {
  return (
    <>
      <HeroArCondicionado />
      <DetalhesArCondicionado />
      <CTAArCondicionado />
    </>
  );
}
