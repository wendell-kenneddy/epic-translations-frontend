import { SongLayout } from "@/components/song-layout";
import { SongData } from "@/components/song-list";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { PortableTextBlock } from "next-sanity";

interface Params {
  slug: string;
}

export interface SongWithLyrics extends SongData {
  saga: string;
  lyrics: PortableTextBlock;
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    `*[_type == "song"]{ "slug": slug.current }`
  );
  return slugs;
}

export async function generateMetadata({ params }: { params: Params }) {
  const songNames = await client.fetch<{ name: string; slug: string }[]>(
    `*[_type == "song"]{ name, "slug": slug.current }`
  );
  const song = songNames.find((s) => s.slug == params.slug);
  const metadata: Metadata = {
    title: `Epic Translations | ${song?.name}`,
    description: `Leia a letra traduzida de ${song?.name}.`,
    creator: "Wendell Kenneddy",
    openGraph: {
      type: "website",
      title: `Epic Translations | ${song?.name}`,
      siteName: `Epic Translations | ${song?.name}`,
      description: `Leia a letra traduzida de ${song?.name}.`,
      locale: "pt-br",
    },
  };
  return metadata;
}

export const dynamicParams = false;

async function fetchSong(slug: string) {
  const song = await client.fetch<SongWithLyrics>(`*[_type == "song" && slug.current == "${slug}" ]{
      name,
      "saga": saga->name,
      lyrics
    }[0]`);
  return song;
}

export default async function Song({ params }: { params: Params }) {
  const song = await fetchSong(params.slug);

  return <SongLayout song={song} />;
}
