import "./globals.css";
import {
  DESCRIPTION,
  PAGE_URL,
  SITE_URL,
  TITLE,
} from "../lib/site";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0879b8",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "MRI scan Gurugram",
    "3T MRI",
    "MDRC",
    "MRI Gurgaon",
    "PET-CT",
    "CT Scan",
    "diagnostic centre Sector 40",
  ],
  authors: [{ name: "Modern Diagnostic & Research Centre" }],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "MDRC India",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/3t-mri-machine.jpg",
        width: 1200,
        height: 630,
        alt: "Advanced MRI Scan in Gurugram at MDRC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/3t-mri-machine.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Modern Diagnostic & Research Centre",
  url: SITE_URL,
  image: `${SITE_URL}/images/3t-mri-machine.jpg`,
  telephone: "+91-8920300300",
  medicalSpecialty: "Diagnostic Radiology",
  areaServed: "Gurugram",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "1057P, Sector-40",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122002",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "363-364/4, Sector-12, New Railway Road",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122001",
      addressCountry: "IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
