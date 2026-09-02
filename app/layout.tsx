import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#102A22',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pousadavistadolago.com.br'),
  title: {
    default: 'Pousada Vista do Lago | Refúgio Premium em Araruama - RJ',
    template: '%s | Pousada Vista do Lago',
  },
  description:
    'Hospedagem exclusiva, Day Use completo, piscina panoramicamente integrada à Lagoa de Araruama e o pôr do sol mais inesquecível da Região dos Lagos.',
  keywords: [
    'Pousada Vista do Lago',
    'Pousada Araruama',
    'Hospedagem Araruama',
    'Day Use Araruama',
    'Lagoa de Araruama',
    'Hotel Boutique Região dos Lagos',
    'Pousada com piscina Araruama',
    'Pôr do Sol Araruama',
    'pousada pet friendly araruama',
    'day use lagoa araruama',
    'refúgio região dos lagos',
  ],
  authors: [{ name: 'Pousada Vista do Lago', url: 'https://pousadavistadolago.com.br' }],
  creator: 'Pousada Vista do Lago',
  publisher: 'Pousada Vista do Lago',
  category: 'Travel & Hospitality',
  alternates: {
    canonical: 'https://pousadavistadolago.com.br/',
    languages: { 'pt-BR': 'https://pousadavistadolago.com.br/' },
  },
  openGraph: {
    title: 'Pousada Vista do Lago | Araruama RJ',
    description:
      'Hospedagem boutique, Day Use, piscina panorâmica, praias e gastronomia às margens da Lagoa de Araruama.',
    url: 'https://pousadavistadolago.com.br',
    siteName: 'Pousada Vista do Lago',
    images: [
      {
        url: '/images/hero-sunset-pool.png',
        width: 1200,
        height: 630,
        alt: 'Piscina e Pôr do Sol na Pousada Vista do Lago Araruama',
        type: 'image/png',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pousada Vista do Lago | Refúgio Premium em Araruama - RJ',
    description:
      'Hospedagem boutique, Day Use e piscina panorâmica às margens da Lagoa de Araruama.',
    images: ['/images/hero-sunset-pool.png'],
    site: '@vistadolago_pousada',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/images/logo-vista-do-lago.png',
    apple: '/images/logo-vista-do-lago.png',
    shortcut: '/images/logo-vista-do-lago.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Pousada Vista do Lago',
  image: 'https://pousadavistadolago.com.br/images/hero-sunset-pool.png',
  url: 'https://pousadavistadolago.com.br',
  telephone: '+5522999999999',
  priceRange: 'R$ 35 - R$ 600',
  description: 'Pousada boutique e Day Use às margens da Lagoa de Araruama com estrutura completa de lazer e gastronomia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Mirante, 743',
    addressLocality: 'Araruama',
    addressRegion: 'RJ',
    postalCode: '28970-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -22.871,
    longitude: -42.342,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Piscina com vista para a lagoa', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Acesso a duas praias', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurante e Bar', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Caiaque e Lazer', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pet Friendly', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi Gratuito', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Day Use', value: true },
  ],
  sameAs: [
    'https://www.instagram.com/vistadolago_pousada/',
    'https://wa.me/5522999999999',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        {/* Preconnect para performance de fontes e mapas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        {/* Apple PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vista do Lago" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Geo tags — SEO local */}
        <meta name="geo.region" content="BR-RJ" />
        <meta name="geo.placename" content="Araruama, Rio de Janeiro" />
        <meta name="geo.position" content="-22.871;-42.342" />
        <meta name="ICBM" content="-22.871, -42.342" />
      </head>
      <body className="bg-offwhite text-charcoal antialiased selection:bg-forest-deep selection:text-sand">
        {children}
        {/* JSON-LD carregado após interação para não bloquear renderização */}
        <Script
          id="json-ld-lodging"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
