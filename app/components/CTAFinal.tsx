import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAFinal() {
  return (
    <section className="cta-final" id="contato">
      <div className="cta-final-overlay"></div>

      <div className="cta-final-container">
        <span className="cta-final-badge">Fale Conosco Agora</span>

        <h2 className="cta-final-title">Seu Equipamento Parou de Funcionar?</h2>

        <p className="cta-final-subtitle">
          Entre em contato agora mesmo e solicite um atendimento rápido com um
          técnico especializado. Garantimos agilidade, qualidade e total
          transparência em cada serviço.
        </p>

        <Link
          href="https://wa.me/553198403605?text=Olá!%20Vi%20o%20site%20da%20VH%20Refrigeração%20e%20gostaria%20de%20solicitar%20um%20atendimento%20técnico/orçamento."
          target="_blank"
          className="cta-button"
        >
          Solicitar Atendimento Agora
          <FaWhatsapp />
        </Link>

        <small className="cta-final-small">
          Atendimento rápido • Orçamento transparente • Garantia no serviço
        </small>
      </div>
    </section>
  );
}
