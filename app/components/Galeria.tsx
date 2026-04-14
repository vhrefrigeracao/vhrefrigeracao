"use client";

import Image from "next/image";
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
    <section className="galeria">
      <div className="galeria-container">
        <span className="galeria-badge">Nossos Trabalhos</span>

        <h2 className="text-metallic-blue-dark">
          Confira Alguns Serviços Realizados Pela Nossa Equipe
        </h2>

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
      </div>
    </section>
  );
}
