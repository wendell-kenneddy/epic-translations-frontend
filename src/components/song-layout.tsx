import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface SongLayoutProps {
  song: { name: string; lyrics: Document };
}

export function SongLayout({ song }: SongLayoutProps) {
  return (
    <main className="w-[90%] py-4 max-w-[500px] mx-auto space-y-4">
      <article className="space-y-4 text-left text-slate-100">
        <header className="w-full flex flex-col items-start justify-center">
          <h1 className="font-medium text-lg text-gray-100">{song.name}</h1>
        </header>

        {documentToReactComponents(song.lyrics, {
          renderText: (text) => {
            return text.split("\n").reduce((children: any, textSegment, index) => {
              return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
          },
        })}
      </article>
    </main>
  );
}
