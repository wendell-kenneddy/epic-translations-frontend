import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Epic Translations",
  description: "Traduções para todas as músicas do musical Epic.",
  creator: "Wendell Kenneddy",
  openGraph: {
    type: "website",
    title: "Epic Translations",
    siteName: "Epic Translations",
    description: "Traduções para todas as músicas do musical Epic.",
    locale: "pt-br",
  },
};

export default async function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center p-4 space-y-4 rounded-md shadow-lg">
      <p className="text-slate-100 font-medium">Você ainda não selecionou nenhuma música :(</p>

      <Image
        priority={true}
        unoptimized={true}
        src="/catto.gif"
        alt="Dancing cat gif"
        width={200}
        height={200}
      />
    </main>
  );
}
