import { Footer } from "@/components/footer";
import { MainNavigation } from "@/components/main-navigation";
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
      <body className={`${inter.className} min-h-screen bg-slate-950`}>
        <MainNavigation>{children}</MainNavigation>

        <Footer />
      </body>
    </html>
  );
}
