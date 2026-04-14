import Link from "next/link";
import { FaWhatsapp, FaSearch, FaTools } from "react-icons/fa";

export default function ComoFunciona() {
  return (
    <section className="como-funciona">
      <div className="como-funciona-container">
        <span className="como-funciona-badge">Nosso Processo</span>

        <h2 className="text-metallic-blue-dark">
          Como Funciona Nosso Atendimento
        </h2>

        <p className="como-funciona-subtitle">
          Um processo rápido, simples e eficiente para resolver seu problema com
          segurança e praticidade.
        </p>

        <div className="processo-grid">
          <div className="processo-card">
            <div className="processo-numero">01</div>
            <FaWhatsapp className="processo-icon" />

            <h3>Entre em Contato</h3>

            <p>
              Fale conosco pelo WhatsApp e explique rapidamente o problema do
              seu equipamento.
            </p>
          </div>

          <div className="processo-card">
            <div className="processo-numero">02</div>
            <FaSearch className="processo-icon" />

            <h3>Diagnóstico Técnico</h3>

            <p>
              Realizamos uma análise detalhada para identificar a causa do
              defeito com precisão.
            </p>
          </div>

          <div className="processo-card">
            <div className="processo-numero">03</div>
            <FaTools className="processo-icon" />

            <h3>Reparo com Garantia</h3>

            <p>
              Executamos o serviço necessário com qualidade, rapidez e garantia
              no atendimento.
            </p>
          </div>
        </div>
        <Link
          href="https://wa.me/553198403605?text=Olá!%20Vi%20o%20site%20da%20VH%20Refrigeração%20e%20gostaria%20de%20solicitar%20um%20atendimento%20técnico/orçamento."
          className="cta-button"
        >
          Chamar no Whatsapp <FaWhatsapp size={24} />
        </Link>
      </div>
    </section>
  );
}
