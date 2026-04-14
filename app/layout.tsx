import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatWhatsapp from "./components/FloatWhatsapp";
import CookieConsent from "./components/CookieConsent";
import Script from "next/script";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    "VH Refrigeração | Assistência Técnica em Geladeiras, Freezers e Ar Condicionado",

  description:
    "Especialista em manutenção e conserto de geladeiras, freezers, ar condicionado e máquinas de lavar. Atendimento rápido e profissional em toda região.",

  keywords: [
    "assistência técnica geladeira",
    "conserto de geladeira",
    "técnico em refrigeração",
    "manutenção ar condicionado",
    "conserto freezer",
    "conserto máquina de lavar roupas",
    "VH refrigeração",
  ],

  authors: [{ name: "VH Refrigeração" }],

  creator: "VH Refrigeração",

  openGraph: {
    title: "VH Refrigeração",
    description:
      "Conserto de geladeiras, freezers, ar condicionado e máquinas de lavar com atendimento rápido e garantia.",
    url: "https://vhrefrigeracao.com.br",
    siteName: "VH Refrigeração",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://vhrefrigeracao.com.br"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-(--font-poppins) min-h-screen flex flex-col antialiased">
        {/* Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16638047430"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16638047430');
          `}
        </Script>

        <Script id="google-gtag google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            // Google Analytics
            gtag('config', 'G-5DYE8S8NQ2');

            // Google Ads
            gtag('config', 'AW-16638047430');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
        <FloatWhatsapp />
        <CookieConsent />
      </body>
    </html>
  );
}
