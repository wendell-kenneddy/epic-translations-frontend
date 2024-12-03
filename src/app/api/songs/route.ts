import { parseSongsAndSagas } from "@/lib/parse-songs-and-sagas";
import { fetchSongs } from "@/queries/fetch-songs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await fetchSongs();
  const sagas = parseSongsAndSagas(res);
  return NextResponse.json({ sagas });
}
