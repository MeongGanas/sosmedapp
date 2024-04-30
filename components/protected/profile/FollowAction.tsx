"use client";
import FollowUser from "@/actions/user/follow";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";

export default function FollowAction({
  following,
  follower,
}: {
  following: string | undefined;
  follower: string | undefined;
}) {
  const followUserBind = FollowUser.bind(null, following, follower);
  const [state, dispatch] = useFormState(followUserBind, undefined);
  return (
    <form action={dispatch}>
      <FollowButton />
    </form>
  );
}

function FollowButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="flex items-center gap-2"
      type="submit"
      disabled={pending}
    >
      Follow
    </Button>
  );
}
