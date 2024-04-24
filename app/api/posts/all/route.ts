import db from "@/lib/db";

export async function GET() {
  try {
    const posts = await db.post.findMany({
      orderBy: { likes: "desc" },
      include: { user: true },
    });
    return Response.json(posts);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
