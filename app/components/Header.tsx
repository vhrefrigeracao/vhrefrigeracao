"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScroll) {
        setShowHeader(false); // descendo
      } else {
        setShowHeader(true); // subindo
      }

      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScroll]);

  return (
    <>
      <header className={`header ${showHeader ? "show" : "hide"}`}>
        <Link href="/" className="logo">
          <Image src="/logo.png" width={80} height={80} alt="VH Refrigeração" />
        </Link>

        <nav className="desktop-nav">
          <Link href="/servicos/ar-condicionado">Ar Condicionado</Link>
          <Link href="/servicos/manutencao-freezer">Freezer</Link>
          <Link href="/servicos/manutencao-geladeira">Geladeira</Link>
          <Link href="/servicos/manutencao-maquina-de-lavar">
            Máquina de Lavar
          </Link>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </header>

      {/* OVERLAY */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MENU MOBILE */}
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>

        <Link href="/servicos/ar-condicionado">Ar Condicionado</Link>
        <Link href="/servicos/manutencao-freezer">Freezer</Link>
        <Link href="/servicos/manutencao-geladeira">Geladeira</Link>
        <Link href="/servicos/manutencao-maquina-de-lavar">
          Máquina de Lavar
        </Link>
      </aside>
    </>
  );
}
