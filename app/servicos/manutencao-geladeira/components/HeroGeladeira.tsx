"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroGeladeira() {
  return (
    <section className="service-hero">
      <div className="service-hero-overlay"></div>

      <div className="service-hero-content">
        <span className="hero-badge">Especialistas em Geladeiras</span>

        <h1>Conserto e Manutenção de Geladeiras na Grande BH</h1>

        <p>
          Atendimento rápido e especializado para manutenção de geladeiras,
          troca de peças, recarga de gás e reparos técnicos completos.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20conserto%20de%20geladeira."
          className="cta-button mx-auto mt-20"
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
