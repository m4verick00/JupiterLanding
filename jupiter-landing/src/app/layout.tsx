import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Jupiter - Planet-scale Security Telemetry",
  description: "Collect, detect, and respond across your stack with an open, self-hostable SIEM that feels like a product—not a project.",
  keywords: ["SIEM", "security", "telemetry", "open source", "self-hosted", "Suricata", "Zeek", "Sigma"],
  authors: [{ name: "Project Jupiter" }],
  creator: "Project Jupiter",
  publisher: "Project Jupiter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://projectjupiter.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Project Jupiter - Planet-scale Security Telemetry",
    description: "Collect, detect, and respond across your stack with an open, self-hostable SIEM that feels like a product—not a project.",
    url: "https://projectjupiter.in",
    siteName: "Project Jupiter",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Project Jupiter - Planet-scale Security Telemetry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Jupiter - Planet-scale Security Telemetry",
    description: "Collect, detect, and respond across your stack with an open, self-hostable SIEM that feels like a product—not a project.",
    images: ["/opengraph-image.png"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#16f2f2" />
        <meta name="theme-color" content="#05060b" />
        <meta name="msapplication-TileColor" content="#05060b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Project Jupiter",
              description: "Planet-scale security telemetry platform",
              url: "https://projectjupiter.in",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Linux, Docker, Kubernetes",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Project Jupiter",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
