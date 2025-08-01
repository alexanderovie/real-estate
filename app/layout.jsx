import "../public/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "photoswipe/style.css";
import "rc-slider/assets/index.css";
import ClientLayout from "@/components/common/ClientLayout";

export const metadata = {
  title: {
    default: "Fascinante Digital - Real Estate Website Demo",
    template: "%s | Fascinante Digital"
  },
  description: "Demo profesional de sitio web inmobiliario desarrollado por Fascinante Digital. Muestra las capacidades de desarrollo web para agencias y agentes inmobiliarios.",
  keywords: ["real estate", "inmobiliaria", "desarrollo web", "Fascinante Digital", "agencia inmobiliaria", "sitio web profesional"],
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
    title: "Fascinante Digital - Real Estate Website Demo",
    description: "Demo profesional de sitio web inmobiliario desarrollado por Fascinante Digital",
    url: 'https://fascinantedigital.com',
    siteName: 'Fascinante Digital',
    images: [
      {
        url: '/images/logo/fascinante-resized.png',
        width: 1200,
        height: 630,
        alt: 'Fascinante Digital',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fascinante Digital - Real Estate Website Demo",
    description: "Demo profesional de sitio web inmobiliario desarrollado por Fascinante Digital",
    images: ['/images/logo/fascinante-resized.png'],
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
    <html lang="es">
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
