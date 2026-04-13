import Link from "next/link";
import {
  FaSnowflake,
  FaFan,
  FaTint,
  FaBlender,
  FaWhatsapp,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <span className="services-badge">Nossos Serviços</span>

        <h2 className="text-metallic-blue-dark">
          Assistência Técnica Especializada em Refrigeração em BH
        </h2>

        <p className="services-subtitle">
          Trabalhamos com manutenção, instalação e conserto dos principais
          equipamentos residenciais e comerciais. Atendemos Belo Horizonte e
          região
        </p>

        <div className="services-grid">
          <div className="service-card">
            <FaSnowflake className="service-icon" />
            <h3>Geladeiras</h3>
            <p>Conserto completo e manutenção preventiva.</p>
            <ul>
              <li>Troca de peças</li>
              <li>Recarga de gás</li>
              <li>Diagnóstico técnico</li>
            </ul>
            <div className="buttons">
              <Link
                href="/servicos/manutencao-geladeira"
                className="saiba-mais"
              >
                Saiba mais
              </Link>
              <Link href="https://wa.me/553198403605" className="cta-button">
                Chamar no Whatsapp <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>

          <div className="service-card featured">
            <FaFan className="service-icon" />
            <h3>Ar Condicionado</h3>
            <p>Instalação e manutenção especializada.</p>
            <ul>
              <li>Limpeza técnica</li>
              <li>Instalação completa</li>
              <li>Recarga de gás</li>
            </ul>
            <div className="buttons">
              <Link
                href="/servicos/manutencao-geladeira"
                className="saiba-mais"
              >
                Saiba mais
              </Link>
              <Link href="https://wa.me/553198403605" className="cta-button">
                Chamar no Whatsapp <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>

          <div className="service-card">
            <FaTint className="service-icon" />
            <h3>Freezers</h3>
            <p>Reparo profissional para equipamentos comerciais.</p>
            <ul>
              <li>Motor e compressor</li>
              <li>Placa eletrônica</li>
              <li>Vazamentos</li>
            </ul>
            <div className="buttons">
              <Link
                href="/servicos/manutencao-geladeira"
                className="saiba-mais"
              >
                Saiba mais
              </Link>
              <Link href="https://wa.me/553198403605" className="cta-button">
                Chamar no Whatsapp <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>

          <div className="service-card">
            <FaBlender className="service-icon" />
            <h3>Máquinas de Lavar</h3>
            <p>Manutenção completa para sua lavadora.</p>
            <ul>
              <li>Troca de bomba</li>
              <li>Correias</li>
              <li>Placa eletrônica</li>
            </ul>
            <div className="buttons">
              <Link
                href="/servicos/manutencao-geladeira"
                className="saiba-mais"
              >
                Saiba mais
              </Link>
              <Link href="https://wa.me/553198403605" className="cta-button">
                Chamar no Whatsapp <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
