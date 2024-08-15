import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { verifyRequest } from "@contentful/node-apps-toolkit";
import { env } from "@/lib/env";

export async function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const canonicalRequest = {
    path: request.url,
    headers: requestHeaders,
    method: request.method,
    body: JSON.stringify(request.body),
  };

  console.log(canonicalRequest);

  return NextResponse.json({ revalidated: true });
}
