"use client";
import { useAllPosts } from "@/app/hooks/usePosts";
import PostCard from "@/components/protected/PostCard";
import { Post } from "@/lib/definitions";

export default function Page() {
  const { data, isLoading, error } = useAllPosts();

  if (isLoading) return <div>Loading posts...</div>;

  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <main>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {data &&
          data.map((post: Post) => <PostCard post={post} key={post.id} />)}
      </div>
    </main>
  );
}
