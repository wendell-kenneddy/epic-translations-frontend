import { Footer } from "@/components/footer";
import { MainNavigation } from "@/components/main-navigation";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  creator: "Wendell Kenneddy",
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/icon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", type: "image/png" },
  ],
  other: { "theme-color": "#0f172a" },
};

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
