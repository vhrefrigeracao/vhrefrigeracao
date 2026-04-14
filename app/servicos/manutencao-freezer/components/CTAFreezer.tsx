"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAFreezer() {
  return (
    <section className="cta-final">
      <div className="cta-final-overlay"></div>

      <div className="cta-final-container">
        <span className="cta-final-badge">Fale Conosco Agora</span>

        <h2 className="cta-final-title">Seu Freezer Parou de Congelar?</h2>

        <p className="cta-final-subtitle">
          Evite prejuízos com alimentos perdidos. Solicite agora atendimento
          rápido com técnico especializado.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Meu%20freezer%20não%20está%20congelando.%20Preciso%20de%20ajuda."
          className="cta-button"
        >
          Solicitar Atendimento Agora
          <FaWhatsapp />
        </Link>
      </div>
    </section>
  );
}
