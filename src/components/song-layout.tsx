import { PortableText, PortableTextBlock } from "next-sanity";
import { SongData } from "./song-list";

interface SongLayoutProps {
  song: SongData & { saga: string; lyrics: PortableTextBlock };
}

export function SongLayout({ song }: SongLayoutProps) {
  return (
    <main className="w-[90%] max-w-[500px] mx-auto space-y-4">
      <article className="space-y-4 text-left text-zinc-100">
        <header className="w-full py-4 px-2 flex flex-col items-center justify-center gap-2 bg-zinc-900 rounded-t-md shadow-lg">
          <h1 className="font-medium text-lg text-zinc-100">{song.name}</h1>

          <div className="h-px w-1/2 bg-zinc-100/50 rounded-md"></div>

          <span className="text-sm text-zinc-100">{song.saga}</span>
        </header>

        <PortableText value={song.lyrics} />
      </article>
    </main>
  );
}
