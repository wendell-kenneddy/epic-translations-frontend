import { env } from "@/lib/env";

export interface SongsAndSagasResponse {
  items: {
    sys: {
      id: string;
    };
    fields: {
      name: string;
      slug: string;
      saga: {
        sys: {
          id: string;
        };
      };
    };
  }[];
  includes: {
    Entry: {
      sys: { id: string };
      fields: { name: string };
    }[];
  };
}

export async function fetchSongs() {
  const response = await fetch(
    `${env.CONTENTFUL_API_URL}entries?access_token=${env.CONTENTFUL_ACCESS_TOKEN}&content_type=song&select=sys.id,fields.name,fields.slug,fields.saga&order=sys.createdAt&include=1`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["songs"] },
    }
  );
  const json: SongsAndSagasResponse = await response.json();
  return json;
}
