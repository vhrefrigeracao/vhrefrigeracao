"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function DetalhesGeladeira() {
  return (
    <section className="service-details">
      <div className="service-details-container">
        <h2>
          Assistência Técnica Especializada em Geladeiras Residenciais e
          Comerciais
        </h2>

        <p>
          Trabalhamos com manutenção preventiva e corretiva de geladeiras de
          todas as marcas e modelos, oferecendo diagnóstico preciso, atendimento
          ágil e peças de alta qualidade.
        </p>

        <div className="service-benefits">
          <div className="card-service">
            <h3>Diagnóstico Técnico Completo</h3>
            <p>
              Identificamos rapidamente a origem do problema com equipamentos
              profissionais.
            </p>
          </div>

          <div className="card-service">
            <h3>Troca de Peças</h3>
            <p>
              Trabalhamos com substituição de peças e componentes danificados.
            </p>
          </div>
          <div className="card-service">
            <h3>Recarga de Gás</h3>
            <p>
              Serviço completo de recarga e vedação para restaurar a
              refrigeração ideal.
            </p>
          </div>
        </div>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20conserto%20de%20geladeira."
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
