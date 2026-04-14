"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

export default function Depoimentos() {
  const depoimentos = [
    "/depoimentos/cliente1.jpg",
    "/depoimentos/cliente2.jpg",
    "/depoimentos/cliente3.jpg",
    "/depoimentos/cliente4.jpg",
  ];

  return (
    <section className="depoimentos">
      <div className="depoimentos-container">
        <span className="depoimentos-badge">Avaliações Reais</span>

        <h2 className="depoimentos-title">Veja o Que Nossos Clientes Dizem</h2>

        <p className="depoimentos-subtitle">
          A satisfação dos nossos clientes é a prova da qualidade e confiança do
          nosso trabalho.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {depoimentos.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="depoimento-card">
                <Image
                  src={img}
                  alt={`Depoimento ${index + 1}`}
                  width={400}
                  height={800}
                  className="depoimento-img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link
          href="https://g.page/r/CePKYSE15WIJEAE/review"
          target="_blank"
          className="cta-button"
        >
          Ver avaliações no Google
        </Link>
      </div>
    </section>
  );
}
