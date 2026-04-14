import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatWhatsapp from "./components/FloatWhatsapp";
import CookieConsent from "./components/CookieConsent";
import Script from "next/script";
import Image from "next/image";
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
        {/* Google Tag (Analytics + Ads) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5DYE8S8NQ2"
          strategy="afterInteractive"
        />

        <Script id="google-gtag" strategy="afterInteractive">
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

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '979066881238470');
    fbq('track', 'PageView');
  `}
        </Script>
        <noscript>
          <Image
            alt="pixel do facebook"
            width={18}
            height={18}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=979066881238470&ev=PageView&noscript=1"
          />
        </noscript>

        <Header />
        {children}
        <Footer />
        <FloatWhatsapp />
        <CookieConsent />
      </body>
    </html>
  );
}
