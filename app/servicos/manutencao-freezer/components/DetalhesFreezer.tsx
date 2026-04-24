"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function DetalhesFreezer() {
  return (
    <section className="service-details">
      <div className="service-details-container">
        <h2>
          Assistência Técnica Especializada em Freezers Residenciais e
          Comerciais
        </h2>

        <p>
          Trabalhamos com manutenção preventiva e corretiva de freezers
          horizontais e verticais. Atendemos residências, comércios,
          supermercados, bares e restaurantes com agilidade e qualidade.
        </p>

        <div className="service-benefits">
          <div className="card-service">
            <h3>Diagnóstico Técnico Preciso</h3>
            <p>
              Identificação rápida da falha para evitar perda de alimentos e
              prejuízos financeiros.
            </p>
          </div>

          <div className="card-service">
            <h3>Recarga de Gás e Vedação</h3>
            <p>
              Correção de vazamentos e recarga adequada para restaurar a
              potência de congelamento.
            </p>
          </div>

          <div className="card-service">
            <h3>Troca de Peças e Componentes</h3>
            <p>
              Substituição de termostatos, compressores, sensores e demais
              componentes com peças de qualidade.
            </p>
          </div>
        </div>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Preciso%20de%20manutenção%20no%20meu%20freezer."
          className="cta-button mx-auto"
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
