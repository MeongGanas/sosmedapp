"use client";
import FollowUser from "@/actions/user/follow";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";

export default function UnfollowAction({
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
      <UnfollowButton />
    </form>
  );
}

function UnfollowButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="flex items-center gap-2"
      type="submit"
      disabled={pending}
    >
      Unfollow
    </Button>
  );
}
