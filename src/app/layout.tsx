import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eduarda Mendonça — Social Media Strategy",
    template: "%s | Eduarda Mendonça",
  },
  description:
    "Gestão e estratégia de redes sociais com foco em posicionamento digital, dados e resultados reais.",
  keywords: [
    "social media",
    "gestão de redes sociais",
    "estratégia digital",
    "conteúdo",
    "Instagram",
    "Eduarda Mendonça",
  ],
  applicationName: "EM",
  authors: [{ name: "Eduarda Mendonça" }],
  openGraph: {
    type: "website",
    title: "Eduarda Mendonça — Social Media Strategy",
    description:
      "Gestão e estratégia de redes sociais com foco em posicionamento digital, dados e resultados reais.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Eduarda Mendonça",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduarda Mendonça — Social Media Strategy",
    description:
      "Gestão e estratégia de redes sociais com foco em posicionamento digital, dados e resultados reais.",
    images: ["/profile.jpg"],
    site: "@EMendonadigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script id="jsonld-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Eduarda Mendonça",
            jobTitle: "Social Media Strategist",
            sameAs: ["https://instagram.com/EMendonadigital"],
            image: "/profile.jpg",
            url: "/",
          })}
        </Script>
      </body>
    </html>
  );
}
