"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAGeladeira() {
  return (
    <section className="cta-final">
      <div className="cta-final-overlay"></div>

      <div className="cta-final-container">
        <span className="cta-final-badge">Fale Conosco Agora</span>

        <h2 className="cta-final-title">Sua Geladeira Parou de Funcionar?</h2>

        <p className="cta-final-subtitle">
          Entre em contato agora mesmo e solicite atendimento rápido com um
          técnico especializado.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Preciso%20de%20ajuda%20com%20minha%20geladeira."
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
