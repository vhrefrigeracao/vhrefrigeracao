"use client";
import { reportConversion, trackFacebookLead } from "@/lib/gtag";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <Link
      href="https://wa.me/553198403605?text=Olá%20VH%20Refrigeração!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20manutenção%20de%20um%20equipamento."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Falar no WhatsApp"
      onClick={e => {
        e.preventDefault();

        const url = e.currentTarget.href;

        // Facebook
        trackFacebookLead();

        // Google Ads
        reportConversion(url);
      }}
    >
      <FaWhatsapp />
      <span>Solicitar Orçamento</span>
    </Link>
  );
}
