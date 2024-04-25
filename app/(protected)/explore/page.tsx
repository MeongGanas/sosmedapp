"use client";
import { useAllPosts } from "@/app/hooks/usePosts";
import Loading from "@/components/loading";
import { ExplorePostCard } from "@/components/protected/PostCard";
import { Post } from "@/lib/definitions";
import { Suspense } from "react";

export default function Page() {
  const { data, isLoading, error } = useAllPosts();

  if (isLoading) return <div>Loading posts...</div>;

  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <section id="explore">
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {data &&
            data.map((post: Post) => (
              <ExplorePostCard post={post} key={post.id} />
            ))}
        </div>
      </Suspense>
    </section>
  );
}
