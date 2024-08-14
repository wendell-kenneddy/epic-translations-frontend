import Link from "next/link";

export interface SongData {
  id: string;
  name: string;
  slug: string;
}

export interface Saga {
  id: string;
  name: string;
  songs: SongData[];
}

interface SongListProps {
  sagas: Saga[];
}

const textColors: Record<string, string> = {
  "Troy Saga": "text-red-400",
  "Polyphemus Saga": "text-orange-400",
  "Ocean Saga": "text-blue-400",
  "Circe Saga": "text-fuchsia-400",
  "Underworld Saga": "text-gray-400",
  "Thunder Saga": "text-yellow-400",
};

export function SongList({ sagas }: SongListProps) {
  return (
    <ul className="flex flex-col items-start gap-4">
      {sagas.map((saga) => (
        <li key={saga.id} className="space-y-1">
          <span className="font-medium text-lg text-slate-100">{saga.name}</span>

          <ul className="ml-4">
            {saga.songs.map((song) => (
              <li
                key={song.id}
                className={`${textColors[saga.name]} text-opacity-50 hover:text-opacity-100`}
              >
                <Link href={`/songs/${song.slug}`}>
                  <span>{song.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
