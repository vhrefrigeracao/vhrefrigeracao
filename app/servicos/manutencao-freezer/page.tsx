import CTAFreezer from "./components/CTAFreezer";
import DetalhesFreezer from "./components/DetalhesFreezer";
import HeroFreezer from "./components/HeroFreezer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Manutenção de Freezer em Belo Horizonte | Conserto Rápido na Grande BH",
  description:
    "Manutenção e conserto de freezer em Belo Horizonte e Grande BH. Atendimento rápido para freezer horizontal e vertical, com recarga de gás e troca de peças.",
  keywords: [
    "manutenção de freezer",
    "conserto de freezer BH",
    "freezer não está congelando",
    "recarga de gás freezer",
    "assistência técnica freezer grande bh",
  ],
  openGraph: {
    title: "Manutenção de Freezer na Grande BH",
    description:
      "Assistência técnica especializada em freezers residenciais e comerciais com atendimento rápido e garantia.",
    type: "website",
  },
};
export default function ManutencaoFreezer() {
  return (
    <>
      <HeroFreezer />
      <DetalhesFreezer />
      <CTAFreezer />
    </>
  );
}
