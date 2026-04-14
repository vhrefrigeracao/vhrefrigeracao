"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function DetalhesArCondicionado() {
  return (
    <section className="service-details">
      <div className="service-details-container">
        <h2>
          Assistência Técnica Especializada em Ar-Condicionado Residencial e
          Comercial
        </h2>

        <p>
          Trabalhamos com manutenção preventiva e corretiva de ar-condicionado
          split, inverter e convencional. Realizamos diagnóstico preciso,
          atendimento ágil e utilizamos peças e insumos de alta qualidade.
        </p>

        <div className="service-benefits">
          <div className="card-service">
            <h3>Limpeza Completa e Higienização</h3>
            <p>
              Removemos sujeiras, fungos e bactérias garantindo melhor qualidade
              do ar e maior eficiência do equipamento.
            </p>
          </div>

          <div className="card-service">
            <h3>Recarga de Gás</h3>
            <p>
              Serviço técnico de recarga e verificação de vazamentos para
              restaurar o desempenho ideal do aparelho.
            </p>
          </div>

          <div className="card-service">
            <h3>Instalação e Reparos Técnicos</h3>
            <p>
              Instalação correta, troca de peças e correção de falhas elétricas
              e mecânicas.
            </p>
          </div>
        </div>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20manutenção%20de%20ar-condicionado."
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
          Solicitar Orçamento Agora
          <FaWhatsapp />
        </Link>
      </div>
    </section>
  );
}
