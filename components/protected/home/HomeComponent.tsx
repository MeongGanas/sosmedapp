"use client";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import { usePosts } from "@/app/hooks/usePosts";
import Loading from "@/components/loading";
import { UserWithPost } from "@/lib/definitions";
import HomePostCard from "./HomePostCard";

export default function HomeComponent() {
  const currentUser = useCurrentUser();
  const { data, isLoading, error } = usePosts(currentUser?.id);

  if (isLoading) return <Loading />;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="container">
      {data && data.map((user: UserWithPost) => <HomePostCard user={user} />)}
    </div>
  );
}
