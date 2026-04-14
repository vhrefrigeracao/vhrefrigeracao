import Link from "next/link";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Branding */}
          <div className="footer-column">
            <h3 className="footer-logo">VH Refrigeração</h3>

            <p>
              Especialistas em manutenção e assistência técnica de geladeiras,
              freezers, ar condicionado e máquinas de lavar com atendimento
              rápido e garantia de serviço.
            </p>
          </div>

          {/* Links */}
          <div className="footer-column">
            <h4>Navegação</h4>

            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="#servicos">Serviços</Link>
              </li>
              <li>
                <Link href="#depoimentos">Depoimentos</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="footer-column">
            <h4>Contato</h4>

            <ul>
              <li>
                <FaWhatsapp /> (31) 98403-0605
              </li>

              <li>
                <FaPhoneAlt /> (31) 98403-0605
              </li>

              <li>
                <FaEnvelope /> contato@vhrefrigeracao.com
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div className="footer-column">
            <h4>Área de Atendimento</h4>

            <p>
              <FaMapMarkerAlt />
              Atendimento em Belo Horizonte e Região Metropolitana
            </p>
          </div>
        </div>
        <div className="footer-links">
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          <Link href="/termos-de-uso">Termos de Uso</Link>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} VH Refrigeração. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
