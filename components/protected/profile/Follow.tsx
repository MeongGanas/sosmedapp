import useFollow from "@/app/hooks/useFollow";
import { Post } from "@/lib/definitions";

interface Follow {
  id: string | undefined;
  posts: Array<Post>;
}

export default function Follow({ id, posts }: Follow) {
  const { data, isLoading, error } = useFollow(id);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <ul className="flex gap-5">
        <li>
          <h4>{posts.length} Post</h4>
        </li>
        <li>
          <h4>{data.followedBy.length} Follower</h4>
        </li>
        <li>
          <h4>{data.following.length} Following</h4>
        </li>
      </ul>
    </>
  );
}
