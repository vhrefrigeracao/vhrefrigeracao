"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroMaquinaLavar() {
  return (
    <section className="maquina-hero">
      <div className="service-hero-overlay"></div>

      <div className="service-hero-content">
        <span className="hero-badge">Especialistas em Lavadoras</span>

        <h1>Conserto e Manutenção de Máquina de Lavar na Grande BH</h1>

        <p>
          Atendimento técnico especializado para conserto de máquina de lavar
          roupas, troca de peças, reparo de placa e solução de vazamentos.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20conserto%20de%20máquina%20de%20lavar."
          className="cta-button mx-auto mt-20"
        >
          Solicitar Atendimento
          <FaWhatsapp />
        </Link>
      </div>
    </section>
  );
}
