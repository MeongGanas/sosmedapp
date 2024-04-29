import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { username: string | undefined } }
) {
  const username = params.username;
  try {
    const user = await db.user.findUnique({
      where: { name: username },
      include: {
        followedBy: true,
        following: true,
        posts: true,
      },
    });
    return Response.json(user);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
