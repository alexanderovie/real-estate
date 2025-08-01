import { Inter } from 'next/font/google';
import "../public/main.scss";
import "../public/css/fonts.css";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "photoswipe/style.css";
import "rc-slider/assets/index.css";
import ClientLayout from "@/components/common/ClientLayout";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: "Fascinante Digital - Desarrollo Web Inmobiliario Profesional",
    template: "%s | Fascinante Digital"
  },
  description: "Demo profesional de sitio web inmobiliario desarrollado por Fascinante Digital. Soluciones web completas para agencias y agentes inmobiliarios con diseño moderno y funcionalidades avanzadas.",
  keywords: [
    "desarrollo web inmobiliario", 
    "sitio web agencia inmobiliaria", 
    "Fascinante Digital", 
    "diseño web profesional", 
    "real estate website", 
    "agencia inmobiliaria", 
    "desarrollo web", 
    "marketing inmobiliario",
    "propiedades en venta",
    "inmobiliaria online"
  ],
  authors: [{ name: "Fascinante Digital" }],
  creator: "Fascinante Digital",
  publisher: "Fascinante Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fascinantedigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Fascinante Digital - Desarrollo Web Inmobiliario Profesional",
    description: "Demo profesional de sitio web inmobiliario desarrollado por Fascinante Digital. Soluciones web completas para agencias y agentes inmobiliarios.",
    url: 'https://fascinantedigital.com',
    siteName: 'Fascinante Digital',
    images: [
      {
        url: '/images/opengrafp.png',
        width: 1200,
        height: 628,
        alt: 'Fascinante Digital - Desarrollo Web Inmobiliario Profesional',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fascinante Digital - Desarrollo Web Inmobiliario Profesional",
    description: "Demo profesional de sitio web inmobiliario desarrollado por Fascinante Digital. Soluciones web completas para agencias y agentes inmobiliarios.",
    images: ['/images/opengrafp.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/images/favicon/favicon.ico',
    apple: [
      { url: '/images/favicon/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/favicon/apple-icon.png',
      },
    ],
  },
  manifest: '/images/favicon/manifest.json',
  themeColor: '#1662FF',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="icon" href="/images/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="theme-color" content="#1662FF" />
        <meta name="msapplication-TileColor" content="#1662FF" />
        <meta name="msapplication-config" content="/images/favicon/site.webmanifest" />
      </head>
      <body className="popup-loader">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
