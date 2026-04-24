"use client";
import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import {
  FaClock,
  FaUserCog,
  FaShieldAlt,
  FaDollarSign,
  FaWhatsapp,
} from "react-icons/fa";

export default function Diferenciais() {
  return (
    <section className="diferenciais" id="diferenciais">
      <div className="diferenciais-container">
        <span className="diferenciais-badge">Por que escolher a VH?</span>

        <h2>Atendimento Profissional com Qualidade e Confiança</h2>

        <p className="diferenciais-subtitle">
          Trabalhamos com excelência em cada atendimento, oferecendo rapidez,
          transparência e garantia para sua total tranquilidade.
        </p>

        <div className="diferenciais-grid">
          <div className="diferencial-card">
            <FaClock className="diferencial-icon" />
            <h3>Atendimento Rápido</h3>
            <p>
              Agilidade no suporte para resolver seu problema o quanto antes.
            </p>
          </div>

          <div className="diferencial-card">
            <FaUserCog className="diferencial-icon" />
            <h3>Técnicos Especializados</h3>
            <p>Profissionais experientes e preparados para qualquer serviço.</p>
          </div>

          <div className="diferencial-card">
            <FaShieldAlt className="diferencial-icon" />
            <h3>Garantia de Serviço</h3>
            <p>Todos os atendimentos possuem garantia para sua segurança.</p>
          </div>

          <div className="diferencial-card">
            <FaDollarSign className="diferencial-icon" />
            <h3>Preço Justo</h3>
            <p>Orçamento transparente e valores acessíveis sem surpresas.</p>
          </div>
        </div>
        <Link
          href="https://wa.me/553198403605?text=Olá!%20Vi%20o%20site%20da%20VH%20Refrigeração%20e%20gostaria%20de%20solicitar%20um%20atendimento%20técnico/orçamento."
          target="_blank"
          rel="noopener noreferrer"
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
          {" "}
          Solicitar Orçamento pelo WhatsApp
          <FaWhatsapp size={24} />
        </Link>
      </div>
    </section>
  );
}
