import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} min-h-screen bg-zinc-950 space-y-4`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
