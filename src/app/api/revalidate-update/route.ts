export async function GET(request: Request) {
  try {
    const text = await request.text();
    console.log(text);
  } catch (error) {
    return new Response("Error", { status: 400 });
  }

  return new Response("Success", { status: 200 });
}
