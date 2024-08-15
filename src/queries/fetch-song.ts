import { Document } from "@contentful/rich-text-types";
import { env } from "@/lib/env";
import { fetchSongs } from "./fetch-songs";

export async function fetchSong(slug: string) {
  const json = await fetchSongs();
  const songID = String(json.items.find((s) => s.fields.slug == slug)?.sys.id);
  const songResponse = await fetch(
    `${env.CONTENTFUL_API_URL}/entries/${songID}?access_token=${env.CONTENTFUL_ACCESS_TOKEN}&select=fields.name,fields.lyrics`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const songJson: { fields: { name: string; lyrics: Document } } = await songResponse.json();
  return songJson;
}
