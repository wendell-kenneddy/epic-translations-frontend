import { Saga, SongList } from "@/components/song-list";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

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

async function fetchSagas() {
  const sagas = await client.fetch<Saga[]>(
    `*[_type == "saga"] | order(index) {
      _id,
      name,
      "songs": *[_type == "song" && references(^._id)] | order(index) {
        _id,
        name,
        "slug": slug.current
      }
    }`,
    {},
    { cache: "force-cache" }
  );
  return sagas;
}

export default async function Home() {
  const sagas = await fetchSagas();

  return (
    <main className="w-[90%] bg-slate-900 max-w-[500px] mx-auto flex flex-col items-center gap-4 p-4 rounded-md shadow-lg">
      <h1 className="font-medium text-lg text-slate-100 sr-only">Traduções por saga</h1>

      <SongList sagas={sagas} />
    </main>
  );
}
