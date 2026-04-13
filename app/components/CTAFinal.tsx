import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CTAFinal() {
  return (
    <section className="cta-final">
      <div className="cta-final-container">
        <span className="cta-final-badge">Fale Conosco Agora</span>

        <h2 className="cta-final-title">Seu Equipamento Parou de Funcionar?</h2>

        <p className="cta-final-subtitle">
          Entre em contato agora mesmo e solicite um atendimento rápido com um
          técnico especializado. Garantimos agilidade, qualidade e total
          transparência em cada serviço.
        </p>

        <Link
          href="https://wa.me/553198403605"
          target="_blank"
          className="cta-final-button"
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
