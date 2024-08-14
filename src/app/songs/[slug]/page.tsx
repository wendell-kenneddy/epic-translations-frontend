import { SongLayout } from "@/components/song-layout";
import { fetchSong } from "@/queries/fetch-song";
import { fetchSongs } from "@/queries/fetch-songs";
import { Metadata } from "next";

interface Params {
  slug: string;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const json = await fetchSongs();
  const slugs = json.items.map((i) => ({ slug: i.fields.slug }));
  return slugs;
}

export async function generateMetadata({ params }: { params: Params }) {
  const json = await fetchSongs();
  const song = json.items.find((i) => i.fields.slug == params.slug);
  const metadata: Metadata = {
    title: `Epic Translations | ${song?.fields.name}`,
    description: `Leia a letra traduzida de ${song?.fields.name}.`,
    creator: "Wendell Kenneddy",
    openGraph: {
      type: "website",
      title: `Epic Translations | ${song?.fields.name}`,
      siteName: `Epic Translations | ${song?.fields.name}`,
      description: `Leia a letra traduzida de ${song?.fields.name}.`,
      url: `${process.env.BASE_URL}/songs/${params.slug}`,
      locale: "pt-br",
    },
  };
  return metadata;
}

export default async function Song({ params }: { params: Params }) {
  const song = await fetchSong(params.slug);
  const parsedSong = {
    name: song.fields.name,
    lyrics: song.fields.lyrics,
  };

  return <SongLayout song={parsedSong} />;
}
