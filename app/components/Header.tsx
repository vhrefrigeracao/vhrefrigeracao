import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <Image
          loading="eager"
          className="rounded-full"
          src={"/logo.png"}
          width={100}
          height={100}
          alt="Logomarca de VH Refrigeração"
        />
      </Link>
      <nav>
        <Link href="/servicos/ar-condicionado">Ar Condicionado</Link>
        <Link href="/servicos/manutencao-freezer">Freezer</Link>
        <Link href="/servicos/manutencao-geladeira">Geladeira</Link>
        <Link href="/servicos/manutencao-maquina-de-lavar">
          Máquina de Lavar
        </Link>
      </nav>
    </header>
  );
}
