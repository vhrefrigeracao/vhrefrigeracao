"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Vocês realizam atendimento em domicílio?",
    answer:
      "Sim! Realizamos atendimento diretamente no local para sua maior comodidade, levando todo o equipamento necessário para diagnóstico e reparo.",
  },
  {
    question: "O orçamento é gratuito?",
    answer:
      "Entre em contato conosco para avaliação inicial. Dependendo do serviço e localização, oferecemos orçamento sem compromisso.",
  },
  {
    question: "Quais regiões vocês atendem?",
    answer:
      "Atendemos toda a região local e cidades próximas. Consulte nossa equipe pelo WhatsApp para confirmar sua localidade.",
  },
  {
    question: "O serviço possui garantia?",
    answer:
      "Sim! Todos os nossos serviços possuem garantia para garantir sua segurança e tranquilidade após o atendimento.",
  },
  {
    question: "Quanto tempo demora para o atendimento?",
    answer:
      "Buscamos realizar atendimentos o mais rápido possível, muitas vezes no mesmo dia dependendo da demanda e localização.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <span className="faq-badge">Perguntas Frequentes</span>

        <h2>Tire Suas Dúvidas Sobre Nosso Atendimento</h2>

        <p className="faq-subtitle">
          Respondemos às principais dúvidas dos nossos clientes para que você
          tenha total segurança antes de solicitar seu atendimento.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
                <FaChevronDown className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
