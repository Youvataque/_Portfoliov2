import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/FondamentalAppComp/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seguin - Website",
  description: "Un site internet ? Une application mobile ? Ou bien un projet encore plus fou ? Dans tout les cas je suis la solution !",
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
        <meta property="og:title" content="Seguin - Website" />
        <meta property="og:description" content="Un site internet ? Une application mobile ? Ou bien un projet encore plus fou ? Contactez moi j'ai surement la solution !" />
        <meta property="og:image" content="/Img/favPres.webp" />
        <title>Seguin - Website</title>
      </head>
      <body className={cn(inter.className, "bg-background overflow-x-hidden")}>
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
