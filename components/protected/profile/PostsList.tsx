import { Post } from "@/lib/definitions";
import { ProfilePostCard } from "../PostCard";

export default function PostsList({
  posts,
  isLoading,
  error,
}: {
  posts: Array<Post>;
  isLoading: boolean;
  error: { message: string };
}) {
  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
      {posts &&
        posts.map((post: Post) => (
          <ProfilePostCard post={post} key={post.id} admin={true} />
        ))}
    </div>
  );
}
