"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroFreezer() {
  return (
    <section className="freezer-hero">
      <div className="service-hero-overlay"></div>

      <div className="service-hero-content">
        <span className="hero-badge">Especialistas em Freezers</span>

        <h1>Manutenção e Conserto de Freezer na Grande BH</h1>

        <p>
          Atendimento técnico especializado para manutenção de freezer
          horizontal e vertical, com diagnóstico rápido, troca de peças e
          recarga de gás.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20conserto%20de%20freezer."
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
