"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <section className="hero">
      {/* IMAGEM DE FUNDO */}
      <div className="hero-bg">
        <Image
          src="/hero-tecnico.webp"
          alt="Técnico em refrigeração"
          fill
          priority
          className="hero-bg-image"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Conteúdo */}
      <div className="hero-content">
        <span className="hero-badge">Atendimento Rápido na Grande BH</span>

        <h1 className="text-metallic-blue-dark">
          Assistência Técnica em Geladeiras, Freezers, Ar Condicionado e
          Máquinas de Lavar
        </h1>

        <p className="hero-description">
          Especialistas em manutenção, instalação e conserto de equipamentos de
          refrigeração residencial e comercial. Atendimento ágil, diagnóstico
          preciso e garantia de qualidade para sua tranquilidade.
        </p>

        <Link
          href="https://wa.me/553198403605"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Solicitar Atendimento
          <FaWhatsapp size={24} />
        </Link>
      </div>
    </section>
  );
}
