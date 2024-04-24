import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string | undefined } }
) {
  const id = params.id;
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: {
        followedBy: true,
        following: true,
      },
    });
    return Response.json(user);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
