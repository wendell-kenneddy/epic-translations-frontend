import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { env } from "@/lib/env";

export async function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body: { slug: string } = await request.json();

  console.log(body);
  revalidateTag("songs");
  revalidatePath(`/songs/${body.slug}`);

  return NextResponse.json({ revalidated: true });
}
