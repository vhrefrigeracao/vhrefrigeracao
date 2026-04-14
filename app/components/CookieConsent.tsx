"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <p>
        Utilizamos cookies para melhorar sua experiência em nosso site. Ao
        continuar navegando, você concorda com nossa política de privacidade.
      </p>

      <button onClick={acceptCookies}>Aceitar</button>
    </div>
  );
}
