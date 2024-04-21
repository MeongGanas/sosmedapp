import { getAllPostsById } from "@/data/post";
import Image from "next/image";

export default async function PostsList() {
  const posts = await getAllPostsById();

  return (
    <div className="grid grid-cols-3 gap-1">
      {posts &&
        posts.map((post) => (
          <div className="w-full h-full flex items-center bg-black justify-center">
            <Image
              src={post.image}
              width={300}
              height={300}
              className="w-full"
              alt={post.id}
            />
          </div>
        ))}
    </div>
  );
}
