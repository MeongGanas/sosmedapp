import { Post } from "@/lib/definitions";
import { ProfilePostCard } from "../PostCard";
import { useUserPosts } from "@/app/hooks/usePosts";

export default function PostsList({ userId }: { userId: string | undefined }) {
  const { data, isLoading, error } = useUserPosts(userId);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
      {data &&
        data.map((post: Post) => (
          <ProfilePostCard
            post={post}
            key={post.id}
            admin={post.userId === userId}
          />
        ))}
    </div>
  );
}
