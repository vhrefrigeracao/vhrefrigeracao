"use client";

import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const imagens = [
  "/galeria/consertando-geladeira.webp",
  "/galeria/conserto-de-freezer.webp",
  "/galeria/conserto-geladeira.webp",
  "/galeria/conserto-de-geladeira.webp",
  "/galeria/manutencao-de-geladeira.webp",
  "/galeria/manutencao-geladeira.webp",
  "/galeria/motor-geladeira-1.webp",
  "/galeria/motor-geladeira-2.webp",
];

export default function Galeria() {
  return (
    <section className="galeria" id="galeria">
      <div className="galeria-container">
        <span className="galeria-badge">Nossos Trabalhos</span>

        <h2>Confira Alguns Serviços Realizados Pela Nossa Equipe</h2>

        <p className="galeria-subtitle">
          Veja na prática a qualidade dos nossos atendimentos.
        </p>

        {/* GRID DESKTOP */}
        <div className="galeria-grid desktop-only">
          {imagens.map((img, index) => (
            <div className="galeria-item" key={index}>
              <Image
                src={img}
                alt={`Serviço ${index + 1}`}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>

        {/* CARROSSEL MOBILE */}
        <div className="mobile-only">
          <Swiper spaceBetween={20} slidesPerView={1.2}>
            {imagens.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="galeria-item">
                  <Image
                    src={img}
                    alt={`Serviço ${index + 1}`}
                    width={500}
                    height={500}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link
          className="cta-button"
          href="https://wa.me/553198403605?text=Olá!%20Vi%20o%20site%20da%20VH%20Refrigeração%20e%20gostaria%20de%20solicitar%20um%20atendimento%20técnico/orçamento."
          target="_blank"
          onClick={e => {
            e.preventDefault();

            const url = e.currentTarget.href;

            // Facebook
            trackFacebookLead();

            // Google Ads
            reportConversion(url);
          }}
        >
          Solicitar Orçamento pelo WhatsApp <FaWhatsapp />
        </Link>
      </div>
    </section>
  );
}
