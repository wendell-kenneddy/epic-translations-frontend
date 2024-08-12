import { PortableText, PortableTextBlock } from "next-sanity";
import { SongData } from "./song-list";

interface SongLayoutProps {
  song: SongData & { saga: string; lyrics: PortableTextBlock };
}

export function SongLayout({ song }: SongLayoutProps) {
  return (
    <main className="w-[90%] max-w-[500px] mx-auto space-y-4">
      <article className="space-y-4 text-left text-slate-100">
        <header className="w-full py-4 px-2 flex flex-col items-center justify-center gap-2 bg-slate-900 rounded-t-md shadow-lg">
          <h1 className="font-medium text-lg text-gray-100">{song.name}</h1>

          <div className="h-px w-1/2 bg-slate-100/50 rounded-md"></div>

          <span className="text-sm text-slate-100">{song.saga}</span>
        </header>

        <PortableText value={song.lyrics} />
      </article>
    </main>
  );
}
