"use client";
import { useAllPosts } from "@/app/hooks/usePosts";
import { ExplorePostCard } from "../PostCard";
import { Post } from "@/lib/definitions";
import Loading from "@/components/loading";

export default function AllPosts() {
  const { data, isLoading, error } = useAllPosts();

  if (isLoading) return <Loading />;

  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
      {data &&
        data.map((post: Post) => <ExplorePostCard post={post} key={post.id} />)}
    </div>
  );
}
