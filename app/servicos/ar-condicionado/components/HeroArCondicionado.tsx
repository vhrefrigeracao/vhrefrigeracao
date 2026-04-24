"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroArCondicionado() {
  return (
    <section className="ar-hero">
      <div className="service-hero-overlay"></div>

      <div className="service-hero-content">
        <span className="hero-badge">Especialistas em Ar-Condicionado</span>

        <h1>
          Instalação, Manutenção e Conserto de Ar-Condicionado na Grande BH
        </h1>

        <p>
          Atendimento rápido para manutenção preventiva, corretiva, recarga de
          gás, limpeza completa e instalação de ar-condicionado residencial e
          comercial.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20manutenção%20de%20ar-condicionado."
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
