import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { username: string | undefined } }
) {
  const username = params.username;

  try {
    if (!username) return;
    const user = await db.user.findMany({
      where: {
        name: {
          contains: username,
        },
      },
    });
    return Response.json(user);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
