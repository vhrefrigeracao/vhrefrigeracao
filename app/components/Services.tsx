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

        <h2>Assistência Técnica Especializada em Refrigeração na Grande BH</h2>

        <p className="services-subtitle">
          Trabalhamos com manutenção, instalação e conserto dos principais
          equipamentos residenciais e comerciais. Atendemos Belo Horizonte e
          região
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-image geladeira">
              <FaSnowflake className="service-icon" />
            </div>
            <div className="service-content">
              {" "}
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
                <Link
                  href="https://wa.me/553198403605?text=Olá!%20Vi%20no%20site%20que%20vocês%20realizam%20manutenção%20de%20geladeiras%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20conserto/manutenção%20da%20minha%20geladeira."
                  className="cta-button"
                >
                  Chamar no Whatsapp <FaWhatsapp size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="service-card featured">
            <div className="service-image ar-condicionado">
              <FaFan className="service-icon" />
            </div>
            <div className="service-content">
              {" "}
              <h3>Ar Condicionado</h3>
              <p>Instalação e manutenção especializada.</p>
              <ul>
                <li>Limpeza técnica</li>
                <li>Instalação completa</li>
                <li>Recarga de gás</li>
              </ul>
              <div className="buttons">
                <Link href="/servicos/ar-condicionado" className="saiba-mais">
                  Saiba mais
                </Link>
                <Link
                  href="https://wa.me/553198403605?text=Olá!%20Vi%20no%20site%20que%20vocês%20trabalham%20com%20manutenção%20de%20ar%20condicionado%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20atendimento%20técnico."
                  className="cta-button"
                >
                  Chamar no Whatsapp <FaWhatsapp size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image freezer">
              <FaTint className="service-icon" />
            </div>
            <div className="service-content">
              <h3>Freezers</h3>
              <p>Reparo profissional para equipamentos comerciais.</p>
              <ul>
                <li>Motor e compressor</li>
                <li>Placa eletrônica</li>
                <li>Vazamentos</li>
              </ul>
              <div className="buttons">
                <Link
                  href="/servicos/manutencao-freezer"
                  className="saiba-mais"
                >
                  Saiba mais
                </Link>
                <Link
                  href="https://wa.me/553198403605?text=Olá!%20Vi%20no%20site%20que%20vocês%20fazem%20manutenção%20de%20freezers%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20atendimento%20técnico."
                  className="cta-button"
                >
                  Chamar no Whatsapp <FaWhatsapp size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image maquina-lavar">
              <FaBlender className="service-icon" />
            </div>
            <div className="service-content">
              <h3>Máquinas de Lavar</h3>
              <p>Manutenção completa para sua lavadora.</p>
              <ul>
                <li>Troca de bomba</li>
                <li>Correias</li>
                <li>Placa eletrônica</li>
              </ul>
              <div className="buttons">
                <Link
                  href="/servicos/manutencao-maquina-de-lavar"
                  className="saiba-mais"
                >
                  Saiba mais
                </Link>
                <Link
                  href="https://wa.me/553198403605?text=Olá!%20Vi%20no%20site%20que%20vocês%20fazem%20manutenção%20de%20máquinas%20de%20lavar%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20atendimento%20técnico."
                  className="cta-button"
                >
                  Chamar no Whatsapp <FaWhatsapp size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
