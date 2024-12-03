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
      <div className="w-full max-w-[500px] text-slate-100 space-y-4 text-justify">
        <p>
          EPIC, ou Epic: The Musical é uma coleção de álbuns conceituais produzidos e idealizados
          por Jorge Rivera-Herrans que narram a Odisseia - épico de Homero, ilustrando por meio de
          uma grande variedade de ritmos e pontos de vista a jornada de Odisseu para retornar à ilha
          de Itaca, onde esperam sua esposa e filho.
        </p>

        <p>
          Este projeto conta com traduções para todas as músicas do musical, feitas com o esmero e
          carinho que merecem. Lógico, algumas liberdades foram tomadas, mas o ponto principal de
          cada canção foi respeitado. Conforme explorar as traduções, vai perceber que divergem
          sutilmente em estilo, e isto se dá pelo fato de que o projeto contou com dois tradutores,
          creditados logo abaixo no rodapé. A idea partiu da mente brilhante da Chuulia.
        </p>

        <p>
          Além das traduções em texto, um extra está por vir, mas por enquanto esperamos que aprecie
          e se divirta com o projeto, assim como nos divertimos colocando-o em prática! Ademais,{" "}
          <a
            href="https://www.youtube.com/@JayHerrans/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline text-teal-400"
          >
            você pode conferir o musical clicando aqui
          </a>
          . Já aproveita e escuta lendo a letra traduzida, que tal?
        </p>
      </div>

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
