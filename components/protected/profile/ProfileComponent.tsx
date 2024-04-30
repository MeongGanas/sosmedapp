"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit2, User as UserIcon } from "lucide-react";
import { useParams } from "next/navigation";
import useDetailUser from "@/app/hooks/useUserDetail";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import { Post } from "@/lib/definitions";
import { ProfilePostCard } from "@/components/protected/PostCard";
import FollowAction from "./FollowAction";
import { Follows } from "@prisma/client";
import UnfollowAction from "@/components/protected/profile/UnfollowAction";

export default function ProfileComponent() {
  const { username }: { username: string } = useParams();
  const currentUser = useCurrentUser();
  const { data, isLoading, error } = useDetailUser(username);

  if (isLoading) return <h1>Load user...</h1>;

  if (error) return <h1>{error.message}</h1>;

  const isFollowed = data.followedBy.some(
    (item: Follows) => item.followerId === currentUser?.id
  );

  return (
    <>
      <div className="flex items-center gap-5 border-b pt-5 pb-10 mb-5">
        <Avatar className="w-16 h-16">
          {data.image && <AvatarImage src={data.image} />}
          <AvatarFallback>
            <UserIcon />
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex mb-2 items-center gap-2">
            <h1 className="text-lg">{data?.name}</h1>
            {currentUser?.name === data.name && (
              <Button variant={"outline"} className="flex items-center gap-2">
                <Edit2 width={13} height={13} />
                Edit Profile
              </Button>
            )}
            {currentUser?.name !== data.name && !isFollowed && (
              <FollowAction following={data.id} follower={currentUser?.id} />
            )}
            {isFollowed && (
              <UnfollowAction following={data.id} follower={currentUser?.id} />
            )}
          </div>
          <ul className="flex gap-5">
            <li>
              <h4>{data.posts.length} Post</h4>
            </li>
            <li>
              <h4>{data.followedBy.length} Follower</h4>
            </li>
            <li>
              <h4>{data.following.length} Following</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {data.posts &&
          data.posts.map((post: Post) => (
            <ProfilePostCard post={post} user={data} key={post.id} />
          ))}
      </div>
    </>
  );
}
