import CTAMaquinaLavar from "./components/CTAMaquina";
import DetalhesMaquinaLavar from "./components/DetalhesMaquinaLavar";
import HeroMaquinaLavar from "./components/HeroMaquina";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Conserto de Máquina de Lavar em Belo Horizonte | Manutenção na Grande BH",
  description:
    "Conserto e manutenção de máquina de lavar roupas em Belo Horizonte e Grande BH. Atendimento rápido para vazamentos, placa eletrônica, motor e centrifugação.",
  keywords: [
    "conserto de máquina de lavar BH",
    "manutenção de lavadora grande bh",
    "máquina de lavar não centrifuga",
    "máquina de lavar não liga",
    "assistência técnica lavadora bh",
  ],
  openGraph: {
    title: "Manutenção de Máquina de Lavar na Grande BH",
    description:
      "Assistência técnica especializada em máquinas de lavar roupas com atendimento rápido e garantia.",
    type: "website",
  },
};
export default function MaquinadeLavar() {
  return (
    <>
      <HeroMaquinaLavar />
      <DetalhesMaquinaLavar />
      <CTAMaquinaLavar />
    </>
  );
}
