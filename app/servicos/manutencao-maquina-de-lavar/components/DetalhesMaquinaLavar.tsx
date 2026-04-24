"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function DetalhesMaquinaLavar() {
  return (
    <section className="service-details">
      <div className="service-details-container">
        <h2>Assistência Técnica Especializada em Máquinas de Lavar</h2>

        <p>
          Realizamos manutenção preventiva e corretiva em máquinas de lavar
          roupas de todas as marcas e modelos. Atendemos problemas como máquina
          que não liga, não centrifuga, não drena água ou apresenta vazamentos.
        </p>

        <div className="service-benefits">
          <div className="card-service">
            <h3>Diagnóstico Técnico Preciso</h3>
            <p>
              Identificação rápida do problema para evitar danos maiores ao
              equipamento.
            </p>
          </div>

          <div className="card-service">
            <h3>Troca de Peças e Componentes</h3>
            <p>
              Substituição de bomba d'água, correias, placa eletrônica, motor e
              outros componentes com garantia.
            </p>
          </div>

          <div className="card-service">
            <h3>Reparo de Vazamentos</h3>
            <p>
              Correção de mangueiras, conexões e vedação para evitar desperdício
              de água e danos ao ambiente.
            </p>
          </div>
        </div>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Preciso%20de%20manutenção%20na%20minha%20máquina%20de%20lavar."
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
