import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Trusted Homeopathic Manufacturing & Distribution`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Natural Homeo Research Laboratory - Leading homeopathic medicine manufacturer and distributor in India. Research-driven quality medicines. GMP certified. Distributors & dealers welcome.",
  keywords: [
    "homeopathic medicine manufacturer India",
    "homeopathic distributor Bihar",
    "natural homeo research laboratory",
    "homeopathic medicines India",
    "homeopathic pharma company",
    "GMP certified homeopathy",
    "mother tincture manufacturer",
    "homeopathic dilutions",
    "bio combination medicines",
    "ayush certified homeopathy",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Trusted Homeopathic Manufacturing`,
    description:
      "Research-driven homeopathic medicines for better healthcare. GMP certified manufacturer and distributor across India.",
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@naturalhomeolab",
    creator: "@naturalhomeolab",
    title: `${SITE_CONFIG.name} | Homeopathic Manufacturing`,
    description: "Research-driven homeopathic medicines for better healthcare.",
    images: [`${SITE_CONFIG.url}/images/og-image.jpg`],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "en-IN": SITE_CONFIG.url,
    },
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color */}
        <meta name="theme-color" content="#0a7261" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_CONFIG.url}/#organization`,
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_CONFIG.url}/images/logo.png`,
                width: 300,
                height: 100,
              },
              description: SITE_CONFIG.description,
              foundingDate: String(SITE_CONFIG.founded),
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE_CONFIG.address.street,
                addressLocality: SITE_CONFIG.address.city,
                addressRegion: SITE_CONFIG.address.state,
                postalCode: SITE_CONFIG.address.pincode,
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: SITE_CONFIG.contact.phone,
                  contactType: "customer service",
                  availableLanguage: ["English", "Hindi"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: SITE_CONFIG.contact.phone,
                  contactType: "sales",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              sameAs: Object.values(SITE_CONFIG.social),
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Homeopathic Medicines",
              },
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_CONFIG.url}/#localbusiness`,
              name: SITE_CONFIG.name,
              image: `${SITE_CONFIG.url}/images/og-image.jpg`,
              telephone: SITE_CONFIG.contact.phone,
              email: SITE_CONFIG.contact.email,
              url: SITE_CONFIG.url,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE_CONFIG.address.street,
                addressLocality: SITE_CONFIG.address.city,
                addressRegion: SITE_CONFIG.address.state,
                postalCode: SITE_CONFIG.address.pincode,
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "25.5941",
                longitude: "85.1376",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  );
}
