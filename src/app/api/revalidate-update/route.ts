import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

export async function POST(req: Request) {
  try {
    const text = await req.text();
    const signature = req.headers.get(SIGNATURE_HEADER_NAME);
    if (
      !(await isValidSignature(
        text,
        String(signature),
        String(process.env.SANITY_UPDATE_WEBHOOK_SECRET)
      ))
    ) {
      return new Response(JSON.stringify({ success: false, message: "Invalid signature" }), {
        status: 401,
      });
    }
  } catch (error) {
    return new Response("Error", { status: 400 });
  }

  return new Response("Success", { status: 200 });
}
