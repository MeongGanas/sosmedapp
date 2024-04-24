import useFollow from "@/app/hooks/useFollow";

export default function Follow({ id }: { id: string | undefined }) {
  const { data, isLoading, error } = useFollow(id);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <ul className="flex gap-5">
        <li>
          <h4> Post</h4>
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
