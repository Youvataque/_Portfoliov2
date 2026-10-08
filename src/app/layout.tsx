import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/FondamentalAppComp/Navbar";
import RouteHistory from "@/components/FondamentalAppComp/RouteHistory";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seguin-dev.com"),
  title: "Seguin - Website",
  description: "Un site internet ? Une application mobile ? Ou bien un projet encore plus fou ? Dans tout les cas je suis la solution !",
  // image de partage générée aux couleurs du site (photo, intro, technos)
  openGraph: {
    title: "Yannis Seguin · Product Engineer",
    description: "Je conçois et déploie des architectures web & mobile complètes, de l'app au back.",
    url: "/",
    siteName: "Seguin-dev",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yannis Seguin, Product Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={cn(inter.className, "bg-background overflow-x-hidden")}>
        <Navbar />
        <RouteHistory />
        {children}
      </body>
    </html>
  );
}
