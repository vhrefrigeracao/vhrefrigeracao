"use client";

import Link from "next/link";
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

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
                <FaWhatsapp />{" "}
                <Link
                  href="https://wa.me/553198403605?text=Olá!%20Vi%20o%20site%20da%20VH%20Refrigeração%20e%20gostaria%20de%20solicitar%20um%20atendimento%20técnico/orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (31) 98403-0605
                </Link>
              </li>

              <li>
                <FaInstagram />{" "}
                <Link
                  href="https://www.instagram.com/vh.refrigeracao"
                  target="_blank"
                >
                  @vh.refrigeracao
                </Link>
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
