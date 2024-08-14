import { Saga, SongList } from "@/components/song-list";
import { fetchSongs, SongsAndSagasResponse } from "@/queries/fetch-songs";
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

function parseContentfulResponse(res: SongsAndSagasResponse) {
  const sagas = res.includes.Entry.reduce<Saga[]>((acc, curr) => {
    const relatedSongs = res.items
      .filter((s) => s.fields.saga.sys.id == curr.sys.id)
      .map((s) => ({
        id: s.sys.id,
        name: s.fields.name,
        slug: s.fields.slug,
      }));

    acc.push({
      id: curr.sys.id,
      name: curr.fields.name,
      songs: relatedSongs,
    });

    return acc;
  }, []);
  return sagas;
}

export default async function Home() {
  const songs = await fetchSongs();
  const songsBySaga = parseContentfulResponse(songs);

  return (
    <main className="w-[90%] bg-slate-900 max-w-[500px] mx-auto flex flex-col items-center gap-4 p-4 rounded-md shadow-lg">
      <h1 className="font-medium text-lg text-slate-100 sr-only">Traduções por saga</h1>

      <SongList sagas={songsBySaga} />
    </main>
  );
}
