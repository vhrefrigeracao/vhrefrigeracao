"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAArCondicionado() {
  return (
    <section className="cta-final">
      <div className="cta-final-overlay"></div>

      <div className="cta-final-container">
        <span className="cta-final-badge">Fale Conosco Agora</span>

        <h2 className="cta-final-title">
          Seu Ar-Condicionado Não Está Gelando?
        </h2>

        <p className="cta-final-subtitle">
          Solicite atendimento imediato com um técnico especializado.
          Atendimento rápido na Grande BH.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Preciso%20de%20ajuda%20com%20meu%20ar-condicionado."
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
          Solicitar Atendimento Agora
          <FaWhatsapp />
        </Link>
      </div>
    </section>
  );
}
