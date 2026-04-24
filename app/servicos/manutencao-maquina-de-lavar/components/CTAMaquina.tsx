"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAMaquinaLavar() {
  return (
    <section className="cta-final">
      <div className="cta-final-overlay"></div>

      <div className="cta-final-container">
        <span className="cta-final-badge">Fale Conosco Agora</span>

        <h2 className="cta-final-title">
          Sua Máquina de Lavar Parou de Funcionar?
        </h2>

        <p className="cta-final-subtitle">
          Evite transtornos e acúmulo de roupas. Solicite agora atendimento
          rápido com técnico especializado na Grande BH.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Minha%20máquina%20de%20lavar%20não%20está%20funcionando.%20Preciso%20de%20ajuda."
          className="cta-button"
          onClick={e => {
            e.preventDefault();

            const url = e.currentTarget.href;

            // Facebook
            trackFacebookLead();

            // Google Ads
            reportConversion(url);
          }}
        >
          Solicitar Orçamento pelo WhatsApp
          <FaWhatsapp />
        </Link>
      </div>
    </section>
  );
}
