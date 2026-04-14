"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    nome: "Flavia Silva",
    texto:
      "Gostei muito da agilidade da empresa, no mesmo dia vieram e já resolveram o problema do meu ar condicionado.",
  },
  {
    nome: "Angela Ferreira",
    texto:
      "Excelente trabalho, recomendo. Ágil e deixou minha geladeira funcionando como nova. Parabéns pelo serviço!",
  },
  {
    nome: "Andre Magalhães",
    texto:
      "Desde o primeiro contato pelo WhatsApp até a execução do serviço, fui muito bem atendido. Empresa de confiança!",
  },
  {
    nome: "Igor Rafael",
    texto:
      "Excelente atendimento e trabalho com seriedade. Super indico, empresa confiável e profissional.",
  },
  {
    nome: "Matheus Leal",
    texto: "Excelentes profissionais, qualidade em serviço e preço justo.",
  },
  {
    nome: "Ingrid Gabrielle",
    texto:
      "Contratei para consertar minha máquina e adorei o serviço. Muito competente e ágil.",
  },
];

export default function Depoimentos() {
  return (
    <section className="reviews" id="depoimentos">
      <div className="reviews-container">
        <span className="reviews-badge">Avaliações Reais</span>

        <h2 className="reviews-title">O Que Nossos Clientes Dizem no Google</h2>

        <p className="reviews-subtitle">
          Confira avaliações reais de clientes satisfeitos com nossos serviços.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <div className="review-top">
                  <div className="avatar">{review.nome.charAt(0)}</div>

                  <div>
                    <h4>{review.nome}</h4>
                    <span>Google Review</span>
                  </div>
                </div>

                <div className="stars">★★★★★</div>

                <p>{review.texto}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
