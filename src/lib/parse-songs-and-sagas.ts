import { Saga } from "@/components/song-list";
import { SongsAndSagasResponse } from "@/queries/fetch-songs";

export function parseSongsAndSagas(res: SongsAndSagasResponse) {
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
      index: curr.fields.index,
      name: curr.fields.name,
      songs: relatedSongs,
    });

    return acc;
  }, []);
  return sagas.sort((a, b) => a.index - b.index);
}
