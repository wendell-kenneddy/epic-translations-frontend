import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resource not found",
  description: "O recurso solicitado não foi encontrado.",
};

export default function NotFound() {
  return (
    <main className="w-[90%] max-w-[500px] mx-auto flex flex-col items-center justify-center gap-4">
      <h1 className="text-zinc-100 font-medium text-md text-center">
        Oops, parece que sua odisseia chegou ao fim. O recurso solicitado não foi encontrado :(
      </h1>

      <Image src="/omega.svg" alt="Omega sign illustration" width={128} height={128} />
    </main>
  );
}
