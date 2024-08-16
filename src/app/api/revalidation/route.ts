import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { env } from "@/lib/env";

export async function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const { slug, revision }: { slug: string; revision: number } = await request.json();

  revalidateTag("songs");

  if (revision > 1) {
    revalidatePath(`/songs/${slug}`);
  }

  return NextResponse.json({ revalidated: true });
}
